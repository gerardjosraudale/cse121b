document.addEventListener('DOMContentLoaded', () => {
    const generateMealButton = document.getElementById('generate-meal');
    generateMealButton.addEventListener('click', getMealSuggestion);
    const searchInput = document.getElementById('search-input');
    const categorySelect = document.getElementById('category-select');

    // Populate the meal categories dropdown
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then(response => response.json())
        .then(data => {
            const categoryOptions = data.meals.map(category => category.strCategory);
            categoryOptions.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });
        })
        .catch(error => console.error(error));

    // Display a welcome message
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Welcome to Meal Suggestion! Find delicious meal ideas below.';
    welcomeMessage.style.fontWeight = 'bold';
    document.body.insertBefore(welcomeMessage, document.getElementById('meal-form'));
});

function getMealSuggestion() {
    const searchTerm = document.getElementById('search-input').value;
    const selectedCategory = document.getElementById('category-select').value;

    const searchQuery = selectedCategory
        ? `c=${selectedCategory}`
        : searchTerm
        ? `s=${searchTerm}`
        : '';

    const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php?${searchQuery}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                displayMeal(data.meals[0]);
            } else {
                const mealName = document.getElementById('meal-name');
                mealName.textContent = 'No results found. Try a different search or category.';
            }
        })
        .catch(error => console.error(error));
}

function displayMeal(meal) {
    const mealName = document.getElementById('meal-name');
    const mealCategory = document.getElementById('meal-category');
    const mealImage = document.getElementById('meal-image');
    const mealRecipe = document.getElementById('meal-recipe');

    mealName.textContent = meal.strMeal;
    mealCategory.textContent = 'Category: ' + meal.strCategory;
    mealImage.src = meal.strMealThumb;
    mealRecipe.textContent = meal.strInstructions;
}
