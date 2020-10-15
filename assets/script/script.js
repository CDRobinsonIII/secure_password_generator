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

  // Console log test to make sure we're getting answer into howlongpw variable.
  console.log(howlongpw);

}
  // Console log test to make sure we're getting answer into howlongpw variable.
  console.log(howlongpw);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
