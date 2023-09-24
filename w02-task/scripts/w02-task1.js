// Declare and instantiate a variable to hold your name
const fullName = 'Josue Raudales';

// Declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path and file name of the image
const profilePicture = 'images/IMG_0039.JPG';


//Paso 3 Element Variables
// Get the HTML element with the id 'name' and store it in a const variable
const nameElement = document.getElementById('name');

// Get the HTML element with the id 'food' and store it in a const variable
const foodElement = document.getElementById('food');

// Get the element with the id 'year' and store it in a variable
const yearElement = document.querySelector('#year');

// Use any viable method to get the profile image element
const imageElement = document.querySelector('img');

// Assign the nameElement's innerHTML property the fullName variable value
// Surround the fullName value with <strong> tags using a template literal
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Use the textContent property to set the value of the element to the currentYear variable
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the image element
// and set its value to the file path variable
imageElement.setAttribute('src', profilePicture);

// Use the setAttribute method to set the alt property of the image element
// and set its value using a template literal
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

// Declare an array variable to hold your favorite foods
const favFoods = ['Fried Chicken', 'Sushi', 'Chicken Makani', 'Burgers'];

// Modify the HTML element with the id 'food' to display your favorite foods array
foodElement.innerHTML = favFoods.join('<br>');

// Declare and instantiate a variable to hold another favorite food item
const newFavoriteFood = 'Cheesecake';

// Add the new value to your favorite food array using the push() method
favFoods.push(newFavoriteFood);

// Append the modified array values onto the displayed content of the HTML element with the id 'food'
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the first element in the favorite food array
favFoods.shift();

// Append the array output showing the modified array
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the last element in the favorite food array
favFoods.pop();

// Append the array output with the final modified favorite foods array
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;



