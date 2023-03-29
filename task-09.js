const box = document.querySelector('body');
const btn = document.querySelector('.change-color');
const p = document.querySelector('.color');

btn.addEventListener('click', () => {
  console.log();
  const getRandomHex = getRandomHexColor();
  box.style.backgroundColor = getRandomHex;
  p.textContent = getRandomHex;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(box);
