export const injectCss = (styles) => {
  const element = document.createElement("style");
  element.textContent = styles;

  document.head.appendChild(element);
};
