import { createElement } from "../../utils";
import { tools } from "../utils/constants";
import { createCardTool } from "./createCardMetaData";

export const createCardTools = () => {
  const cardTools = createElement("ul", { class: "card-tools" });

  const toolsContent = tools.map(({ element, options }) => {
    const iconElement = createElement(element, options);
    return createCardTool(iconElement);
  });

  return cardTools;
};
