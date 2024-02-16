const list = document.getElementById('categories');
const listItems = document.querySelectorAll('.item');

const categoriesCount = `Number of category: ${listItems.length}`;

console.log(categoriesCount);

listItems.forEach(listItems => {
  const categoryName = listItems.querySelector('h2').textContent;
  const categoryElem = listItems.querySelectorAll('ul li');

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElem.length}`);
});
