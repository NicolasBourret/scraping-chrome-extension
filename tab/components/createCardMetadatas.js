import { createElement } from "../../utils";
import { createCardMetadata } from "./createCardMetaData";

export const metadatas = [
  {
    icon: {
      htmlTag: "img",
      options: { src: "./icons/globe-solid.svg" },
    },
    content: {
      htmlTag: "a",
      options: { text: "www.link-web.com", href: "#", class: "card-link" },
    },
  },
  {
    icon: {
      htmlTag: "img",
      options: { src: "./icons/clock-solid.svg" },
    },
    content: {
      htmlTag: "p",
      options: { text: "06/09/2023", class: "card-date" },
    },
  },
];

export const createCardMetadatas = () => {
  const cardMetadatas = createElement("ul", { class: "card-metadatas" });

  metadatas.forEach((metadata) => {
    console.log(metadata);
    const metadataElement = createCardMetadata(metadata.icon, metadata.content);
    cardMetadatas.appendChild(metadataElement);
  });
  return cardMetadatas;
};
