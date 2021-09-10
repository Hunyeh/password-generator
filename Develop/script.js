// Assignment code here
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "?", "/", "*", "`", "~", "|"];

var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var finalPassword = ""
  // ask what password size they would like
  var passwordSize = prompt("What is the size of your password? Select between 8-128 character.");
  passwordSize = parseInt(passwordSize);
  if (passwordSize >= 8 && passwordSize <= 128) {
    var isLowercase = confirm("Does this password include lowercase letters?");
    var isUppercase = confirm("Does this password contain uppercase letter?");
    var isSpecial = confirm("Does this password contain special characters?");
    var isNumeric = confirm("Does this password include numeric charcters?");
    if (isLowercase === false && isUppercase === false && isSpecial === false && isNumeric === false) {
      alert("You must select at least one type of character.");
      return "";
    }
    for (let i = 0; i < passwordSize && finalPassword.length < passwordSize; i++) {
      if (isLowercase && finalPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * lowerCaseArray.length);
        finalPassword = finalPassword + lowerCaseArray[index];
      }
      if (isUppercase && finalPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * upperCaseArray.length);
        finalPassword = finalPassword + upperCaseArray[index];
      }
      if (isSpecial && finalPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * specialCharacter.length);
        finalPassword = finalPassword + specialCharacter[index];
      }
      if (isNumeric && finalPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * numericCharacter.length);
        finalPassword = finalPassword + numericCharacter[index];
      }
    }
  }

  else {
    alert("Invalid. Try again.")
  }
  return finalPassword;
}