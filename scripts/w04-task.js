/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
myProfile.name = "Josue Raudales";
myProfile.photo = "/Users/joshraudales/GitHub/CSE 121b/images/IMG_0039.JPG";
myProfile.favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Burgers"];
myProfile.hobbies = ["spend time with family", "Hiking", "Playing Guitar", "Cooking"];
myProfile.placesLived = [];





/* Populate Profile Object with placesLive objects */
// Create a new object for the place lived
const newPlace = {
    place: "Utah",
    length: "10 years",
  };
  
  // Add the new place object to the placesLived array
  myProfile.placesLived.push(newPlace);
  myProfile.placesLived.push({
    place: "Idaho",
    length: "1 year",
  });



/* DOM Manipulation - Output */
// Assuming there's an HTML element with id "name"
const nameElement = document.getElementById("name");

// Assign the name property from myProfile to the element's innerHTML
nameElement.innerHTML = myProfile.name;

/* Name */
// Assuming there's an HTML <img> element with id "photo"
const photoElement = document.getElementById("photo");

// Assign the name property from myProfile as the alt attribute of the image
photoElement.alt = myProfile.name;


/* Photo with attributes */
// Assuming there's an HTML <img> element with id "photo"
const photoElement = document.getElementById("photo");

// Assign the photo property from myProfile as the src attribute of the image
photoElement.src = myProfile.photo;


/* Favorite Foods List*/
// Assuming you have an HTML <ul> element with the ID "favorite-foods"
const favoriteFoodsList = document.getElementById("favorite-foods");

// Assuming myProfile contains the favoriteFoods property as an array
myProfile.favoriteFoods.forEach((food) => {
  // Create a new <li> element
  const listItem = document.createElement("li");
  
  // Set the text content of the <li> element to the favorite food
  listItem.textContent = food;
  
  // Append the <li> element to the <ul> element
  favoriteFoodsList.appendChild(listItem);
});


/* Hobbies List */
// Assuming you have an HTML <ul> element with the ID "hobbies"
const hobbiesList = document.getElementById("hobbies");

// Assuming myProfile contains the hobbies property as an array
myProfile.hobbies.forEach((hobby) => {
  // Create a new <li> element
  const listItem = document.createElement("li");

  // Set the text content of the <li> element to the hobby
  listItem.textContent = hobby;

  // Append the <li> element to the <ul> element
  hobbiesList.appendChild(listItem);
});


/* Places Lived DataList */
// Assuming you have an HTML <dl> element with the ID "places-lived"
const placesLivedList = document.getElementById("places-lived");

// Assuming myProfile contains the placesLived property as an array of objects
myProfile.placesLived.forEach((placeObject) => {
  // Create a new <dt> element for the place
  const dtElement = document.createElement("dt");
  dtElement.textContent = placeObject.place;

  // Create a new <dd> element for the length
  const ddElement = document.createElement("dd");
  ddElement.textContent = placeObject.length;

  // Append the <dt> and <dd> elements to the <dl> element
  placesLivedList.appendChild(dtElement);
  placesLivedList.appendChild(ddElement);
});


