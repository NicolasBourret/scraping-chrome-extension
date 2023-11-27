import { createElement } from "../../utils";
import { createCardTool } from "./createCardTool";

export const tools = [
  {
    htmlTag: "img",
    options: { class: "", src: "./icons/rotate-solid.svg" },
  },
  {
    htmlTag: "img",
    options: { class: "", src: "./icons/trash-solid.svg" },
  },
  {
    htmlTag: "img",
    options: { class: "", src: "./icons/gear-solid.svg" },
  },
  {
    htmlTag: "img",
    options: { class: "", src: "./icons/filter-solid.svg" },
  },
];

export const createCardTools = () => {
  const cardTools = createElement("ul", { class: "card-tools" });

  const toolsContent = tools.forEach(({ element, options }) => {
    const iconElement = createElement(element, options);
    return createCardTool(iconElement);
  });

  return cardTools;
};
