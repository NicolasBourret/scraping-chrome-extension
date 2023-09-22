const elementsOvered = [];

const selectElement = (element) => {
  element.addEventListener("click", () => {
    element.style.border = "none";
    document.removeEventListener("mouseover", addAndRemoveBorder);
  });
};

const addAndRemoveBorder = (e) => {
  if (elementsOvered.length > 0) {
    elementsOvered[0].style.border = "none";
    elementsOvered.shift();
  }
  const element = e.target;
  element.style.border = "1px solid green";
  elementsOvered.push(element);

  selectElement(element);
};

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.activateSelection) {
    document.addEventListener("mouseover", addAndRemoveBorder);
    sendResponse({ status: "activate" });
  } else {
    sendResponse({ status: "not-activate" });
  }
});
