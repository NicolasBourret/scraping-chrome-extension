const buttonActivateSelection = document.querySelector("#activateSelection");

buttonActivateSelection.addEventListener("click", async (e) => {
  const queryOptions = { active: true, currentWindow: true };
  const tabs = await chrome.tabs.query(queryOptions);

  chrome.tabs.sendMessage(
    tabs[0].id,
    { activateSelection: true },
    (response) => {
      console.log(response);
    }
  );
});
