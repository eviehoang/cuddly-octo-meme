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

var passwordText = document.getElementById("password");

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
  var slider = myRange.value;
  var upperCase = upperCaseElement.checked;
  var lowCase = lowCaseElement.checked;
  var numbs = numbsElement.checked;
  var symbols = symbolsElement.checked;
  var password = generatePassword(upperCase, lowCase, numbs, symbols);

  var passwordText = document.getElementById("password");
  passwordText.value = password;
})

// Generate Password
function generatePassword(upperCase, lowCase, numbs, symbols) {
  var chara = lowerChar
  if (upperCase) chara = chara.concat(upperChar)
  if (numbs) chara = chara.concat(numChar)
  if (symbols) chara = chara.concat(symbolChar)

  var pass = ""
  for (var i = 0; i < slider; i++) {
    var characters = chara[Math.floor(Math.random() * chara.length)]
    pass.push(String.fromchara(characters))
  }
  return pass.join("")
}
