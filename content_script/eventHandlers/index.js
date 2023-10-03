export const removeElement = (elementToRemove) => {
  document.body.removeChild(elementToRemove);
};

export const addElementBorder = (event) => {
  const element = event.target;
  element.style.outline = "2px solid black";
};

export const removeElementBorder = (event) => {
  const element = event.target;
  element.style.outline = "none";
};

export const removeEvent = (element) => {
  element.removeEventListener("mouseover", addElementBorder);
};
