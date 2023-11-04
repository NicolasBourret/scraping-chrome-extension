chrome.storage.onChanged.addListener(async (changes, namespace) => {
  for (let [key, { newValue }] of Object.entries(changes)) {
    if (key === "itemsList") {
      const listItemsTab = await chrome.tabs.query({
        title: "Liste d'éléments",
      });

      if (listItemsTab) {
        chrome.tabs.sendMessage(
          listItemsTab[0].id,
          { data: newValue },
          (response) => {
            console.log(response);
          }
        );
      }
    }
  }
});
