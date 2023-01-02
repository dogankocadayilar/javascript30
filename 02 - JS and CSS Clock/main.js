const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

setInterval(setTime, 1000);

function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  setHand(seconds, 60, secondHand);
  setHand(minutes, 60, minuteHand);
  setHand(hours, 12, hourHand);
}

function setHand(time, division, hand) {
  hand.style.transitionDuration = time === 0 ? "0ms" : "100ms";
  const degrees = (time / division) * 360 + 90;
  hand.style.transform = `rotate(${degrees}deg)`;
}
