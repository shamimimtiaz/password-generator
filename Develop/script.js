/* password generator: AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security */

// Global variable declarations 

var confirmLength;

/*Promts to confirm password criteria
length of the password (8 characters to 128 characters inclusive)
include/exclude lowecase
include/exclude uppercase
include/exclude numeric
include/exclude special characters
input validation: atleast one character type should be selected
Takes inputs for length of password, Lowercase, uppercase, number and special char = TRUE/FALSE
*/
function generatePassword() {
  confirmLength = (window.prompt("what length of password do you want? Hint: Range allowed 8-128 char"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 (inclusive) characters. Please Try again");
      confirmLength = (window.prompt("what length of password do you want? Hint: Range allowed 8-128 char"));
      } 

      // Repeat back how many charactes the user will have  
     window.alert(`Your password will be ${confirmLength} characters long`);
}

    generatePassword();
    

  // Determine parameters of password 
    var confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");
    var confirmNumber = window.confirm("Click OK to confirm if you would like to include numeric characters");  
    var confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");  
  // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumber === false) {
        alert("You must choose at least one parameter");
        var confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters"); 
        var confirmNumber = window.confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
      } 
    

console.log(confirmLowerCase,confirmUpperCase,confirmNumber, confirmSpecialCharacter);

//Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//} 

//Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



console.log(confirmLength);



// Random lowercase, uppercase, numeric char and special character generators reference for the fromCharCode => https://net-comber.com/charset.html
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpperrCase() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomNumericChar() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSpecialChar() {
  const specialChars = [" ", "!", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~" ];
  return specialChars[Math.floor(Math.random()*specialChars.length)];
}
console.log(getRandomLowerCase());