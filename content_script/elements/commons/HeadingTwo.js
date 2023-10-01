export const createHeadingTwo = (text) => {
  const headingTwo = document.createElement("h2");
  headingTwo.textContent = text;
  headingTwo.classList.add("sce-heading-two");

  return headingTwo;
};
