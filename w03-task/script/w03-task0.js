/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// Function declaration to add two numbers
function add(number1, number2) {
    return number1 + number2;
  }
  
  // Function to get values from HTML form controls and calculate the sum
  function addNumbers() {
    // Get values from HTML form controls
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
  
    // Calculate the sum using the 'add' function
    let sum = add(addNumber1, addNumber2);
  
    // Assign the result to an HTML form element with ID 'sum'
    document.querySelector('#sum').value = sum;
  }
  
  // Add a "click" event listener to the HTML button with ID 'addNumbers'
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
// "This line of code is NOT located inside a function. Why❔", it's because the code that adds the event listener//

//************************************************************//
/* Function Expression - Subtract Numbers */

 
const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  const subtractNumbers = function() {
    // Get values from HTML form controls and convert to numbers
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);
  
    // Calculate the difference using the 'subtract' function
    const difference = subtract(subtractNumber1, subtractNumber2);
  
    // Assign the result to an HTML form element with ID 'difference'
    document.querySelector('#difference').value = difference;
  };
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

    
//*****************************************************************/
/* Arrow Function - Multiply Numbers */
// Arrow function for multiplying two numbers
const multiply = (number1, number2) => number1 * number2;

// Arrow function to handle multiplication and display the result
const multiplyNumbers = () => {
  const factor1Value = document.getElementById('factor1').value;
  const factor2Value = document.getElementById('factor2').value;

  const number1 = parseFloat(factor1Value);
  const number2 = parseFloat(factor2Value);

  if (!isNaN(number1) && !isNaN(number2)) {
    const product = multiply(number1, number2);
    document.getElementById('product').textContent = `Product: ${product}`;
  } else {
    alert('Please enter valid numeric values in both fields.');
  }
};

// Add a "click" event listener to the HTML button with ID 'multiplyNumbers'
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

//***************************************************//
/* Open Function Use - Divide Numbers */
// Function to perform division
function divide(dividend, divisor) {
    if (divisor === 0) {
      return "Cannot divide by zero";
    }
    return dividend / divisor;
  }
  
  // Function to handle the division operation
  function divideNumbers() {
    const dividendInput = document.getElementById("dividend");
    const divisorInput = document.getElementById("divisor");
    const quotientInput = document.getElementById("quotient");
  
    const dividend = parseFloat(dividendInput.value);
    const divisor = parseFloat(divisorInput.value);
  
    const result = divide(dividend, divisor);
  
    quotientInput.value = result;
  }
  
  // Add a click event listener to the "Divide" button
  const divideButton = document.getElementById("divideNumbers");
  divideButton.addEventListener("click", divideNumbers);
  

  //************************************************************************/
/* Decision Structure */
// Declare and instantiate a variable to store the current date
const currentDate = new Date();

// Declare a variable to hold the current year and get the year from the currentDate
const currentYear = currentDate.getFullYear();

// Assign the current year variable to an HTML form element with an ID of "year"
document.getElementById("year").value = currentYear;


/* ARRAY METHODS - Functional Programming */
// Declare and instantiate an array variable to hold the numbers 1 through 13
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
// Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").textContent = numbersArray.join(", ");
/* Output Odds Only Array */
// Use the filter() array method to find all the odd numbers in the array and assign the result to the HTML element with an ID of "odds"
document.getElementById("odds").textContent = numbersArray.filter(number => number % 2 === 1).join(", ");
/* Output Evens Only Array */
// Use the filter() array method to find all the even numbers in the array and assign the result to the HTML element with an ID of "evens"
document.getElementById("evens").textContent = numbersArray.filter(number => number % 2 === 0).join(", ");
/* Output Sum of Org. Array */
// Use the reduce() array method to sum the array elements and assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById("sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number, 0);
/* Output Multiplied by 2 Array */
// Use the map() array method to multiply each element in the array by 2 and assign the result to the HTML element with an ID of "multiplied"
document.getElementById("multiplied").textContent = numbersArray.map(number => number * 2).join(", ");
/* Output Sum of Multiplied by 2 Array */
// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById("sumOfMultiplied").textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);