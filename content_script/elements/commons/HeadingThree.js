export const createHeadingThree = (text) => {
  const headingThree = document.createElement("h3");
  headingThree.textContent = text;
  headingThree.classList.add("sce-heading-three");

  return headingThree;
};
