const listEl = document.querySelector(".list");
const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
const inputEl = document.querySelector(".input");

const items = JSON.parse(localStorage.getItem("taco-list")) || [];

displayItems();
addBtn.addEventListener("click", handleAdd);
clearBtn.addEventListener("click", handleClear);

function handleAdd(e) {
  e.preventDefault();
  if (inputEl.value.trim() === "") return;

  const item = createItem(inputEl.value);
  addItem(item);
  updateStorage();
  displayItems();
  inputEl.value = "";
}

function handleClear(e) {
  e.preventDefault();
  items.length = 0;
  updateStorage();
  displayItems();
}

function handleCheckbox(e) {
  if (e.target.type === "checkbox") {
    updateItem(e.target.parentElement.innerText);
    updateStorage();
  }
}

function displayItems() {
  listEl.innerHTML = "";
  items.forEach((item) => {
    const li = createItem(item.content, item.checked);
    listEl.append(li);
  });
}

function createItem(content, checked) {
  const li = document.createElement("li");
  li.addEventListener("click", handleCheckbox);
  if (checked) {
    li.innerHTML = `<input type="checkbox" checked/>${content}`;
  } else {
    li.innerHTML = `<input type="checkbox"/>${content}`;
  }
  return li;
}

function updateItem(content) {
  const item = items.find((obj) => obj.content === content);
  if (item) {
    item.checked = item.checked ? false : true;
  }
}

function addItem(item) {
  if (!items.some((obj) => obj.content === item.textContent)) {
    items.push({ content: item.textContent, checked: item.firstChild.checked });
  } else {
    alert("We already have that item u know!!");
  }
}

function updateStorage() {
  localStorage.setItem("taco-list", JSON.stringify(items));
}
