const navLinks = document.querySelectorAll("[data-base-link]");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

navLinks.forEach((link) => link.addEventListener("mouseenter", handleEnter));
navbar.addEventListener("mouseout", handleOut);

function handleEnter(e) {
  e.stopPropagation();
  const navbarCoords = navbar.getBoundingClientRect();
  const dropdownCoords = this.parentElement
    .querySelector(".dropdown")
    .getBoundingClientRect();
  //   console.log(coords);
  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navbarCoords.top,
    left: dropdownCoords.left - navbarCoords.left,
  };

  console.log(coords);

  //   const middle = Math.floor(x + width / 2);
  menu.style.setProperty("width", `${coords.width}px`);
  menu.style.setProperty("height", `${coords.height}px`);
  menu.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  menu.classList.add("open");
}

function handleOut(e) {
  if (e.clientY >= this.offsetHeight) {
    menu.classList.remove("open");
  }
}
