const addElementBorder = (event) => {
  const element = event.target;
  element.style.outline = "2px solid black";
};

const removeElementBorder = (event) => {
  const element = event.target;
  element.style.outline = "none";
};

export const handleElementBorder = ({ target }) => {
  const element = target;

  element.addEventListener("mouseover", addElementBorder);
  element.addEventListener("mouseout", removeElementBorder);
  elementWithListener.push(element);
};

export const removeEvent = (element) => {
  element.removeEventListener("mouseover", addElementBorder);
};

export const removeElement = (elementToRemove) => {
  document.body.removeChild(elementToRemove);
};
