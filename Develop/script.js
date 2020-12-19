/* password generator: AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security */

// Global variable declarations and other


/*Promts to confirm password criteria
length of the password (8 characters to 128 characters inclusive)
include/exclude lowecase
include/exclude uppercase
include/exclude numeric
include/exclude special characters
input validation: atleast one character type should be selected
*/


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