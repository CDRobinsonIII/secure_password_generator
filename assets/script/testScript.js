// Lets see if we can turn this into a function that will be called.

// We'll need arrays to contain password critria options

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
            var arr[j] = prompt("Would you like to include " + passwordCriteriaText[j] + "in your password y for yes or n for no.");
            var arr[j] = arr[j].toLowerCase();
        if ((arr[j] !=="n") && (arr[j] !=="y")) {
            alert ("You must enter y for yes or n for no.");
            i--;
        }
        }
    }
    // Console log test to make sure we're getting answer into optionLowerCase variable.
    console.log("Criteria type:" + arr[j]);
  }

  pickCriteria (passwordCriteriaTypes);
