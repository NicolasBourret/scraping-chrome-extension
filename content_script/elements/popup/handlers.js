export const updateItemsList = ({ itemsList }, item) => {
  console.log("update", itemsList);
  const updatedList = [
    ...itemsList,
    {
      url: item.baseURI,
      content: item.textContent.trim(),
      path: item.path,
    },
  ];
  console.log("update", updatedList);
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
