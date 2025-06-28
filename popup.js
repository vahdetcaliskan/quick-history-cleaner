document.getElementById("clearBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "clearData" }, response => {
    if (response.status === "success") {
      alert(chrome.i18n.getMessage("cleared_alert"));
    }
  });
});


document.getElementById("openHistoryPageBtn").addEventListener("click", () => {
  chrome.tabs.create({ url: "chrome://history/" });
});

// Otomatik metin yerleştirme
document.querySelectorAll('[data-i18n]').forEach(el => {
  const key = el.getAttribute('data-i18n');
  const message = chrome.i18n.getMessage(key);
  if (message) {
    el.textContent = message;
  }
});

document.getElementById("settingsBtn").addEventListener("click", () => {
  chrome.runtime.openOptionsPage();
});