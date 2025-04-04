let countEl = document.querySelector("#count");
let incrementEl = document.querySelector("#increment");
let decrementEl = document.querySelector("#decrement");
let incrementByEl = document.querySelector("#incrementBy");
let resetEL = document.querySelector("#reset");

// increment logic
incrementEl.addEventListener("click", () => {
  let count = Number(countEl.innerText);
  const num = Number(incrementByEl.value);
  countEl.innerText = count + num;
});

// decrement logic
decrementEl.addEventListener("click", () => {
  let count = Number(countEl.innerText);
  const num = Number(incrementByEl.value);
  countEl.innerText = count - num;
});

// reset Logic

resetEL.addEventListener("click", () => {
  countEl.innerText = 0;
  incrementByEl.value = 1;
});
