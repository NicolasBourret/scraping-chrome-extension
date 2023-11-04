console.log("ok");

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log("test");
  if (req.data) {
    console.log(req.data);
    sendResponse({ message: "data are succesfully sent" });
  }
});
