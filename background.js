chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "clearHistory") {
    chrome.history.deleteAll(() => {
      console.log("Browsing history cleared.");
      sendResponse({ status: "success" });
    });
    return true; // asynchronous response
  }
});
