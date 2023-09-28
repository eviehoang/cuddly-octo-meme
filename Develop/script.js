
// Add event listener to generate button
var generateBtn = document.querySelector("#password");

// Character Variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*()<>?";
var number = "0123456789";
var length = 8;

var allChars = upper + lower + symbols + number;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Generate Password
function generatePassword() {
  var pass = "";
  for (var i = 0, n = allChars.length; i < length; ++i){
    pass += allChars.charAt(Math.floor(Math.random() * n));
  }
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);