const hero = document.querySelector(".hero");
const h1 = hero.querySelector("h1");
const walk = screen.width / 4;

console.log(walk);

hero.addEventListener("mousemove", handleMove);

function handleMove(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  xWalk = Math.round((x / width) * walk - walk / 2);
  yWalk = Math.round((y / height) * walk - walk / 2);

  h1.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.8),
  ${-xWalk}px ${yWalk}px 0 rgba(0,255,255,0.8),
  ${xWalk}px ${-yWalk}px 0 rgba(255,255,0,0.8),
  ${-xWalk}px ${-yWalk}px 0 rgba(255,0,0,0.8)`;
}
