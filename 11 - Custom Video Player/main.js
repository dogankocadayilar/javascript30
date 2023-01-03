const video = document.getElementById("video");
const videoPlayer = document.getElementById("player");
const playPauseButton = document.getElementById("playPauseButton");
const seekBar = document.getElementById("seekBar");
const muteButton = document.getElementById("muteButton");
const volumeBar = document.getElementById("volumeBar");

playPauseButton.addEventListener("click", togglePlay);
muteButton.addEventListener("click", toggleMute);
volumeBar.addEventListener("input", () => {
  video.volume = volumeBar.value / 100;
  if (video.volume === 0) {
    muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    video.muted = true;
  } else {
    video.muted = false;
    muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  }
});
seekBar.addEventListener("input", function () {
  video.currentTime = video.duration * (seekBar.value / 100);
});

video.addEventListener("timeupdate", function (e) {
  seekBar.value = (video.currentTime / video.duration) * 100;
});

function togglePlay() {
  if (video.paused) {
    video.play();
    playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    video.muted = true;
    muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
}
