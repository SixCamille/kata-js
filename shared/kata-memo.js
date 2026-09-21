const memoDialog = document.querySelector("#kata-memo");
const openMemoButton = document.querySelector("[data-open-memo]");
const closeMemoButton = document.querySelector("[data-close-memo]");

if (memoDialog && openMemoButton && closeMemoButton) {
  openMemoButton.addEventListener("click", function () {
    memoDialog.showModal();
  });

  closeMemoButton.addEventListener("click", function () {
    memoDialog.close();
  });

  memoDialog.addEventListener("click", function (event) {
    if (event.target === memoDialog) {
      memoDialog.close();
    }
  });
}
