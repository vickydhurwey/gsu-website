window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "#000";
  } else {
    header.style.background = "#0b2b12";
  }
});

console.log("GSU BALAGHAT (OFFICIAL) Loaded");
