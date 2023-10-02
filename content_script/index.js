import { createPopup } from "./elements/popup";
import { removeEvent, handleElementBorder } from "./eventHandlers";
import { injectCss, notifiactionStyles, popupStyles } from "./styles";

const elementWithListener = [];

const clickHandler = (event) => {
  document.removeEventListener("mouseover", handleElementBorder);
  elementWithListener.forEach(removeEvent);

  const styles = popupStyles + notifiactionStyles;
  injectCss(styles);

  const element = event.target;

  const confirmationPopup = createPopup(element);

  document.body.appendChild(confirmationPopup);
};

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.activateSelection) {
    document.addEventListener("mouseover", handleElementBorder);
    document.addEventListener("click", clickHandler, { once: true });

    sendResponse({ status: "active" });
  }
});
