const inputSize = document.querySelector('#input-size');
const selectFont = document.querySelector('#select-font');
const inputColor = document.querySelector('#input-color');
const inputBgColor = document.querySelector('#input-bg-color');
const input = document.querySelector('#text-input');
const display = document.querySelector('#display');
const hdisplay = document.querySelector('#headline-display');
const showSize = document.querySelector('#show-size');
const showFont = document.querySelector('#show-font');
const showColor = document.querySelector('#show-color');
const showBgColor = document.querySelector('#show-bg-color');

inputSize.addEventListener('input', () => {
  display.style.fontSize = `${inputSize.value}px`;
  showSize.innerHTML = inputSize.value;
});

selectFont.addEventListener('change', (event) => {
  display.style.fontFamily = event.target.value;
  showFont.innerHTML = event.target.value;
});

inputColor.addEventListener('input', (event) => {
  display.style.color = event.target.value;
  showColor.innerHTML = event.target.value;
});

inputBgColor.addEventListener('input', (event) => {
  hdisplay.style.backgroundColor = event.target.value;
  showBgColor.innerHTML = event.target.value;
});

input.addEventListener('input', (event) => {
  display.innerText = event.target.value;
});
