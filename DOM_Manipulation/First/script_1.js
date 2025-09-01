document
  .getElementById("ChangeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is changed";
  });

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let CitiesList = document.getElementById("CitiesList");
    CitiesList.firstElementChild.classList.add("highlight");
  });
