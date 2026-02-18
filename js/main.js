const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("open");
  }
});
