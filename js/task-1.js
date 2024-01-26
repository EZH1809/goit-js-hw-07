    const categoriesList = document.getElementById('categories');

    const categoryItems = categoriesList.querySelectorAll('li.item');   

console.log(`Кількість категорій: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {

    const categoryTitle = categoryItem.querySelector('h2').textContent;

    const categoryElements = categoryItem.querySelectorAll('ul > li');

    console.log(`Категорія: ${categoryTitle}`);
    
console.log(`Кількість елементів у категорії: ${categoryElements.length}`);
});
