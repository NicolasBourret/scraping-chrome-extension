import { createButton, createHeadingTwo } from "../commons";
import { removeElement } from "../../eventHandlers";
import { createNotification } from "../notification";
import { initItemsList, updateItemsList } from "./handlers";

export const createPopup = (element) => {
  const popupOverlay = document.createElement("div");
  popupOverlay.classList.add("sce-overlay");

  const popupContainer = document.createElement("div");
  popupContainer.classList.add("sce-container");

  const popupButtonsContainer = document.createElement("div");
  popupButtonsContainer.classList.add("sce-buttons-container");

  const popupTitle = createHeadingTwo("Voulez-vous sauvegarder cet élément ?");
  const popupConfirmButton = createButton(
    "Sauvegarder",
    "sce-button",
    async () => {
      const itemsList = await chrome.storage.sync.get("itemsList");
      const classList = element.classList;
      const path = `${element.nodeName.toLowerCase()}.${Array.from(
        classList
      ).join(".")}`;
      element.path = path;

      if (Array.isArray(itemsList)) {
        updateItemsList(itemsList, element);
      } else {
        initItemsList([element]);
      }

      const notification = createNotification();
      document.body.appendChild(notification);

      removeElement(popupOverlay);
    }
  );

  const popupCancelButton = createButton("Annuler", "sce-button-cancel", () =>
    removeElement(popupOverlay)
  );
  const popupCloseButton = createButton("", "sce-close-button", () =>
    removeElement(popupOverlay)
  );

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

  return popupOverlay;
};
