import { createElement } from "../../utils";

export const createCardMetadata = (icon, content) => {
  const cardMetadata = createElement("li", { class: "card-metadata" });
  const cardMetadaContent = [icon, content];
  cardMetadaContent.forEach((element) => {
    const metadataElement = createElement(element.htmlTag, element.options);
    cardMetadata.appendChild(metadataElement);
  });

  return cardMetadata;
};
