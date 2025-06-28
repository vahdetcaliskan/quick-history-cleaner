chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "clearData") {
    // Varsayılan ayarları burada tanımlıyoruz:
    chrome.storage.sync.get(
      {
        clearHistory: true,
        clearCookies: false,
        clearCache: false
      },
      (prefs) => {
        const millisecondsSinceEpoch = 0; // tüm zamanlar

        if (prefs.clearHistory) {
          chrome.history.deleteAll(() => {
            console.log("Browsing history cleared.");
          });
        }

        if (prefs.clearCookies || prefs.clearCache) {
          const dataToRemove = {};
          if (prefs.clearCookies) dataToRemove.cookies = true;
          if (prefs.clearCache) dataToRemove.cache = true;

          chrome.browsingData.remove({ since: millisecondsSinceEpoch }, dataToRemove, () => {
            console.log("Cookies/Cache cleared.");
          });
        }

        sendResponse({ status: "success" });
      }
    );

    return true; // async response
  }
});
