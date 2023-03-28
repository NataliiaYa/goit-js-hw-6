

const inputFont = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputFont.addEventListener("input", changeText);

function changeText(event) {
    inputText.style.fontSize = inputFont.value + 'px';
    console.log(inputText)
}
console.log(inputFont);
