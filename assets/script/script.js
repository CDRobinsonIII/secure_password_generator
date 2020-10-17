// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays to hold the different criteria values.

var lowerCaseLettersCriteria = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLettersCriteria = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCriteria = [0,1,2,3,4,5,6,7,8,9];
var specialCharsCriteria = ["!", "\"","@","$","%","^","&","*","(",")"];
var userPasswordCritera = [];
var userSecurePassword =[];

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
  console.log(optionLowerCase);

  // Ask user if they want to include upper case letters in their password.
  // Prompt is inside of a for Loop until the user enters a yes or no.
 
  for (var i = 0; i < 1;i++) {
    var optionUpperCase = prompt("Would you like to include upper case letters in your password y for yes or n for no.");
    console.log("Before lower case:" + optionUpperCase);
    var optionUpperCase = optionUpperCase.toLowerCase();
    console.log("After lower case:" + optionUpperCase);
  if ((optionUpperCase !=="n") && (optionUpperCase !=="y")) {
    alert ("You must enter y for yes or n for no.");
    i--;
  }

  // If user selects yes to add the optionLowerCase to their password add the lowerCaseLettersCriteria array to their userPasswordCritera array.
  else if (optionUpperCase === "y") {
    Array.prototype.push.apply(userPasswordCritera,upperCaseLettersCriteria);
  }
  }

  // Console log test to make sure we're getting answer into optionUpperCase variable.
  console.log(optionUpperCase);

  // Ask user if they want to include numbers in their password.
  // Prompt is inside of a for Loop until the user enters a yes or no.

  for (var i = 0; i < 1;i++) {
    var optionNumbers = prompt("Would you like to include numbers in your password y for yes or n for no.");
    console.log("Before lower case:" + optionNumbers);
    var optionNumbers = optionNumbers.toLowerCase();
    console.log("After lower case:" + optionNumbers);

  if ((optionNumbers !=="n") && (optionNumbers !=="y")) {
    alert ("You must enter y for yes or n for no.");
    i--;
  }

  // If user selects yes to add the optionLowerCase to their password add the lowerCaseLettersCriteria array to their userPasswordCritera array.
  else if (optionNumbers === "y") {
    Array.prototype.push.apply(userPasswordCritera,numberCriteria);
  }
  }

  // Console log test to make sure we're getting answer into optionSpecialChars variable.
  console.log(optionNumbers);

  // Ask user if they want to include special characters in their password.
  // Prompt is inside of a for Loop until the user enters a yes or no.

  for (var i = 0; i < 1;i++) {
    var optionSpecialChars = prompt("Would you like to include special characters in your password y for yes or n for no.");
    console.log("Before lower case:" + optionSpecialChars);
    var optionSpecialChars = optionSpecialChars.toLowerCase();
    console.log("After lower case:" + optionSpecialChars);

  if ((optionSpecialChars !=="n") && (optionSpecialChars !=="y")) {
    alert ("You must enter y for yes or n for no.");
    i--;
  }

  // If user selects yes to add the optionLowerCase to their password add the lowerCaseLettersCriteria array to their userPasswordCritera array.
  else if (optionSpecialChars === "y") {
    Array.prototype.push.apply(userPasswordCritera,specialCharsCriteria);
  }
  }

  // Console log test to make sure we're getting answer into optionSpecialChars variable.
  console.log(optionSpecialChars);

  // Test to see if lowerCaseLettersCriteria array was in fact add to the userPasswordCritera array after selecting yes.
    for (var i=0; i < userPasswordCritera.length; i++) {
    console.log ("Users password criteria to choose from " + userPasswordCritera[i]);
    }

// Now that we have the userPasswordCritera array which contains the available characters for the users password we can run 
// a loop (based on howlongpw variable) to add random characters to their empty password array. 
// Generate a random number (using math.floor and math.random) from 0 to userPasswordCritera.length to pick random index in userPasswordCritera array. 
// Then add it to the userSecurePassword array
// Display user's password as an alert when the password is created. 

alert("The user wants their password to be " + howlongpw +" characters long");
alert("The number of characters the user included in their password criteria is: " + userPasswordCritera.length);

for (var i=0; i < howlongpw; i++) {
  var randomIndexGenerator = Math.floor(Math.random() * userPasswordCritera.length) + 1;
  var characterToAddToPassword = userPasswordCritera[randomIndexGenerator];
  userSecurePassword.push(characterToAddToPassword);
  }

alert("The user's new password is: " + userSecurePassword.join(""));

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
