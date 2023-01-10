const moles = document.querySelectorAll(".mole");
const holes = document.querySelectorAll(".hole");
const scoreEl = document.querySelector(".score");
const startButton = document.querySelector("button");
let score = 0;
let lastMole;
let timeUp = false;

moles.forEach((mole) => mole.addEventListener("click", bonk));
startButton.addEventListener("click", startGame);

function randomBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomMole(moles) {
  const moleIndex = Math.floor(Math.random() * moles.length);
  const mole = moles[moleIndex];
  if (mole === lastMole) randomMole(moles);
  lastMole = mole;
  return mole;
}

function peep() {
  const interval = randomBetween(200, 1000);
  const mole = randomMole(moles);
  mole.classList.add("peep");
  setTimeout(() => {
    mole.classList.remove("peep");
    if (!timeUp) peep();
  }, interval);
}

function startGame() {
  scoreEl.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => {
    timeUp = true;
  }, 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  this.classList.remove("peep");
  score++;
  scoreEl.textContent = score;
}
