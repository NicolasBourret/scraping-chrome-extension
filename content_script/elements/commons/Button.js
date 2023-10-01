export const createButton = (label, className, eventHandler) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add(className);
  button.addEventListener("click", eventHandler);

  return button;
};
