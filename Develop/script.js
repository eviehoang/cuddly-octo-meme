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

// // Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Reference variables in DOM. Create a constant for the criteras chosen
const charRange = document.getElementById("myRange");
const charLength = document.getElementById("myLength");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const symbols = document.getElementById("symbols");
const nums = document.getElementById("nums");