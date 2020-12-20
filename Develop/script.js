// Global variable declarations 
var confirmLength= "";
var confirmLowerCase = "";
var confirmUpperCase= ""; 
var confirmNumber= "";  
var confirmSpecialCharacter= "";
var generatedPassword="";
var password="";

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  //Get User inputs
  //length of password
  confirmLength = (window.prompt("what length of password do you want? Hint: Range allowed 8-128 char"));
  while(confirmLength <= 7 || confirmLength >= 129) 
  {alert("Password length must be between 8-128 (inclusive) characters. Please Try again");
  confirmLength = (window.prompt("what length of password do you want? Hint: Range allowed 8-128 char"));
  } 
  // Repeat back how many characters the user will have  
  window.alert(`Your password will be ${confirmLength} characters long`); 
  //END: length of password

  //Promts to confirm password criteria include/exclude lowecase, uppercase, numeric, special characters. 
    confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");
    confirmNumber = window.confirm("Click OK to confirm if you would like to include numeric characters");  
    confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");  
  // Loop if answer is outside the parameters: input validation: atleast one character type should be selected. 
     while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumber === false) 
     {
       alert("You must choose at least one parameter");
       confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
       confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters"); 
       confirmNumber = window.confirm("Click OK to confirm if you would like to include numeric characters");    
       confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
     } 
     const passwordcriteria = [{confirmLowerCase},{confirmUpperCase}, {confirmNumber}, {confirmSpecialCharacter}].filter(item=> Object.values(item)[0]);
  //END: Password criteria promt
  //END: Get User inputs

  //Generate and Return the password
  generatePassword();
  password = generatedPassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //END:Generate and Return the password
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate Password: loop to generate the password
function generatePassword() 
{
  criteriaCount = confirmLowerCase+confirmUpperCase+confirmNumber+confirmSpecialCharacter;
  generatedPassword ="";
  for (i=0; i<confirmLength; i+=criteriaCount)
  {  if(confirmLowerCase)
    {generatedPassword = generatedPassword.concat(getRandomLowerCase());}
    if(confirmUpperCase)
    {generatedPassword = generatedPassword.concat(getRandomUpperrCase());}
    if(confirmNumber)
    {generatedPassword = generatedPassword.concat(getRandomNumericChar());}
    if(confirmSpecialCharacter)
    {generatedPassword = generatedPassword.concat(getRandomSpecialChar());}
  }
  generatedPassword=generatedPassword.slice(0,confirmLength);
return String.generatedPassword;
}
//End: Generate Password

// RANDOM GENERATORS: lowercase, uppercase, numeric char and special character. reference for the fromCharCode => https://net-comber.com/charset.html
function getRandomLowerCase() 
{return String.fromCharCode(Math.floor(Math.random()*26)+97);}
function getRandomUpperrCase() 
{return String.fromCharCode(Math.floor(Math.random()*26)+65);}
function getRandomNumericChar() 
{return String.fromCharCode(Math.floor(Math.random()*10)+48);}
function getRandomSpecialChar() 
{const specialChars = [" ", "!", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~" ];
return specialChars[Math.floor(Math.random()*specialChars.length)];
}
// END: RANDOM GENERATORS: