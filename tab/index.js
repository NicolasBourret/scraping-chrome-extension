import { InputSection, ItemList, MainTitle } from "./components";

const content = `
  ${MainTitle()}
  ${InputSection()}
  ${ItemList()}
`;

const root = document.querySelector("#root");
root.innerHTML = content;
