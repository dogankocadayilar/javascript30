const nav = document.querySelector(".navbar");
const topOfNav = nav.offsetTop;

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.padding = 0;
    document.body.classList.remove("fixed-nav");
  }
}
