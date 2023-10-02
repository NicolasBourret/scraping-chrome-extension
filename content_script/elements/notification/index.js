import { createHeadingThree, createLink } from "../commons";

export const createNotification = () => {
  const notificationContainer = document.createElement("div");
  notificationContainer.classList.add("sce-notification-container");

  const notificationTitle = createHeadingThree(
    "Votre élément a été sauvegardé !"
  );

  const notificationLink = createLink("#", "Voir votre liste de produits");

  notificationContainer.appendChild(notificationTitle);
  notificationContainer.appendChild(notificationLink);

  return notificationContainer;
};
