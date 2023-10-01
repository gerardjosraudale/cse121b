/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Josue Raudales';
const currentYear = new Date().getFullYear();
const profilePicture = 'w02-task/images/IMG_0039.JPG';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
const favFoods = ['Fried Chicken', 'Sushi', 'Chicken Makani', 'Burgers'];
foodElement.innerHTML = favFoods.join('<br>');
const newFavoriteFood = 'Cheesecake';
favFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;