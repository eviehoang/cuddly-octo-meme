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

//Variable for different types of characters using ASCII code

var upper = arrayRange(65.90)
var lower = arrayRange(97, 122)
var numbs = arrayRamge(48, 57)
var symbols = arrayRamge(33, 47).concat(
  arrayRamge(58, 64)
).concat(
  arrayRamge(91, 96)
).concat(
  arrayRamge(123, 126)
)






// // // Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");