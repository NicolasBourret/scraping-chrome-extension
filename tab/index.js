import { ItemList, SearchInput, SelectInput } from "./components";

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.data) {
    console.log(req.data);
    sendResponse({ message: "data are succesfully sent" });
  }
});

const inputSection = document.querySelector("#input-section");
const inputSectionContent = `${SearchInput()}${SelectInput()}`;
inputSection.innerHTML = inputSectionContent;

const itemList = document.querySelector("#items-list");
const itemListContent = `${ItemList()}`;
itemList.innerHTML = itemListContent;
