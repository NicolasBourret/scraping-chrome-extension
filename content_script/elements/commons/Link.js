export const createLink = (href, label) => {
  const link = document.createElement("a");
  link.classList.add("sce-link");
  link.href = href;
  link.textContent = label;

  return link;
};
