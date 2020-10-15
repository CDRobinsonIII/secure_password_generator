// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // Ask user how long they want their password to be.
  // Prompt is inside of a for Loop until the user enters a password length between 8 and 128.
  
  for (var i = 0; i < 1;i++) {
    var howlongpw = prompt("How long would you like your password to be (between 8 and 128 charactors)?");

  if ((howlongpw<8) || (howlongpw>128)) {
    alert ("You must select a password length between 8 and 128");
    i--;
  }
  }
  // Console log test to make sure we're getting answer into howlongpw variable.
  console.log(howlongpw);

  // Ask user if they want to include lower case letters in their password.
  // Prompt is inside of a for Loop until the user enters a yes or no.
  for (var i = 0; i < 1;i++) {
    var optionLowerCase = prompt("Would you like to include lower case letters in your password y for yes or n for no.");
    console.log("Before lower case:" + optionLowerCase);
    var optionLowerCase = optionLowerCase.toLowerCase();
    console.log("After lower case:" + optionLowerCase);
  if ((optionLowerCase !=="n") && (optionLowerCase !=="y")) {
    alert ("You must enter y for yes or n for no.");
    i--;
  }
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
  }
  // Console log test to make sure we're getting answer into optionSpecialChars variable.
  console.log(optionSpecialChars);


  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
