// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays to hold the different criteria values.

var lowerCaseLettersCriteria = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLettersCriteria = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCriteria = [0,1,2,3,4,5,6,7,8,9];
var specialCharsCriteria = ["!","\[","\]","\"","\\","\'","\,","@","$","%","^","&","*","(",")","\~","\`","<",">",":",".","?"];
var userPasswordCritera = [];
var userSecurePassword =[];

// Use prompt and confirms to get users password criteria. 
function writePassword() {
  
  // Ask user how long they want their password to be.
  // Prompt is inside of a for Loop until the user enters a password length between 8 and 128.
  
  var howlongpw = prompt("How long would you like your password to be (between 8 and 128 characters)?");
    if (isNaN(howlongpw) === true) {
      return alert ("You must select a number between 8 and 128, please try again.");
    }

    if (((howlongpw)<8) || ((howlongpw)>128)) {
      return alert ("You must select a password length between 8 and 128, please try again.");
    }

  // Ask user if they want to include lower case letters in their password.
  // Use a confirm, OK = yes include. Cancel = no exclude.

  var optionLowerCase = confirm("Hit OK if you would like to include lower case letters in your password. Please hit Cancel if you would like to exclude them.");
  if (optionLowerCase ===true) {
    Array.prototype.push.apply(userPasswordCritera,lowerCaseLettersCriteria);
  }

  // Ask user if they want to include upper case letters in their password.
  // Use a confirm, OK = yes include. Cancel = no exclude.
  
  var optionUpperCase = confirm("Hit OK if you would like to include upper case letters in your password. Please hit Cancel if you would like to exclude them.");
  if (optionUpperCase ===true) {
    Array.prototype.push.apply(userPasswordCritera,upperCaseLettersCriteria);
  }

  // Ask user if they want to include numbers in their password.
  // Use a confirm, OK = yes include. Cancel = no exclude.

  var optionNumbers = confirm("Hit OK if you would like to include numbers in your password. Please hit Cancel if you would like to exclude them.");
  if (optionNumbers ===true) {
    Array.prototype.push.apply(userPasswordCritera,numberCriteria);
  }

  // Ask user if they want to include special characters in their password.
  // Use a confirm, OK = yes include. Cancel = no exclude.

  var optionSpecialChars = confirm("Hit OK if you would like to include special characters in your password. Please hit Cancel if you would like to exclude them.");
  if (optionSpecialChars ===true) {
    Array.prototype.push.apply(userPasswordCritera,specialCharsCriteria);
  }

  // Test to see if user's password criteria was in fact added to the userPasswordCritera array after hitting OK.
  for (var t=0; t < userPasswordCritera.length; t++) {
  console.log ("Users password criteria to choose from " + userPasswordCritera[i]);
  }

// Now that we have the userPasswordCritera array which contains the available characters for the users password we can run 
// a loop (based on howlongpw variable) to add random characters to their empty password array. 
// Generate a random number (using math.floor and math.random) from 0 to userPasswordCritera.length to pick random index in userPasswordCritera array. 
// Then add it to the userSecurePassword array and display user's password in the text area when password is complete.

// Generate random characters to append to userSecurePassword.
for (var i=0; i < howlongpw; i++) {
  var randomIndexGenerator = Math.floor(Math.random() * userPasswordCritera.length);
  var characterToAddToPassword = userPasswordCritera[randomIndexGenerator];
  userSecurePassword.push(characterToAddToPassword);
  }

  // Declared password as the userSecurePassword without the commas between each letter in the password. 
  var password = userSecurePassword.join("");
  var passwordText = document.querySelector("#password");

  // Display randomly generated password in text area on password generater webpage.
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
