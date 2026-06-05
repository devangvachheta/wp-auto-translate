// 202 languages from translate.wordpress.org
const LANGUAGES = [
  { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
  { code: 'sq', name: 'Albanian', flag: '🇦🇱' },
  { code: 'arq', name: 'Algerian Arabic', flag: '🇩🇿' },
  { code: 'am', name: 'Amharic', flag: '🇪🇹' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'arg', name: 'Aragonese', flag: '🌐' },
  { code: 'hy', name: 'Armenian', flag: '🇦🇲' },
  { code: 'frp', name: 'Arpitan', flag: '🌐' },
  { code: 'as', name: 'Assamese', flag: '🇮🇳' },
  { code: 'ast', name: 'Asturian', flag: '🌐' },
  { code: 'az', name: 'Azerbaijani', flag: '🇦🇿' },
  { code: 'az_TR', name: 'Azerbaijani (Turkey)', flag: '🇦🇿' },
  { code: 'bcc', name: 'Balochi Southern', flag: '🌐' },
  { code: 'ba', name: 'Bashkir', flag: '🌐' },
  { code: 'eu', name: 'Basque', flag: '🇪🇸' },
  { code: 'bel', name: 'Belarusian', flag: '🌐' },
  { code: 'bn_BD', name: 'Bengali (Bangladesh)', flag: '🇧🇩' },
  { code: 'bn_IN', name: 'Bengali (India)', flag: '🇮🇳' },
  { code: 'bho', name: 'Bhojpuri', flag: '🌐' },
  { code: 'brx', name: 'Bodo', flag: '🌐' },
  { code: 'gax', name: 'Borana-Arsi-Guji Oromo', flag: '🌐' },
  { code: 'bs_BA', name: 'Bosnian', flag: '🇧🇦' },
  { code: 'bre', name: 'Breton', flag: '🌐' },
  { code: 'bg_BG', name: 'Bulgarian', flag: '🇧🇬' },
  { code: 'ca', name: 'Catalan', flag: '🇪🇸' },
  { code: 'bal', name: 'Catalan (Balear)', flag: '🇪🇸' },
  { code: 'ca_valencia', name: 'Catalan (Valencian)', flag: '🇪🇸' },
  { code: 'ceb', name: 'Cebuano', flag: '🇵🇭' },
  { code: 'zh_CN', name: 'Chinese (China)', flag: '🇨🇳' },
  { code: 'zh_HK', name: 'Chinese (Hong Kong)', flag: '🇭🇰' },
  { code: 'zh_SG', name: 'Chinese (Singapore)', flag: '🇸🇬' },
  { code: 'zh_TW', name: 'Chinese (Taiwan)', flag: '🇹🇼' },
  { code: 'cor', name: 'Cornish', flag: '🌐' },
  { code: 'co', name: 'Corsican', flag: '🌐' },
  { code: 'hr', name: 'Croatian', flag: '🇭🇷' },
  { code: 'cs_CZ', name: 'Czech', flag: '🇨🇿' },
  { code: 'da_DK', name: 'Danish', flag: '🇩🇰' },
  { code: 'dv', name: 'Dhivehi', flag: '🌐' },
  { code: 'nl_NL', name: 'Dutch', flag: '🇳🇱' },
  { code: 'nl_BE', name: 'Dutch (Belgium)', flag: '🇧🇪' },
  { code: 'dzo', name: 'Dzongkha', flag: '🌐' },
  { code: 'art_xemoji', name: 'Emoji', flag: '🌐' },
  { code: 'en_AU', name: 'English (Australia)', flag: '🇦🇺' },
  { code: 'en_CA', name: 'English (Canada)', flag: '🇨🇦' },
  { code: 'en_NZ', name: 'English (New Zealand)', flag: '🇳🇿' },
  { code: 'art_xpirate', name: 'English (Pirate)', flag: '🌐' },
  { code: 'en_ZA', name: 'English (South Africa)', flag: '🇿🇦' },
  { code: 'en_GB', name: 'English (UK)', flag: '🇬🇧' },
  { code: 'eo', name: 'Esperanto', flag: '🌐' },
  { code: 'et', name: 'Estonian', flag: '🇪🇪' },
  { code: 'ewe', name: 'Ewe', flag: '🌐' },
  { code: 'fo', name: 'Faroese', flag: '🌐' },
  { code: 'fi', name: 'Finnish', flag: '🇫🇮' },
  { code: 'fon', name: 'Fon', flag: '🌐' },
  { code: 'fr_BE', name: 'French (Belgium)', flag: '🇧🇪' },
  { code: 'fr_CA', name: 'French (Canada)', flag: '🇨🇦' },
  { code: 'fr_FR', name: 'French (France)', flag: '🇫🇷' },
  { code: 'fy', name: 'Frisian', flag: '🌐' },
  { code: 'fur', name: 'Friulian', flag: '🌐' },
  { code: 'fuc', name: 'Fulah', flag: '🌐' },
  { code: 'gl_ES', name: 'Galician', flag: '🇪🇸' },
  { code: 'ka_GE', name: 'Georgian', flag: '🇬🇪' },
  { code: 'de_DE', name: 'German', flag: '🇩🇪' },
  { code: 'de_AT', name: 'German (Austria)', flag: '🇦🇹' },
  { code: 'de_CH', name: 'German (Switzerland)', flag: '🇨🇭' },
  { code: 'el', name: 'Greek', flag: '🇬🇷' },
  { code: 'kal', name: 'Greenlandic', flag: '🌐' },
  { code: 'gu', name: 'Gujarati', flag: '🇮🇳' },
  { code: 'hat', name: 'Haitian Creole', flag: '🌐' },
  { code: 'hau', name: 'Hausa', flag: '🌐' },
  { code: 'haw_US', name: 'Hawaiian', flag: '🇺🇸' },
  { code: 'haz', name: 'Hazaragi', flag: '🌐' },
  { code: 'he_IL', name: 'Hebrew', flag: '🇮🇱' },
  { code: 'hi_IN', name: 'Hindi', flag: '🇮🇳' },
  { code: 'hu_HU', name: 'Hungarian', flag: '🇭🇺' },
  { code: 'is_IS', name: 'Icelandic', flag: '🇮🇸' },
  { code: 'ido', name: 'Ido', flag: '🌐' },
  { code: 'ibo', name: 'Igbo', flag: '🌐' },
  { code: 'id_ID', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'ga', name: 'Irish', flag: '🇮🇪' },
  { code: 'it_IT', name: 'Italian', flag: '🇮🇹' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'jv_ID', name: 'Javanese', flag: '🇮🇩' },
  { code: 'kab', name: 'Kabyle', flag: '🌐' },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
  { code: 'kaa', name: 'Karakalpak', flag: '🌐' },
  { code: 'kk', name: 'Kazakh', flag: '🇰🇿' },
  { code: 'km', name: 'Khmer', flag: '🇰🇭' },
  { code: 'kin', name: 'Kinyarwanda', flag: '🇷🇼' },
  { code: 'ko_KR', name: 'Korean', flag: '🇰🇷' },
  { code: 'kmr', name: 'Kurdish (Kurmanji)', flag: '🌐' },
  { code: 'ckb', name: 'Kurdish (Sorani)', flag: '🏳️' },
  { code: 'kir', name: 'Kyrgyz', flag: '🌐' },
  { code: 'lo', name: 'Lao', flag: '🇱🇦' },
  { code: 'la', name: 'Latin', flag: '🌐' },
  { code: 'lv', name: 'Latvian', flag: '🇱🇻' },
  { code: 'lij', name: 'Ligurian', flag: '🌐' },
  { code: 'li', name: 'Limburgish', flag: '🌐' },
  { code: 'lin', name: 'Lingala', flag: '🌐' },
  { code: 'lt_LT', name: 'Lithuanian', flag: '🇱🇹' },
  { code: 'lmo', name: 'Lombard', flag: '🌐' },
  { code: 'dsb', name: 'Lower Sorbian', flag: '🌐' },
  { code: 'lug', name: 'Luganda', flag: '🇺🇬' },
  { code: 'lb_LU', name: 'Luxembourgish', flag: '🇱🇺' },
  { code: 'mk_MK', name: 'Macedonian', flag: '🇲🇰' },
  { code: 'mai', name: 'Maithili', flag: '🌐' },
  { code: 'mg_MG', name: 'Malagasy', flag: '🇲🇬' },
  { code: 'ms_MY', name: 'Malay', flag: '🇲🇾' },
  { code: 'ml_IN', name: 'Malayalam', flag: '🇮🇳' },
  { code: 'mlt', name: 'Maltese', flag: '🌐' },
  { code: 'mri', name: 'Maori', flag: '🌐' },
  { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
  { code: 'mfe', name: 'Mauritian Creole', flag: '🌐' },
  { code: 'mn', name: 'Mongolian', flag: '🇲🇳' },
  { code: 'me_ME', name: 'Montenegrin', flag: '🇲🇪' },
  { code: 'ary', name: 'Moroccan Arabic', flag: '🇲🇦' },
  { code: 'my_MM', name: 'Myanmar (Burmese)', flag: '🇲🇲' },
  { code: 'ne_NP', name: 'Nepali', flag: '🇳🇵' },
  { code: 'pcm', name: 'Nigerian Pidgin', flag: '🌐' },
  { code: 'nb_NO', name: 'Norwegian (Bokmål)', flag: '🇳🇴' },
  { code: 'nn_NO', name: 'Norwegian (Nynorsk)', flag: '🇳🇴' },
  { code: 'nqo', name: 'N’ko', flag: '🌐' },
  { code: 'oci', name: 'Occitan', flag: '🌐' },
  { code: 'ory', name: 'Oriya', flag: '🌐' },
  { code: 'os', name: 'Ossetic', flag: '🌐' },
  { code: 'pa_IN', name: 'Panjabi (India)', flag: '🇮🇳' },
  { code: 'pap_AW', name: 'Papiamento (Aruba)', flag: '🌐' },
  { code: 'pap_CW', name: 'Papiamento (Curaçao and Bonaire)', flag: '🌐' },
  { code: 'ps', name: 'Pashto', flag: '🇦🇫' },
  { code: 'fa_IR', name: 'Persian', flag: '🇮🇷' },
  { code: 'fa_AF', name: 'Persian (Afghanistan)', flag: '🇦🇫' },
  { code: 'pcd', name: 'Picard', flag: '🌐' },
  { code: 'pl_PL', name: 'Polish', flag: '🇵🇱' },
  { code: 'pt_AO', name: 'Portuguese (Angola)', flag: '🇦🇴' },
  { code: 'pt_BR', name: 'Portuguese (Brazil)', flag: '🇧🇷' },
  { code: 'pt_PT', name: 'Portuguese (Portugal)', flag: '🇵🇹' },
  { code: 'rhg', name: 'Rohingya', flag: '🌐' },
  { code: 'ro_RO', name: 'Romanian', flag: '🇷🇴' },
  { code: 'roh', name: 'Romansh', flag: '🌐' },
  { code: 'ru_RU', name: 'Russian', flag: '🇷🇺' },
  { code: 'sah', name: 'Sakha', flag: '🌐' },
  { code: 'sa_IN', name: 'Sanskrit', flag: '🇮🇳' },
  { code: 'skr', name: 'Saraiki', flag: '🌐' },
  { code: 'srd', name: 'Sardinian', flag: '🌐' },
  { code: 'gd', name: 'Scottish Gaelic', flag: '🌐' },
  { code: 'sr_RS', name: 'Serbian', flag: '🇷🇸' },
  { code: 'sna', name: 'Shona', flag: '🌐' },
  { code: 'sq_XK', name: 'Shqip (Kosovo)', flag: '🇽🇰' },
  { code: 'scn', name: 'Sicilian', flag: '🌐' },
  { code: 'szl', name: 'Silesian', flag: '🌐' },
  { code: 'snd', name: 'Sindhi', flag: '🌐' },
  { code: 'si_LK', name: 'Sinhala', flag: '🇱🇰' },
  { code: 'sk_SK', name: 'Slovak', flag: '🇸🇰' },
  { code: 'sl_SI', name: 'Slovenian', flag: '🇸🇮' },
  { code: 'so_SO', name: 'Somali', flag: '🇸🇴' },
  { code: 'azb', name: 'South Azerbaijani', flag: '🌐' },
  { code: 'es_AR', name: 'Spanish (Argentina)', flag: '🇦🇷' },
  { code: 'es_CL', name: 'Spanish (Chile)', flag: '🇨🇱' },
  { code: 'es_CO', name: 'Spanish (Colombia)', flag: '🇨🇴' },
  { code: 'es_CR', name: 'Spanish (Costa Rica)', flag: '🇨🇷' },
  { code: 'es_DO', name: 'Spanish (Dominican Republic)', flag: '🇩🇴' },
  { code: 'es_EC', name: 'Spanish (Ecuador)', flag: '🇪🇨' },
  { code: 'es_GT', name: 'Spanish (Guatemala)', flag: '🇬🇹' },
  { code: 'es_HN', name: 'Spanish (Honduras)', flag: '🇭🇳' },
  { code: 'es_MX', name: 'Spanish (Mexico)', flag: '🇲🇽' },
  { code: 'es_PE', name: 'Spanish (Peru)', flag: '🇵🇪' },
  { code: 'es_PR', name: 'Spanish (Puerto Rico)', flag: '🇵🇷' },
  { code: 'es_ES', name: 'Spanish (Spain)', flag: '🇪🇸' },
  { code: 'es_UY', name: 'Spanish (Uruguay)', flag: '🇺🇾' },
  { code: 'es_VE', name: 'Spanish (Venezuela)', flag: '🇻🇪' },
  { code: 'su_ID', name: 'Sundanese', flag: '🇮🇩' },
  { code: 'sw', name: 'Swahili', flag: '🇰🇪' },
  { code: 'ssw', name: 'Swati', flag: '🌐' },
  { code: 'sv_SE', name: 'Swedish', flag: '🇸🇪' },
  { code: 'syr', name: 'Syriac', flag: '🌐' },
  { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
  { code: 'tah', name: 'Tahitian', flag: '🌐' },
  { code: 'tg', name: 'Tajik', flag: '🇹🇯' },
  { code: 'zgh', name: 'Tamazight', flag: '🌐' },
  { code: 'tzm', name: 'Tamazight (Central Atlas)', flag: '🌐' },
  { code: 'ta_IN', name: 'Tamil', flag: '🇮🇳' },
  { code: 'ta_LK', name: 'Tamil (Sri Lanka)', flag: '🇱🇰' },
  { code: 'tt_RU', name: 'Tatar', flag: '🇷🇺' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },
  { code: 'th', name: 'Thai', flag: '🇹🇭' },
  { code: 'bo', name: 'Tibetan', flag: '🌐' },
  { code: 'tir', name: 'Tigrinya', flag: '🌐' },
  { code: 'tr_TR', name: 'Turkish', flag: '🇹🇷' },
  { code: 'tuk', name: 'Turkmen', flag: '🌐' },
  { code: 'twd', name: 'Tweants', flag: '🌐' },
  { code: 'ug_CN', name: 'Uighur', flag: '🇨🇳' },
  { code: 'uk', name: 'Ukrainian', flag: '🇺🇦' },
  { code: 'hsb', name: 'Upper Sorbian', flag: '🌐' },
  { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
  { code: 'uz_UZ', name: 'Uzbek', flag: '🇺🇿' },
  { code: 'vec', name: 'Venetian', flag: '🌐' },
  { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },
  { code: 'cy', name: 'Welsh', flag: '🇬🇧' },
  { code: 'wol', name: 'Wolof', flag: '🌐' },
  { code: 'xho', name: 'Xhosa', flag: '🌐' },
  { code: 'yor', name: 'Yoruba', flag: '🌐' },
  { code: 'zul', name: 'Zulu', flag: '🌐' },
];

// ─── State ────────────────────────────────────────────────────────────────────
let isRunning  = false;
let shouldStop = false;
let selectedLang = LANGUAGES[0];
let userDelay  = 500; // default 500ms — UI se update hoga

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
  } catch (e) { return text; }
}

// ─── jQuery trigger ───────────────────────────────────────────────────────────
function jqueryClick(el) {
  if (window.jQuery) { window.jQuery(el).trigger('click'); return; }
  el.click();
}

// ─── Textarea helpers ─────────────────────────────────────────────────────────
function setNativeValue(el, value) {
  const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')?.set;
  if (setter) setter.call(el, value); else el.value = value;
  ['input', 'change', 'keyup'].forEach(ev => el.dispatchEvent(new Event(ev, { bubbles: true })));
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

async function waitForSuggestBtn(timeoutMs = 6000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const btn = document.querySelector(
      'button[data-nonce].translation-actions__save, ' +
      'button[data-nonce][aria-label*="Suggest"]'
    );
    if (btn && btn.offsetParent !== null) return btn;
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
    const ta = document.querySelector('textarea[placeholder*="translation" i], textarea[placeholder*="enter" i]');
    if (!ta || ta.offsetParent === null) return 'closed';
    const err = document.querySelector('.notice-error, .translation-editor__error');
    if (err?.offsetParent && err.textContent.toLowerCase().includes('error')) return 'error';
    await sleep(300);
  }
  return 'timeout';
}

function closeEditor() {
  const sels = ['button[aria-label="Cancel"]','button[title="Cancel"]','a.translation-cancel','.translation-editor__header button','div.editor > a[href="#"]'];
  for (const s of sels) { const el = document.querySelector(s); if (el) { el.click(); return; } }
  document.querySelectorAll('div.editor button, div.translation-editor button').forEach(b => {
    if (!b.textContent.trim() || b.textContent.trim() === '×' || b.getAttribute('aria-label')?.includes('Cancel')) b.click();
  });
}

// ─── Single row — v9 working logic ───────────────────────────────────────────
async function translateRow(previewRow, rowNum, total) {
  if (shouldStop) return false;

  const originalSpan = previewRow.querySelector('.original-text');
  if (!originalSpan) return false;
  const originalText = originalSpan.textContent.trim();
  const rowId = (previewRow.id || previewRow.getAttribute('row') || '').match(/(\d+)$/)?.[1];
  const detailsLink = previewRow.querySelector('a.action.edit');
  if (!detailsLink) return false;

  updateStatus(`⏳ ${rowNum}/${total} — Translating...`);
  console.log(`[WPT] (${rowNum}/${total}) id=${rowId} | "${originalText}"`);

  const translated = await translateText(originalText, selectedLang.code);
  console.log(`[WPT] → "${translated}"`);
  if (shouldStop) return false;

  jqueryClick(detailsLink);
  await sleep(userDelay);

  const ta = await waitForTextarea(8000);
  if (!ta) { console.warn('[WPT] Textarea nahi mila'); return false; }

  ta.focus();
  setNativeValue(ta, translated);
  await sleep(Math.floor(userDelay / 2));
  console.log(`[WPT] Textarea: "${ta.value}"`);

  const suggestBtn = await waitForSuggestBtn(6000);
  if (!suggestBtn) { console.warn('[WPT] Suggest button nahi mila'); closeEditor(); return false; }

  const btnNonce = suggestBtn.getAttribute('data-nonce');
  console.log(`[WPT] Button nonce: ${btnNonce}`);

  jqueryClick(suggestBtn);
  console.log(`[WPT] jQuery click fired`);

  const result = await waitForEditorClose(12000);
  console.log(`[WPT] Editor result: ${result}`);

  if (result === 'closed') {
    console.log(`[WPT] ✅ Success: "${translated}"`);
    await sleep(Math.floor(userDelay / 2));
    return true;
  }

  console.warn(`[WPT] ⚠ result=${result}`);
  closeEditor();
  await sleep(800);
  return false;
}

// ─── Main loop ────────────────────────────────────────────────────────────────
async function startTranslation() {
  if (isRunning) return;
  isRunning = true; shouldStop = false;
  startBtn.disabled = true; stopBtn.style.display = 'inline-block';

  userDelay = Math.max(200, parseInt(delayInput.value, 10) || 500);
  const maxRows = Math.min(parseInt(maxInput.value, 10) || 100, 5000);
  const rows = Array.from(
    document.querySelectorAll('tr.preview.untranslated:not([data-wpt-done])')
  ).slice(0, maxRows);

  console.log(`[WPT] ${rows.length} rows | max=${maxRows} | lang=${selectedLang.name}`);
  if (rows.length === 0) { alert('✅ Koi untranslated row nahi! Page reload karein.'); resetUI(); return; }

  let done = 0, failed = 0;
  for (let i = 0; i < rows.length; i++) {
    if (shouldStop) { console.log('[WPT] Stopped'); break; }
    if (!rows[i].classList.contains('untranslated')) continue;
    const ok = await translateRow(rows[i], i + 1, rows.length);
    if (ok) { done++; rows[i].setAttribute('data-wpt-done', '1'); }
    else     { failed++; await sleep(1000); }
    updateStatus(`⏳ ${i+1}/${rows.length} — ✅${done} ❌${failed}`);
  }

  const msg = `✅ ${done} translated\n❌ ${failed} failed\n📊 ${rows.length} total` + (shouldStop ? '\n🛑 Stopped' : '');
  alert('Translation ' + (shouldStop ? 'stopped' : 'complete') + '!\n' + msg);
  resetUI();
}

function stopTranslation() { shouldStop = true; stopBtn.style.display = 'none'; updateStatus('🛑 Stopping...'); }
function resetUI() { isRunning = false; shouldStop = false; startBtn.disabled = false; stopBtn.style.display = 'none'; updateStatus(null); }
function updateStatus(t) { statusEl.textContent = t || ''; statusEl.style.display = t ? 'block' : 'none'; }

// ─── UI ───────────────────────────────────────────────────────────────────────
const panel = document.createElement('div');
Object.assign(panel.style, {
  position: 'fixed', top: '8px', right: '8px', zIndex: '999999',
  background: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '10px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
  fontSize: '13px', minWidth: '220px', overflow: 'hidden', display: 'none'
});

// Header (drag handle)
const header = document.createElement('div');
Object.assign(header.style, {
  background: '#0073aa', color: '#fff', padding: '9px 12px',
  display: 'flex', alignItems: 'center',
  cursor: 'grab', userSelect: 'none', borderRadius: '10px 10px 0 0'
});
header.innerHTML = '<span style="font-weight:600;font-size:13px">🌐 WP Auto Translator</span>';
panel.appendChild(header);

// Body
const body = document.createElement('div');
body.style.padding = '12px';
panel.appendChild(body);

// Language label
const langLabel = document.createElement('div');
langLabel.textContent = 'Language';
Object.assign(langLabel.style, { fontSize: '11px', fontWeight: '600', color: '#6c757d', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' });
body.appendChild(langLabel);

// Search
const langSearch = document.createElement('input');
langSearch.type = 'text'; langSearch.placeholder = '🔍 Search language...';
Object.assign(langSearch.style, {
  width: '100%', padding: '5px 8px', border: '1px solid #ced4da',
  borderRadius: '6px', fontSize: '12px', marginBottom: '4px',
  boxSizing: 'border-box', background: '#fff'
});

// List
const langList = document.createElement('div');
Object.assign(langList.style, {
  maxHeight: '150px', overflowY: 'auto', border: '1px solid #ced4da',
  borderRadius: '6px', background: '#fff', marginBottom: '10px'
});

function renderLangList(filter = '') {
  langList.innerHTML = '';
  LANGUAGES.filter(l => l.name.toLowerCase().includes(filter.toLowerCase()) || l.code.toLowerCase().includes(filter.toLowerCase()))
  .forEach(lang => {
    const item = document.createElement('div');
    const active = selectedLang.code === lang.code;
    Object.assign(item.style, {
      padding: '5px 9px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
      fontSize: '12px', borderBottom: '1px solid #f0f0f0',
      background: active ? '#e8f4fd' : 'transparent',
      fontWeight: active ? '600' : '400', color: active ? '#0073aa' : '#333'
    });
    item.innerHTML = `<span>${lang.flag}</span><span>${lang.name}</span>` + (active ? '<span style="margin-left:auto;color:#0073aa">✓</span>' : '');
    item.addEventListener('mouseenter', () => { if (!active) item.style.background = '#f8f9fa'; });
    item.addEventListener('mouseleave', () => { if (!active) item.style.background = 'transparent'; });
    item.addEventListener('click', () => {
      selectedLang = lang;
      localStorage.setItem('wpt-lang', lang.code);
      renderLangList(langSearch.value);
    });
    langList.appendChild(item);
  });
}

langSearch.addEventListener('input', () => renderLangList(langSearch.value));
body.appendChild(langSearch);
body.appendChild(langList);

// Restore saved lang
const savedLang = localStorage.getItem('wpt-lang');
if (savedLang) { const f = LANGUAGES.find(l => l.code === savedLang); if (f) selectedLang = f; }
renderLangList();

// Divider
const div1 = document.createElement('div');
Object.assign(div1.style, { borderTop: '1px solid #dee2e6', margin: '0 0 10px' });
body.appendChild(div1);

// Max rows + Delay — one row each
const settingsGrid = document.createElement('div');
settingsGrid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:10px';

// Max rows
const maxCol = document.createElement('div');
const maxLabel = document.createElement('div');
maxLabel.textContent = 'Max rows';
maxLabel.style.cssText = 'font-size:11px;color:#6c757d;font-weight:600;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:3px';
const maxInput = document.createElement('input');
maxInput.type = 'number'; maxInput.value = '1'; maxInput.min = '1'; maxInput.max = '5000';
maxInput.style.cssText = 'width:100%;padding:4px 6px;border:1px solid #ced4da;border-radius:6px;font-size:12px;text-align:center;box-sizing:border-box';
maxCol.appendChild(maxLabel); maxCol.appendChild(maxInput);

// Delay
const delayCol = document.createElement('div');
const delayLabel = document.createElement('div');
delayLabel.textContent = 'Delay (ms)';
delayLabel.style.cssText = 'font-size:11px;color:#6c757d;font-weight:600;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:3px';
const delayInput = document.createElement('input');
delayInput.type = 'number'; delayInput.value = '500'; delayInput.min = '200'; delayInput.max = '5000'; delayInput.step = '100';
delayInput.style.cssText = 'width:100%;padding:4px 6px;border:1px solid #ced4da;border-radius:6px;font-size:12px;text-align:center;box-sizing:border-box';
// Save delay preference
delayInput.addEventListener('change', () => localStorage.setItem('wpt-delay', delayInput.value));
const savedDelay = localStorage.getItem('wpt-delay');
if (savedDelay) delayInput.value = savedDelay;
userDelay = Math.max(200, parseInt(savedDelay || '500', 10));
delayCol.appendChild(delayLabel); delayCol.appendChild(delayInput);

settingsGrid.appendChild(maxCol);
settingsGrid.appendChild(delayCol);
body.appendChild(settingsGrid);

// Buttons
const btnRow = document.createElement('div');
Object.assign(btnRow.style, { display: 'flex', gap: '6px', marginBottom: '8px' });

const startBtn = document.createElement('button');
startBtn.textContent = '▶ Start';
startBtn.style.cssText = 'flex:1;background:#0073aa;color:#fff;border:none;padding:7px 10px;border-radius:6px;cursor:pointer;font-weight:600;font-size:12px';
startBtn.addEventListener('click', startTranslation);

const stopBtn = document.createElement('button');
stopBtn.textContent = '⏹ Stop';
stopBtn.style.cssText = 'flex:1;background:#dc3545;color:#fff;border:none;padding:7px 10px;border-radius:6px;cursor:pointer;font-weight:600;font-size:12px;display:none';
stopBtn.addEventListener('click', stopTranslation);

btnRow.appendChild(startBtn); btnRow.appendChild(stopBtn);
body.appendChild(btnRow);

// Status
const statusEl = document.createElement('div');
statusEl.style.cssText = 'font-size:11px;color:#495057;display:none;background:#e8f4fd;border-radius:6px;padding:5px 8px;text-align:center;font-weight:500';
body.appendChild(statusEl);

document.body.appendChild(panel);

// ─── Drag ─────────────────────────────────────────────────────────────────────
let isDragging = false, dSX, dSY, pSX, pSY;
header.addEventListener('mousedown', e => {
  isDragging = true; dSX = e.clientX; dSY = e.clientY;
  const r = panel.getBoundingClientRect(); pSX = r.left; pSY = r.top;
  header.style.cursor = 'grabbing';
  panel.style.right = 'auto'; panel.style.bottom = 'auto';
  panel.style.left = pSX + 'px'; panel.style.top = pSY + 'px';
  e.preventDefault();
});
document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const l = Math.max(0, Math.min(window.innerWidth - panel.offsetWidth,   pSX + e.clientX - dSX));
  const t = Math.max(0, Math.min(window.innerHeight - panel.offsetHeight, pSY + e.clientY - dSY));
  panel.style.left = l + 'px'; panel.style.top = t + 'px';
});
document.addEventListener('mouseup', () => {
  if (!isDragging) return; isDragging = false; header.style.cursor = 'grab';
  localStorage.setItem('wpt-left', panel.style.left);
  localStorage.setItem('wpt-top',  panel.style.top);
});

// Restore position
const sl = localStorage.getItem('wpt-left'), st = localStorage.getItem('wpt-top');
if (sl && st) { panel.style.right = 'auto'; panel.style.left = sl; panel.style.top = st; }

// ─── Toggle ───────────────────────────────────────────────────────────────────
chrome.runtime.onMessage.addListener(msg => {
  if (msg.action === 'togglePanel') panel.style.display = msg.show ? 'block' : 'none';
});
