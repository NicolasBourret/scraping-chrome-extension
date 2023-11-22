export const qs = (selector, parent = doculent) =>
  parent.querySelector(selector);

export const qsa = (selector, parent = document) => [
  ...parent.querySelectorAll(selector),
];

const globalEventCallback = (e, selector, callback) => {
  if (e.target.matches(selector)) {
    callback(e);
  }
};
export const addGlobalEventListener = (
  type,
  selector,
  callback,
  options,
  parent = document
) => {
  parent.addEventListener(
    type,
    globalEventCallback(e, selector, callback),
    options
  );
};

export const createElement = (type, options = {}) => {
  const element = document.createElement(type);
  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") {
      element.classList.add(value);
      return;
    }

    if (key === "dataset") {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
      return;
    }

    if (key === "text") {
      element.textContent = value;
      return;
    }

    element.setAttribute(key, value);
  });

  return element;
};

export const createChilds = (childs, element) => {
  for (const child of childs) {
    const childNode = createElement(child.htmlTag, child.options);
    element.appendChild(childNode);
  }
};
