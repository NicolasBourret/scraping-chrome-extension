import { createChilds, createElement } from "../../utils";

const buildChilds = (title, subtitle) => [
  { htmlTag: "h2", options: { class: "card-title", text: title } },
  {
    htmlTag: "p",
    options: {
      class: "card-subtitle",
      text: subtitle,
    },
  },
];

export const createCard = (title, subtitle) => {
  const card = createElement("li", { class: "card" });
  const image = createElement("div", { class: "card-image" });
  const infos = createElement("div", { class: "card-content" });

  const infosChilds = buildChilds(title, subtitle);
  createChilds(infosChilds, infos);

  card.appendChild(image);
  card.appendChild(infos);

  return card;
};
