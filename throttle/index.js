const btn = document.querySelector(".increment_btn");
const incre_pressed = document.querySelector(".increment_pressed");
const incre_triggered = document.querySelector(".increment_triggered");

let triggerCount = 0;
let pressedCount = 0;

const throttle = (cb, delay) => {
  let last;

  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    cb(...args);
  };
};

const throttleCount = throttle(() => {
  triggerCount += 1;
  incre_triggered.innerHTML = triggerCount;
}, 1000);

btn.addEventListener("click", () => {
  incre_pressed.innerHTML = ++pressedCount;
  throttleCount();
});
