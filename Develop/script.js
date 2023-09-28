//Assignment Code + Event Listener to prompt questions when button pushed
// Add event listener to generate button within the document.
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays and variables
// var number = ["01234567890"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var symChar = ["!@#$%^&*()-=_+<>?,./}{"];
var symChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
// var lower = ["abcdefghijklmnopqrstuvwxyz"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var inputLength = "";
var symbols;
var nums;
var upperCase;
var lowerCase;

//Generate Password
function generatePassword() {
  var inputLength = prompt("How long is your password? Choose a number between 8 and 128.");

  // if number is not between 8 and 128
  while (inputLength <= 7 || inputLength >= 129) {
    alert("Password length must be between 8 and 128. Please try again.");
    var inputLength = prompt("How long is your password? Choose a number between 8 and 128.");
  }

  // if number is valid proceed to choosing the parameters for the password.
  var symbols = confirm("Do you want to use symbols?");
  var nums = confirm("Do you want to use numbers?");
  var upperCase = confirm("Do you want to use Uppercase Letters?");
  var lowerCase = confirm("Do you want to use Lowercase Letters?");

  while (symbols == false && nums == false && upperCase == false && lowerCase == false) {
    alert("Please choose at least one parameter.");
    // asks for parameter again.
    var symbols = confirm("Do you want to use symbols?");
    var nums = confirm("Do you want to use numbers?");
    var upperCase = confirm("Do you want to use Uppercase Letters?");
    var lowerCase = confirm("Do you want to use Lowercase Letters?");
  }


  var passChars = []

  if (symbols) {
    passChars = passChars.concat(symChar)
  }
  if (nums) {
    passChars = passChars.concat(number)
  }
  if (upperCase) {
    passChars = passChars.concat(upper)
  }
  if (lowerCase) {
    passChars = passChars.concat(lower)
  }

  console.log(passChars)

  // Variable to fill with password.
  var newPassword = "";

  for (var i = 0; i < inputLength; i++) {
    newPassword = newPassword + passChars[Math.floor(Math.random() * passChars.length)];
  }
  return newPassword;
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
