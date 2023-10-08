// Declare an empty object named myProfile
let myProfile = {};

// Add a 'name' property with your name
myProfile.name = "Your Name";

// Add a 'photo' property with an image path and name
myProfile.photo = "path/to/your/image.jpg";

// Add a 'favoriteFoods' property with an array of favorite foods
myProfile.favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Ice Cream"];

// Add a 'hobbies' property with an array of hobbies
myProfile.hobbies = ["Reading", "Hiking", "Painting", "Gaming"];

// Add an empty 'placesLived' array
myProfile.placesLived = [];

// Add an item to the 'placesLived' array
myProfile.placesLived.push(
  {
    place: 'San Francisco, CA',
    length: '1 year'
  }
);

// Add additional objects to the 'placesLived' array for other places you have lived
myProfile.placesLived.push(
  {
    place: 'New York, NY',
    length: '2 years'
  }
);

// Assign the 'name' property to an HTML element with ID 'name'
document.getElementById('name').textContent = myProfile.name;

// Assign the 'photo' property as the 'src' attribute of an HTML <img> element with ID 'photo'
document.getElementById('photo').src = myProfile.photo;

// Assign the 'name' property as the 'alt' attribute of the HTML <img> element with ID 'photo'
document.getElementById('photo').alt = myProfile.name;

// Iterate over 'favoriteFoods' and create an <li> element for each
myProfile.favoriteFoods.forEach(food => {
  const li = document.createElement('li');
  li.textContent = food;
  document.getElementById('favorite-foods').appendChild(li);
});

// Repeat the process for 'hobbies'
myProfile.hobbies.forEach(hobby => {
  const li = document.createElement('li');
  li.textContent = hobby;
  document.getElementById('hobbies').appendChild(li);
});

// Iterate over 'placesLived' and create <dt> and <dd> elements for each
myProfile.placesLived.forEach(place => {
  const dt = document.createElement('dt');
  dt.textContent = place.place;
  
  const dd = document.createElement('dd');
  dd.textContent = place.length;

  document.getElementById('places-lived').appendChild(dt);
  document.getElementById('places-lived').appendChild(dd);
});
