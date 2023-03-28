//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.//

const counterValue = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;

    },
};

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action ="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', function () {
    console.log();
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
    console.log(counterValue);
});

incrementBtn.addEventListener('click', function () {
    console.log();
    counterValue.increment();
    valueEl.textContent = counterValue.value;
    console.log(counterValue);
})

