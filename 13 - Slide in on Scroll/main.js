const images = document.querySelectorAll("img");

window.addEventListener("scroll", handleScroll);

function handleScroll() {
  images.forEach((image) => {
    checkInView(image);
  });
}

function checkInView(imgElement) {
  const slideInAt = window.scrollY + window.innerHeight - imgElement.height / 2;

  const imageBottom = imgElement.offsetTop + imgElement.height;
  const isHalfShown = slideInAt > imgElement.offsetTop;
  const isNotScrolledPast = window.scrollY < imageBottom;
  if (isHalfShown && isNotScrolledPast) {
    imgElement.classList.add("active");
  } else {
    imgElement.classList.remove("active");
  }
}
