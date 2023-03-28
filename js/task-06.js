// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.



const input = document.querySelector('#validation-input');

input.addEventListener("blure", onInputBlure);

function onInputBlure(event) {
    const inputValue = event.target.value;
    console.log(inputValue);

    const dataLength = event.dataset.length;
    console.log(dataLength);

    console.log(input.dataset.length);
    ;

    if (inputValue.length === Number(dataLength)) {
        input.classLiast.add('valid');
        input.classLiast.remove('invalid');
    } else {
        input.classLiast.add('invalid');
        input.classLiast.remove('valid');
        console.log(inputValue);
    }
}