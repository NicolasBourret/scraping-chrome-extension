import { createElement } from "../../utils";
import { createCard } from "./createCard";

export const createCardsList = () => {
  const cardsList = createElement("ul", { class: "card-list" });

  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.data) {
      req.data.forEach((item) => {
        const cardsListContent = createCard("Card Title", "Card Subtitle");
        cardsList.appendChild(cardsListContent);
      });
      sendResponse({ message: "data are succesfully sent" });
    }
  });

  return cardsList;
};
