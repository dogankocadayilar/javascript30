const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.name);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) speechSynthesis.speak(msg);
}

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices.map(
    (voice) =>
      `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
  );
}
