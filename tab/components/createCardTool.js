import { createElement } from "../../utils";

export const createCardTool = (icon) => {
  const cardMetadata = createElement("li", { class: "card-tool" });
  cardMetadata.appendChild(icon);

  return cardTool;
};
