const timeNodes = document.querySelectorAll("[data-time]");

const secs = [...timeNodes]
  .map((node) => node.dataset.time)
  .map((time) => {
    const [mins, secs] = time.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, sec) => total + sec);

const date = new Date(1000 * secs).toISOString().substring(11, 19);

console.log(date);
