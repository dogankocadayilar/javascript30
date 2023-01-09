const triggers = document.querySelectorAll("[data-time]");
const form = document.querySelector(".form");
const timeLeft = document.querySelector(".time-left");
const endTime = document.querySelector(".end-time");
let countdown;

triggers.forEach((trigger) => trigger.addEventListener("click", startTimer));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const minutes = e.target.minutes.value;
  timer(minutes * 60);
  e.target.reset();
});

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayLeft(seconds);
  displayEnd(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayLeft(secondsLeft);
  }, 1000);
}

function displayLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSecs = seconds % 60;
  timeLeft.textContent = `${formatTime(minutes)}:${formatTime(remainderSecs)}`;
}

function displayEnd(timestamp) {
  const time = new Date(timestamp);
  endTime.textContent = `${time.getHours()}:${time.getMinutes()}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
