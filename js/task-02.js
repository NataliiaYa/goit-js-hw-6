const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const markup = ingredients
  .map((ingredient) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = ingredient;
    return li;
  });

list.append(...markup);
console.log(list);