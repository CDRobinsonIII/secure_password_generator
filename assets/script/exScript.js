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

  var passwordCriteriaTypes = ["optionLowerCase", "optionsUpperCase", "optionsNumbers","optionSpecialChar"];
  var passwordCriteriaText =["lower case letters","upper case letters", "numbers", "special characters"];
  var optionLowerCase;
  var optionsUpperCase;
  var optionsNumbers;
  var optionSpecialChar;
    
    
    // Ask users which password criteria to include in their password.
    // Prompt is inside of a for Loop until the user enters a yes or no.
    function pickCriteria(arr) {
  
      for (var j =0; j <arr.length; j++) {
  
          for (var i = 0; i < 1;i++) {
              var arr,[j] = prompt("Would you like to include " + passwordCriteriaText[j] + "  in your password y for yes or n for no.");
            //   var arr,[j] = arr[j].toLowerCase();
          if ((arr[j] !=="n") && (arr,[j] !=="y")) {
              alert ("You must enter y for yes or n for no.");
              i--;
          }
          }
      }
      // Console log test to make sure we're getting answer into optionLowerCase variable.
      console.log("Criteria type:" + arr[j]);
    }
  
    pickCriteria (passwordCriteriaTypes);
  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
