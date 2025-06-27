document.getElementById("clearBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "clearHistory" }, response => {
    if (response.status === "success") {
      alert("Browsing history cleared successfully!");
    }
  });
});
