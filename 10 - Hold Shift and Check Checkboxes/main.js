const checkboxes = document.querySelectorAll("input[type=checkbox]");

const arr = [];
console.log(checkboxes);

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleClick)
);

function handleClick(e) {
  if (e.shiftKey && this.checked) {
    const index = [...checkboxes].indexOf(e.target);
    arr.push(index);
    if (arr.length >= 2) {
      for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        checkboxes[i].checked = true;
      }
      arr.splice(arr.length - 2, arr.length - 1);
    }
  } else if (!e.shiftKey) {
    arr.splice(0, arr.length);
  }
}
