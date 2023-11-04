export const updateItemsList = ({ itemsList }, item) => {
  const updatedList = [
    ...itemsList,
    {
      url: item.baseURI,
      content: item.textContent.trim(),
      path: item.path,
    },
  ];
  chrome.storage.sync.set({
    itemsList: updatedList,
  });
};

export const initItemsList = (item) => {
  const itemToStore = {
    url: item.baseURI,
    content: item.textContent.trim(),
    path: item.path,
  };
  chrome.storage.sync.set({
    itemsList: [itemToStore],
  });
};
