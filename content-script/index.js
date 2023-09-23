const elementWithListener = [];

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
  elementWithListener.push(element);
};

document.addEventListener("click", (event) => {
  document.removeEventListener("mouseover", handleElementBorder);

  elementWithListener.forEach((element) => {
    element.removeEventListener("mouseover", addElementBorder);
  });
  console.log(event.target);
});

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.activateSelection) {
    document.addEventListener("mouseover", handleElementBorder);
    sendResponse({ status: "active" });
  }
});
