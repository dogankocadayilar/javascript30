const links = document.querySelectorAll("a");
const span = document.createElement("span");
span.classList.add("highlight");
document.body.append(span);

links.forEach((link) => link.addEventListener("mouseenter", highlightLink));

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };
  [span.style.width, span.style.height, span.style.transform] = [
    `${coords.width}px`,
    `${coords.height}px`,
    `translate(${coords.left}px, ${coords.top}px)`,
  ];
  console.log(linkCoords);
}
