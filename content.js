// ─── State ───────────────────────────────────────────────────────────────────
let isRunning = false;
let shouldStop = false;
let selectedLang = { code: 'gu', name: 'Gujarati' };

const LANGUAGES = [
  { code: 'gu', name: 'Gujarati',        flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi',           flag: '🇮🇳' },
  { code: 'es', name: 'Spanish (Chile)', flag: '🇨🇱' },
];

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── Google Translate ─────────────────────────────────────────────────────────
async function translateText(text, langCode) {
  const url =
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${langCode}&dt=t&q=` +
    encodeURIComponent(text);
  try {
    const res  = await fetch(url);
    const data = await res.json();
    return data?.[0]?.map(x => x?.[0]).filter(Boolean).join('') || text;
  } catch (e) {
    console.error("[WP Translator] Translate error:", e);
    return text;
  }
}

// ─── jQuery trigger — GlotPress ka real event fire karo ──────────────────────
function jqueryClick(el) {
  // Method 1: jQuery trigger (GlotPress jQuery handler ke liye)
  if (window.jQuery) {
    window.jQuery(el).trigger('click');
    return true;
  }
  // Method 2: native click
  el.click();
  return false;
}

// ─── Direct AJAX — button ka data-nonce use karke ────────────────────────────
async function submitViaAjax(originalId, translatedText, nonce) {
  // GlotPress ka exact AJAX endpoint
  const ajaxUrl = window.ajaxurl || '/wp-admin/admin-ajax.php';
  const baseUrl = window.location.href.replace(/\/$/, '');

  // GlotPress POST format — exactly wahi jo manually hota hai
  const data = new URLSearchParams();
  data.append('original_id', originalId);
  data.append(`translation[${originalId}][]`, translatedText);
  data.append('translation_source', 'frontend');
  data.append('_gp_route_nonce', nonce);

  console.log(`[WP Translator] AJAX | id=${originalId} nonce=${nonce}`);
  console.log(`[WP Translator] text="${translatedText}"`);

  const res = await fetch(baseUrl, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data.toString()
  });

  const txt = await res.text();
  console.log(`[WP Translator] Response ${res.status}:`, txt.substring(0, 300));

  if (res.status === 403) return { ok: false, reason: '403 Forbidden — nonce invalid' };
  if (res.status === 200) return { ok: true };
  return { ok: false, reason: `HTTP ${res.status}` };
}

// ─── Textarea helpers ─────────────────────────────────────────────────────────
function setNativeValue(el, value) {
  const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')?.set;
  if (setter) setter.call(el, value); else el.value = value;
  ['input', 'change', 'keyup'].forEach(ev =>
    el.dispatchEvent(new Event(ev, { bubbles: true }))
  );
}

async function waitForTextarea(timeoutMs = 8000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    for (const ta of document.querySelectorAll('textarea')) {
      if (ta.offsetParent !== null && (
        ta.placeholder?.toLowerCase().includes('translation') ||
        ta.placeholder?.toLowerCase().includes('enter') ||
        (ta.value === '' && ta.offsetHeight > 40)
      )) return ta;
    }
    await sleep(200);
  }
  return null;
}

// Suggest button — data-nonce wala
async function waitForSuggestBtn(timeoutMs = 6000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    // Exact: button with data-nonce attribute
    const btn = document.querySelector(
      'button[data-nonce].translation-actions__save, ' +
      'button[data-nonce][aria-label*="Suggest"], ' +
      'button[data-nonce][aria-label*="Save"]'
    );
    if (btn && btn.offsetParent !== null) return btn;

    // Fallback: any visible Suggest/Save button
    const fallback = Array.from(document.querySelectorAll('button'))
      .find(b => /^(Suggest|Save)$/i.test(b.textContent.trim()) && b.offsetParent !== null);
    if (fallback) return fallback;

    await sleep(200);
  }
  return null;
}

async function waitForEditorClose(timeoutMs = 12000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const ta = document.querySelector(
      'textarea[placeholder*="translation" i], textarea[placeholder*="enter" i]'
    );
    if (!ta || ta.offsetParent === null) return 'closed';

    // Error detect
    const err = document.querySelector(
      '.notice-error, .translation-editor__error, [class*="error"]:not(script):not(link)'
    );
    if (err && err.offsetParent !== null && err.textContent.toLowerCase().includes('error')) {
      return 'error';
    }
    await sleep(300);
  }
  return 'timeout';
}

function closeEditor() {
  // X button ya cancel
  const closeSelectors = [
    'button[aria-label="Cancel"]',
    'button[title="Cancel"]',
    'a.translation-cancel',
    '.translation-editor__header button',
    'div.editor > a[href="#"]',
  ];
  for (const sel of closeSelectors) {
    const el = document.querySelector(sel);
    if (el) { el.click(); return; }
  }
  // GlotPress editor X — upar wala close icon
  const allBtns = document.querySelectorAll('div.editor button, div.translation-editor button');
  for (const b of allBtns) {
    if (!b.textContent.trim() || b.textContent.trim() === '×' || b.getAttribute('aria-label')?.includes('Cancel')) {
      b.click(); return;
    }
  }
}

// ─── Single row ───────────────────────────────────────────────────────────────
async function translateRow(previewRow, rowNum, total) {
  if (shouldStop) return false;

  const originalSpan = previewRow.querySelector('.original-text');
  if (!originalSpan) return false;
  const originalText = originalSpan.textContent.trim();
  const rowId = (previewRow.id || previewRow.getAttribute('row') || '').match(/(\d+)$/)?.[1];

  const detailsLink = previewRow.querySelector('a.action.edit');
  if (!detailsLink) return false;

  updateStatus(`⏳ ${rowNum}/${total} — Translating...`);
  console.log(`[WP Translator] (${rowNum}/${total}) id=${rowId} | "${originalText}"`);

  // 1. Translate
  const translated = await translateText(originalText, selectedLang.code);
  console.log(`[WP Translator] → "${translated}"`);
  if (shouldStop) return false;

  // 2. Editor open karo
  jqueryClick(detailsLink);
  await sleep(1200);

  // 3. Textarea fill karo
  const ta = await waitForTextarea(8000);
  if (!ta) {
    console.warn(`[WP Translator] ❌ Textarea nahi mila`);
    return false;
  }
  ta.focus();
  setNativeValue(ta, translated);
  await sleep(700);
  console.log(`[WP Translator] Textarea: "${ta.value}"`);

  // 4. Suggest button lo — data-nonce padhenge
  const suggestBtn = await waitForSuggestBtn(6000);
  if (!suggestBtn) {
    console.warn(`[WP Translator] ❌ Suggest button nahi mila`);
    closeEditor();
    return false;
  }

  const btnNonce = suggestBtn.getAttribute('data-nonce');
  console.log(`[WP Translator] Button nonce: ${btnNonce}`);

  // 5. jQuery trigger — GlotPress ka handler properly fire hoga
  jqueryClick(suggestBtn);
  console.log(`[WP Translator] jQuery click fired`);

  // 6. Wait for result
  const result = await waitForEditorClose(12000);
  console.log(`[WP Translator] Editor result: ${result}`);

  if (result === 'closed') {
    console.log(`[WP Translator] ✅ Success: "${translated}"`);
    await sleep(500);
    return true;
  }

  // Error aaya — direct AJAX fallback with button's nonce
  console.warn(`[WP Translator] ⚠ result=${result}, trying AJAX with btn nonce`);
  closeEditor();
  await sleep(800);

  if (rowId && btnNonce) {
    const apiResult = await submitViaAjax(rowId, translated, btnNonce);
    if (apiResult.ok) {
      console.log(`[WP Translator] ✅ AJAX fallback success`);
      await sleep(1000);
      return true;
    }
    console.warn(`[WP Translator] ❌ AJAX fallback failed:`, apiResult.reason);
  }

  return false;
}

// ─── Main loop ────────────────────────────────────────────────────────────────
async function startTranslation() {
  if (isRunning) return;
  isRunning = true;
  shouldStop = false;
  startBtn.disabled = true;
  stopBtn.style.display = 'inline-block';

  const maxRows = Math.min(parseInt(maxInput.value, 10) || 100, 5000);
  const rows = Array.from(
    document.querySelectorAll('tr.preview.untranslated:not([data-wpt-done])')
  ).slice(0, maxRows);

  console.log(`[WP Translator] ${rows.length} rows | max=${maxRows} | lang=${selectedLang.name}`);

  if (rows.length === 0) {
    alert("✅ Koi untranslated row nahi! Page reload karein.");
    resetUI(); return;
  }

  let done = 0, failed = 0;

  for (let i = 0; i < rows.length; i++) {
    if (shouldStop) { console.log("[WP Translator] 🛑 Stopped"); break; }
    const row = rows[i];
    if (!row.classList.contains('untranslated')) continue;

    const ok = await translateRow(row, i + 1, rows.length);
    if (ok) {
      done++;
      row.setAttribute('data-wpt-done', '1');
    } else {
      failed++;
      await sleep(2000);
    }
    updateStatus(`⏳ ${i + 1}/${rows.length} — ✅${done} ❌${failed}`);
  }

  const stopped = shouldStop ? '\n🛑 Stopped by user' : '';
  const msg = `✅ ${done} translated\n❌ ${failed} failed\n📊 ${rows.length} total${stopped}`;
  console.log("[WP Translator] === COMPLETE ===\n" + msg);
  alert("Translation " + (shouldStop ? "stopped" : "complete") + "!\n" + msg);
  resetUI();
}

function stopTranslation() {
  shouldStop = true;
  updateStatus("🛑 Stopping after current row...");
  stopBtn.style.display = 'none';
}

function resetUI() {
  isRunning = false; shouldStop = false;
  startBtn.disabled = false; stopBtn.style.display = 'none';
  updateStatus(null);
}

function updateStatus(text) {
  statusEl.textContent = text || '';
  statusEl.style.display = text ? 'block' : 'none';
}

// ─── UI ───────────────────────────────────────────────────────────────────────
const panel = document.createElement('div');
Object.assign(panel.style, {
  position: 'fixed', top: '8px', right: '8px', zIndex: '999999',
  background: '#fff', border: '1px solid #ccd', borderRadius: '8px',
  padding: '10px 14px', boxShadow: '0 3px 12px rgba(0,0,0,0.2)',
  fontFamily: 'sans-serif', fontSize: '12px', minWidth: '210px'
});

const titleEl = document.createElement('div');
titleEl.textContent = '🌐 WP Auto Translator';
Object.assign(titleEl.style, { fontWeight: 'bold', marginBottom: '8px', fontSize: '13px', color: '#0073aa' });
panel.appendChild(titleEl);

const langGroup = document.createElement('div');
langGroup.style.marginBottom = '8px';
LANGUAGES.forEach(lang => {
  const label = document.createElement('label');
  Object.assign(label.style, { display: 'block', marginBottom: '3px', cursor: 'pointer' });
  const radio = document.createElement('input');
  radio.type = 'radio'; radio.name = 'wpt-lang'; radio.value = lang.code;
  radio.checked = lang.code === selectedLang.code;
  radio.style.marginRight = '5px';
  radio.addEventListener('change', () => { selectedLang = lang; });
  label.appendChild(radio);
  label.appendChild(document.createTextNode(`${lang.flag} ${lang.name}`));
  langGroup.appendChild(label);
});
panel.appendChild(langGroup);

const maxRow = document.createElement('div');
Object.assign(maxRow.style, { display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' });
const maxLabel = document.createElement('label');
maxLabel.textContent = 'Max rows:';
maxLabel.style.fontSize = '12px';
const maxInput = document.createElement('input');
maxInput.type = 'number'; maxInput.value = '1'; maxInput.min = '1'; maxInput.max = '5000';
Object.assign(maxInput.style, {
  width: '70px', padding: '3px 6px', border: '1px solid #ccc',
  borderRadius: '4px', fontSize: '12px'
});
maxRow.appendChild(maxLabel);
maxRow.appendChild(maxInput);
panel.appendChild(maxRow);

const btnRow = document.createElement('div');
Object.assign(btnRow.style, { display: 'flex', gap: '6px', marginBottom: '6px' });

const startBtn = document.createElement('button');
startBtn.textContent = '▶ Start';
Object.assign(startBtn.style, {
  flex: '1', background: '#0073aa', color: '#fff', border: 'none',
  padding: '6px 10px', borderRadius: '4px', cursor: 'pointer',
  fontWeight: 'bold', fontSize: '12px'
});
startBtn.addEventListener('click', startTranslation);

const stopBtn = document.createElement('button');
stopBtn.textContent = '⏹ Stop';
Object.assign(stopBtn.style, {
  flex: '1', background: '#dc3232', color: '#fff', border: 'none',
  padding: '6px 10px', borderRadius: '4px', cursor: 'pointer',
  fontWeight: 'bold', fontSize: '12px', display: 'none'
});
stopBtn.addEventListener('click', stopTranslation);

btnRow.appendChild(startBtn);
btnRow.appendChild(stopBtn);
panel.appendChild(btnRow);

const statusEl = document.createElement('div');
Object.assign(statusEl.style, {
  fontSize: '11px', color: '#555', display: 'none',
  background: '#f0f6fc', borderRadius: '4px', padding: '4px 6px'
});
panel.appendChild(statusEl);

// Default: hidden — extension icon click se toggle hoga
panel.style.display = 'none';
document.body.appendChild(panel);

// Background script se message sunna
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'togglePanel') {
    panel.style.display = msg.show ? 'block' : 'none';
  }
});
