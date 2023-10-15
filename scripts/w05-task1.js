// Declare a const variable named templesElement
const templesElement = document.getElementById("temples"); 

// Declare a global empty array variable to store a list of temples
let templeList = [];

// Function: displayTemples
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

// Function: getTemples
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();

  displayTemples(templeList); // Call the displayTemples function
};

// Function: reset
const reset = () => {
  templesElement.innerHTML = ""; // Clear all <article> elements
};

// Function: sortBy
const sortBy = (temples) => {
  reset(); // Clear the output

  const filter = document.getElementById("sortBy").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "nonutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};

// Event Listener: sortBy Element change
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

// Call the getTemples function
getTemples();

