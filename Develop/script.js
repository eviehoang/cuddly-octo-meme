// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Variables for different characters.
// var upperCase = confirm("Use Upper Case Letters?");
// var lowCase = confirm("Use Lower Case Letters?");
// var numbs = confirm("Do you want to use numbers?");
// var symbols = confirm("Do you want to use symbols?");
// var passLength = prompt("Choose the password character length from between 8 and 128.");
// var passInput = passLength;

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Generate Password
// if (passInput >= 8 && passInput <= 128) {
//   function generatePassword() {
//     var pass = "";
//     var allChars = upperCase + lowCase + numbs + symbols;

//     for (var i = 0; i <= passInput; i++) {
//       pass += Math.floor(Math.random() * allChars.length);
//     }
//     return pass;
//   }
// }

// else {
//   alert("Please enter a character value between 8 and 128.")
// }

// Get character length value from slider
var slider = document.getElementById("myRange");

// Show Value of slider
var sliderValue = document.getElementById("myLength");

// Display the default slider value
sliderValue.innerHTML = slider.value;
slider.oninput = function () {
  sliderValue.innerHTML = this.value;
}

// // Variables for different characters.
var upperCase = document.getElementById("upper");
var lowCase = document.getElementById("lower");
var numbs = document.getElementById("nums");
var symbols = document.getElementById("symbols");

var passwordText = document.querySelector("password");

// Variables in relation to AASCII Code
const upperChar = arrayRange(65, 90)
const lowerChar = arrayRange(97, 122)
const numChar = arrayRange(48, 57)
const symbolChar = arrayRange(33, 47).concat(
  arrayRange(58, 64)
).concat(
  arrayRange(91, 96)
).concat(
  arrayRange(123, 126)
)
// function goes through and grabs from refrenced ranges
function arrayRange(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// stops form from submitting and refreshing page.
passwordText.addEventListener('submit', e => {
  e.preventDefault()
  var slider = myRange.value
  var upperCase = upperCaseElement.checked
  var lowCase = lowCaseElement.checked
  var numbs = numbsElement.checked
  var symbols = symbolsElement.checked
  var password = generatePassword(upperCase, lowCase, numbs, symbols)
})

function generatePassword(upperCase, lowCase, numbs, symbols) {

}




// // // Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");