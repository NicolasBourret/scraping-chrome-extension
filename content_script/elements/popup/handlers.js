export const updateItemsList = (itemsList, item) => ({
  itemsList: [
    ...itemsList,
    {
      url: item.baseURI,
      content: item.textContent,
      path: item.path,
      parent: item.parentNode,
      node: item,
    },
  ],
});

export const initItemsList = (itemsList) =>
  chrome.storage.sync.set({ itemsList });
