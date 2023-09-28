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
const slider = document.getElementById("myRange");

// Show Value of slider
const sliderValue = document.getElementById("myLength")







// // // Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");