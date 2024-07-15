const btn = document.querySelector(".increment_btn");
const incre_pressed = document.querySelector(".increment_pressed");
const incre_triggered = document.querySelector(".increment_triggered");

let triggerCount = 0;
let pressedCount = 0;

const debounce = (cb, delay) => {
  let timer;

  console.log("hhhhh");

  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const debounceCount = debounce(() => {
  triggerCount = triggerCount + 1;
  incre_triggered.innerHTML = triggerCount;
}, 800);

btn.addEventListener("click", () => {
  incre_pressed.innerHTML = ++pressedCount;
  debounceCount();
});
