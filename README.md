# 🌐 WP Auto Translator

A Chrome extension that automatically translates WordPress plugin/theme strings on [translate.wordpress.org](https://translate.wordpress.org) using Google Translate.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Manifest](https://img.shields.io/badge/manifest-v3-green)
![Languages](https://img.shields.io/badge/languages-45+-orange)

---

## ✨ Features

- **One-click automation** — Translates all untranslated strings automatically
- **45+ languages** — Gujarati, Hindi, Spanish, French, German, Japanese and more
- **Searchable language list** — Find your language instantly
- **Stop button** — Pause at any time
- **Max rows control** — Translate 1 to 5000 rows at a time
- **Draggable panel** — Move the UI anywhere on screen
- **Remembers position & language** — Settings saved across sessions
- **Hidden by default** — Panel opens only when you click the extension icon

---

## 📦 Installation

### Step 1 — Download
Download or clone this repository:
```
git clone https://github.com/yourusername/wp-auto-translator.git
```
Or download the ZIP and extract it.

### Step 2 — Load in Chrome
1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Select the extracted folder (`wp-auto-translator/`)

### Step 3 — Pin the extension
1. Click the puzzle piece 🧩 icon in Chrome toolbar
2. Pin **WP Auto Translator**

---

## 🚀 How to Use

1. Go to [translate.wordpress.org](https://translate.wordpress.org) and open any plugin/theme translation page
2. Click the **WP Auto Translator** icon in your toolbar to open the panel
3. **Select your language** from the list (search to filter)
4. Set **Max rows** (start with `1` to test, then increase)
5. Click **▶ Start**
6. Watch translations appear automatically!

---

## 🔧 How It Works

```
Details click → Editor opens → Google Translate API → Text injected → Suggest clicked → Next row
```

1. Finds all untranslated rows on the page
2. For each row: opens the editor by clicking "Details"
3. Fetches translation from Google Translate (free, no API key needed)
4. Injects the translated text into the textarea
5. Clicks the "Suggest" button via jQuery trigger
6. Waits for the editor to close, then moves to the next row

---

## ➕ Adding a New Language

Open `content.js` and add one line in the `LANGUAGES` array at the top:

```js
{ code: 'xx', name: 'Language Name', flag: '🏳️' },
```

**Language codes** follow Google Translate format. Examples:
| Language | Code |
|----------|------|
| Gujarati | `gu` |
| Hindi | `hi` |
| French | `fr` |
| Japanese | `ja` |
| Arabic | `ar` |

Full list: [Google Translate Language Codes](https://cloud.google.com/translate/docs/languages)

---

## 📁 File Structure

```
wp-auto-translator/
├── manifest.json      # Chrome extension config
├── background.js      # Handles toolbar icon click (show/hide panel)
├── content.js         # Main logic — translation automation + UI
└── README.md          # This file
```

---

## ⚠️ Notes

- **Requires login** — You must be logged in to translate.wordpress.org
- **Rate limiting** — The extension adds delays between rows to avoid server errors
- **Google Translate** — Translations are machine-generated; review before approving
- **Waiting status** — Suggested translations go into "Waiting" status and need GTE approval
- Only works on `https://translate.wordpress.org/*`

---

## 🛠️ Updating the Extension (after editing files)

After editing `content.js` directly:
1. Go to `chrome://extensions/`
2. Click the **🔄 refresh icon** on the extension card
3. Reload the translate.wordpress.org page

---

## 📄 License

MIT License — free to use, modify, and share.
