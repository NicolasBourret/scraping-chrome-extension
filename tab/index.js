chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.data) {
    console.log(req.data);
    sendResponse({ message: "data are succesfully sent" });
  }
});
