const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

function playSound(e) {
  const sound = document.querySelector(
    `audio[data-key="${e.key.toLowerCase()}"]`
  );
  const key = document.querySelector(`div[data-key="${e.key.toLowerCase()}"]`);
  if (!sound) return;

  key.classList.add("playing");

  sound.currentTime = 0;
  sound.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
