function loadHTML(pageURL, id) {
  fetch(pageURL)
    .then((response) => response.text())
    .then((text) => (document.getElementById("content").innerHTML = text));

  const collection = document.getElementsByClassName("navitem");
  for (let i = 0; i < collection.length; i++) {
    collection[i].className = "navitem";
  }
  var x = document.getElementById(id);
  x.className += " active";
}

function displayMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// reference https://getbootstrap.com/docs/5.2/components/collapse/#:~:text=Just%20add%20data%2Dbs%2Dtoggle,one%20or%20more%20collapsible%20elements
function viewAllMenu(viewAll) {
  const isExpanded = document
    .getElementById("collapseBreakfastButton")
    .getAttribute("aria-expanded");

  if (isExpanded !== viewAll) {
    const breakfastElement = document.getElementById("collapseBreakfast");
    new bootstrap.Collapse(breakfastElement);
  }

  const isSnackExpanded = document
    .getElementById("collapseSnackButton")
    .getAttribute("aria-expanded");

  if (isSnackExpanded !== viewAll) {
    const snackElement = document.getElementById("collapseSnack");
    new bootstrap.Collapse(snackElement);
  }
  // the following codes toggle all
  // const collapseElementList = document.querySelectorAll(".collapse");
  // const collapseList = [...collapseElementList].map(
  //   (collapseEl) => new bootstrap.Collapse(collapseEl)
  // );
}
