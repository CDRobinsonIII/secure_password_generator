// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays to hold the different criteria values.

var lowerCaseLettersCriteria = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLettersCriteria = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCriteria = [0,1,2,3,4,5,6,7,8,9];
var specialCharsCriteria = ["!","\[","\]","\"","\\","\'","\,","@","$","%","^","&","*","(",")","\~","\`","<",">",":",".","?"];
var userPasswordCritera = [];
var userSecurePassword =[];

function generatePassword () {
  var randomIndexGenerator = Math.floor(Math.random() * userPasswordCritera.length) + 1;
  var characterToAddToPassword = userPasswordCritera[randomIndexGenerator];
  userSecurePassword.push(characterToAddToPassword);
}

// Write password to the #password input
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

  // Console log test to make sure we're getting answer into howlongpw variable.
  console.log(howlongpw);

  // Ask user if they want to include lower case letters in their password.
  // Use a confirm, OK = yes include. Cancel = no exclude.

  var optionLowerCase = confirm("Hit OK if you would like to include lower case letters in your password. Please hit Cancel if you would like to exclude them.");
  if (optionLowerCase ===true) {
    Array.prototype.push.apply(userPasswordCritera,lowerCaseLettersCriteria);
  }

  // Console log test to make sure we're getting answer into optionLowerCase variable.
  console.log("I want to have lower case letters in my password:" + optionLowerCase);

  // Ask user if they want to include upper case letters in their password.
  // Use a confirm, OK = yes include. Cancel = no exclude.
  
  var optionUpperCase = confirm("Hit OK if you would like to include upper case letters in your password. Please hit Cancel if you would like to exclude them.");
  if (optionUpperCase ===true) {
    Array.prototype.push.apply(userPasswordCritera,upperCaseLettersCriteria);
  }

  // Console log test to make sure we're getting answer into optionUpperCase variable.
  console.log("I want to have upper case letters in my password:" + optionUpperCase);

  // Ask user if they want to include numbers in their password.
  // Use a confirm, OK = yes include. Cancel = no exclude.

  var optionNumbers = confirm("Hit OK if you would like to include numbers in your password. Please hit Cancel if you would like to exclude them.");
  if (optionNumbers ===true) {
    Array.prototype.push.apply(userPasswordCritera,numberCriteria);
  }

  // Console log test to make sure we're getting answer into optionSpecialChars variable.
  console.log("I want to have numbers in my password:" + optionNumbers);

  // Ask user if they want to include special characters in their password.
  // Use a confirm, OK = yes include. Cancel = no exclude.

  var optionSpecialChars = confirm("Hit OK if you would like to include special characters in your password. Please hit Cancel if you would like to exclude them.");
  if (optionSpecialChars ===true) {
    Array.prototype.push.apply(userPasswordCritera,specialCharsCriteria);
  }

  // Console log test to make sure we're getting answer into optionSpecialChars variable.
  console.log("I want to have special characters in my password:" + optionSpecialChars);

  // Test to see if user's password criteria was in fact added to the userPasswordCritera array after hitting OK.
  for (var i=0; i < userPasswordCritera.length; i++) {
  console.log ("Users password criteria to choose from " + userPasswordCritera[i]);
  }

// Now that we have the userPasswordCritera array which contains the available characters for the users password we can run 
// a loop (based on howlongpw variable) to add random characters to their empty password array. 
// Generate a random number (using math.floor and math.random) from 0 to userPasswordCritera.length to pick random index in userPasswordCritera array. 
// Then add it to the userSecurePassword array
// Display user's password in the text area.

alert("The user wants their password to be " + howlongpw +" characters long");
alert("The number of characters the user included in their password criteria is: " + userPasswordCritera.length);

for (var i=0; i < howlongpw; i++) {
  var randomIndexGenerator = Math.floor(Math.random() * userPasswordCritera.length)+1;
  console.log("Random number is: " + randomIndexGenerator);
  var characterToAddToPassword = userPasswordCritera[randomIndexGenerator];
  userSecurePassword.push(characterToAddToPassword);
  console.log(i + "random character is: " + characterToAddToPassword);
  }

// alert("The user's new password is: " + userSecurePassword.join(""));

  // var password = generatePassword();
  var password = userSecurePassword.join("");
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
alert("The length of the user's password is: " + userSecurePassword.length)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
