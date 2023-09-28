//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays and variables
var number = ["01234567890"];
var specialChar = ["!@#$%^&*()-=_+<>?,./}{"];
var alphaLower = ["abcdefghijklmnopqrstuvwxyz"];
var alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var inputLength ="";
var symbols;
var nums;
var upperCase;
var lowerCase;

//Generate Password
function generatePassword(){
  var inputLength = prompt("How long is your password? Choose a number between 8 and 128.");

  // if number is not between 8 and 128
  while (inputLength < 8 ||inputLength >128){
    alert ("Password length must be between 8 and 128. Please try again.");
    var inputLength = prompt("How long is your password? Choose a number between 8 and 128.");
  }

  // if number is valid proceed to choosing the parameters for the password.
  
} 