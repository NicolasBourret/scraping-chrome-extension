import { Item } from "./Item";

export const ItemList = () => {
  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.data) {
      console.log(req.data);
      sendResponse({ message: "data are succesfully sent" });
    }
  });

  return `
    <ul class="items-list">
        ${Item()}
    </ul>
    `;
};
