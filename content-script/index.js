const elementsOvered = [];

const selectElement = (element) => {
  element.addEventListener("click", () => {
    element.style.border = "none";
    document.removeEventListener("mouseover", addAndRemoveBorder);
  });
};

const addAndRemoveBorder = (e) => {
  if (elementsOvered.length > 0) {
    elementsOvered[0].style.border = "none";
    elementsOvered.shift();
  }
  const element = e.target;
  element.style.border = "2px solid black";
  elementsOvered.push(element);

  selectElement(element);
};

document.addEventListener("mouseover", addAndRemoveBorder);
