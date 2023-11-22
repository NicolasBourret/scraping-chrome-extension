import { createElement } from "../../utils";

export const createCardMetadata = (icon, content) => {
  const cardMetadata = createElement("li", { class: "card-metadata" });
  cardMetadata.appendChild(icon);
  cardMetadata.appendChild(content);

  return cardMetadata;
};
