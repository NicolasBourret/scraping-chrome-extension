const addElementBorder = (event) => {
  const element = event.target;
  element.style.border = "2px solid black";
};

const removeElementBorder = (event) => {
  const element = event.target;
  element.style.border = "none";
};

const handleElementBorder = ({ target }) => {
  const element = target;

  element.addEventListener("mouseover", addElementBorder);
  element.addEventListener("mouseout", removeElementBorder);
};

document.addEventListener("click", (event) => {
  console.log(event.target);
});

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.activateSelection) {
    document.addEventListener("mouseover", handleElementBorder);
    sendResponse({ status: "activate" });
  }
});
