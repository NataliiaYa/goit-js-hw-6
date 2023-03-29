const allCategories = document.querySelector('#categories');
const items = allCategories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
const title = item.querySelector('h2');
const itemsList = item.querySelectorAll('li');
console.log(`Category: ${title.textContent}`);
console.log(`Elements: ${itemsList.length}`);
});