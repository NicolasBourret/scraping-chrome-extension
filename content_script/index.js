import { createPopup } from "./elements/popup";
import { removeEvent, handleElementBorder } from "./eventHandlers";
import { injectCss, popupStyles } from "./styles";

const elementWithListener = [];

const clickHandler = (event) => {
  document.removeEventListener("mouseover", handleElementBorder);
  elementWithListener.forEach(removeEvent);
  injectCss(popupStyles);
  const element = event.target;
  createPopup(element);
};

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.activateSelection) {
    document.addEventListener("mouseover", handleElementBorder);
    document.addEventListener("click", clickHandler, { once: true });
    sendResponse({ status: "active" });
  }
});
