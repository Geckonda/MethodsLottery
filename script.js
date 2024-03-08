const content = document.querySelector("#content");
const startBtn = document.querySelector("#startBtn");
const rebootBtn = document.querySelector("#rebootBtn");

const methods = [
  "pop",
  "push",
  "reduce",
  "reverse",
  "slice",
  "some",
  "sort",
  "join",
  "map",
  "includes",
  "fill",
  "forEach",
];

createItems();

startBtn.addEventListener("click", run);
rebootBtn.addEventListener("click", () => {
  [...document.querySelectorAll(".item")].map((it) => {
    content.removeChild(it);
  });
  startBtn.style.display = "block";
  rebootBtn.style.display = "none";
  createItems();
});

function run() {
  startBtn.style.display = "none";
  content.classList.add("launched");
  const basket = [];
  let counter;
  let myInterval = setInterval(() => {
    while (true) {
      counter = randomInteger(0, methods.length - 1);
      if (!basket.includes(counter)) {
        const item = document.getElementById(counter);
        item.classList.add("dull");
        basket.push(counter);
        break;
      }
    }
    if (basket.length == methods.length - 1) {
      clearInterval(myInterval);
      content.classList.remove("launched");
      content.style.border = "0px solid #a499b3";
      [...document.querySelectorAll(".item")].map((it) => {
        if (!it.classList.contains("dull")) it.classList.add("active");
      });
      rebootBtn.style.display = "block";
    }
  }, 500);
}

function createItems() {
  const basket = [];
  while (basket.length < methods.length) {
    let counter = randomInteger(0, methods.length - 1);
    if (!basket.includes(counter)) {
      const item = document.createElement("div");
      item.classList = "item";
      item.id = counter;
      item.textContent = methods[counter];
      content.appendChild(item);
      basket.push(counter);
    }
  }
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
