const elementWithListener = [];

const addElementBorder = (event) => {
  const element = event.target;
  element.style.outline = "2px solid black";
};

const removeElementBorder = (event) => {
  const element = event.target;
  element.style.outline = "none";
};

const handleElementBorder = ({ target }) => {
  const element = target;

  element.addEventListener("mouseover", addElementBorder);
  element.addEventListener("mouseout", removeElementBorder);
  elementWithListener.push(element);
};

const removeEvent = (element) => {
  element.removeEventListener("mouseover", addElementBorder);
};

const popupOverlayStyles =
  ".sce-overlay { width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center }";
const popupContainerStyles =
  ".sce-container { padding: 32px 64px; background-color: rgba(255, 255, 255, 1); box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5); border-radius: 4px; display: flex; flex-direction: column; align-items: center; gap: 2rem; position: relative; }";
const popupTitleStyles = ".sce-title { font-size: 2rem; }";
const popupButtonsContainerStyles =
  ".sce-buttons-container { display: flex; justify-content: center; align-items: center; gap: 2rem; }";
const popupConfirmationButtonStyles =
  ".sce-button {  background: rgba(0, 0, 0, 1); color: rgba(255, 255, 255, 1); box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5); border: none; cursor: pointer; font-size: 1rem; padding: 0.5rem 1rem; border-radius: 0.25rem; }";
const popupCancelButtonStyles =
  ".sce-cancel-button {  background: rgba(255, 255, 255, 1); color: rgba(0, 0, 0, 1); box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5); border: none; cursor: pointer; font-size: 1rem; padding: 0.5rem 1rem; border-radius: 0.25rem; }";
const popupCloseButtonStyles =
  ".sce-close-button { width: 1.5rem; height: 1.5rem; background: rgba(0, 0, 0, 1); box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5); border: none; cursor: pointer; border-radius: 50%; position: absolute; right: -2rem; top: -2rem; padding: 0; }";

const injectCss = (styles) => {
  const element = document.createElement("style");
  element.textContent = styles;

  document.head.appendChild(element);
};

const createPopup = (element) => {
  const popupOverlay = document.createElement("div");
  popupOverlay.classList.add("sce-overlay");

  const popupContainer = document.createElement("div");
  popupContainer.classList.add("sce-container");

  const popupTitle = document.createElement("h2");
  popupTitle.textContent = "Voulez-vous sauvegarder cet élément ?";
  popupTitle.classList.add("sce-title");

  const popupButtonsContainer = document.createElement("div");
  popupButtonsContainer.classList.add("sce-buttons-container");

  const popupConfirmButton = document.createElement("button");
  popupConfirmButton.textContent = "Sauvegarder";
  popupConfirmButton.classList.add("sce-button");
  popupConfirmButton.addEventListener("click", () => {
    console.log(element);
    document.body.removeChild(popupOverlay);
  });

  const popupCancelButton = document.createElement("button");
  popupCancelButton.textContent = "Annuler";
  popupCancelButton.classList.add("sce-cancel-button");
  popupCancelButton.addEventListener("click", () => {
    document.body.removeChild(popupOverlay);
  });

  const popupCloseButton = document.createElement("button");
  popupCloseButton.classList.add("sce-close-button");
  popupCloseButton.addEventListener("click", () => {
    document.body.removeChild(popupOverlay);
  });

  const popupIcon = document.createElement("svg");
  popupIcon.innerHTML =
    "<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 384 512' stroke='white' fill='white'><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'/></svg>";

  popupButtonsContainer.appendChild(popupCancelButton);
  popupButtonsContainer.appendChild(popupConfirmButton);
  popupContainer.appendChild(popupTitle);
  popupContainer.appendChild(popupButtonsContainer);
  popupCloseButton.appendChild(popupIcon);
  popupContainer.appendChild(popupCloseButton);
  popupOverlay.appendChild(popupContainer);
  document.body.appendChild(popupOverlay);
};

const clickHandler = (event) => {
  document.removeEventListener("mouseover", handleElementBorder);

  elementWithListener.forEach(removeEvent);

  const popupStyles =
    popupOverlayStyles +
    popupContainerStyles +
    popupTitleStyles +
    popupButtonsContainerStyles +
    popupConfirmationButtonStyles +
    popupCancelButtonStyles +
    popupCloseButtonStyles;
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
