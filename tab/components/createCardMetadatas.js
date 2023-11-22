import { createElement } from "../../utils";
import { metadatas } from "../utils/constants";
import { createCardMetadata } from "./createCardMetaData";

export const createCardMetadatas = () => {
  const cardMetadatas = createElement("ul", { class: "card-metadatas" });

  const metadatasContent = metadatas.map(({ icon, content }) => {
    const iconElement = createElement(icon.element, icon.options);
    const contentElement = createElement(content.element, content.options);
    return createCardMetadata(iconElement, contentElement);
  });

  return cardMetadatas;
};
