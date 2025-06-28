// i18n çevirilerini yükle
document.querySelectorAll('[data-i18n]').forEach(el => {
  const key = el.getAttribute('data-i18n');
  const message = chrome.i18n.getMessage(key);
  if (message) el.textContent = message;
});

// Ayarları yükle
chrome.storage.sync.get(['clearHistory', 'clearCookies', 'clearCache'], (data) => {
  document.getElementById('clearHistory').checked = data.clearHistory ?? true; // varsayılan true
  document.getElementById('clearCookies').checked = data.clearCookies ?? false;
  document.getElementById('clearCache').checked = data.clearCache ?? false;
});

// Kaydet butonu
document.getElementById('saveBtn').addEventListener('click', () => {
  const options = {
    clearHistory: document.getElementById('clearHistory').checked,
    clearCookies: document.getElementById('clearCookies').checked,
    clearCache: document.getElementById('clearCache').checked
  };
  chrome.storage.sync.set(options, () => {
    alert('✔️ ' + chrome.i18n.getMessage("settings_saved"));
  });
});
