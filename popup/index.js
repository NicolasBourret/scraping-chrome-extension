const buttonActivateSelection = document.querySelector("#activateSelection");
const tabLink = document.querySelector("#tabLink");

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

tabLink.addEventListener("click", (e) => {
  e.preventDefault();

  chrome.tabs.create({
    url: "../tab/index.html",
  });
});
