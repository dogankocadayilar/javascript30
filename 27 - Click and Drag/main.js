const slider = document.querySelector(".items");
let isDown = false;
let startX, scrollLeft;

slider.addEventListener("mousedown", handleMouseDown);
slider.addEventListener("mouseleave", handleMouseLeave);
slider.addEventListener("mouseup", handleMouseUp);
slider.addEventListener("mousemove", handleMouseMove);

function handleMouseDown(e) {
  isDown = true;
  slider.classList.add("active");
  startX = e.clientX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}
function handleMouseLeave() {
  isDown = false;
  slider.classList.remove("active");
}
function handleMouseUp() {
  isDown = false;
  slider.classList.remove("active");
}
function handleMouseMove(e) {
  if (!isDown) return;
  e.preventDefault();
  x = e.clientX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
}
