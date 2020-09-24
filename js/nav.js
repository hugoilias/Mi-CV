(function () {
  var toggle = document.getElementById("header-nav-toggle"),
    nav = document.getElementById("header-nav");
  /* links = "header-nav".find("a"); */

  // If JavaScript Is Enabled
  // Modify Initial States
  toggle.className = "is-visible";
  nav.className = "is-hidden";

  // Change Visibility On Click
  toggle.addEventListener("click", function () {
    if (nav.className === "is-hidden") {
      nav.className = "";
    } else {
      nav.className = "is-hidden";
    }
  });
  /* links.addEventListener("click", function () {
    if (nav.className === "is-hidden") {
      nav.className = "";
    } else {
      nav.className = "is-hidden";
    }
  }); */
})();
