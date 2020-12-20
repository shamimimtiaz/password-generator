# password-generator

PASSWORD GENERATOR

Description (user Story):
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security. 


Scope: 

A password is randomly generated based on criteria that the user provides when prompted.
Length of password has to be chosen by user but is limited to a range of 8-128 (inclusive). 
Criteria user can choose to include in the password are, upper case, lower case, numeric value (number) and special characters
The user has to choose a minimum of 1 criteria. 

The user screen shows a "button" once clicked, the button "Generate Password" the user is shown the first promt for password length. 
If outside the range of 8-128 (inclusive), the user is prompted to once again enter a password length and is given the HINT to choose between the range. 
The prompt will loop until the user enters a valid number.
Once lenght is finalised by the user. 
The program then prompts the user to define if they would like to include numbers, special characters, uppercase and/or lowercase letters. 
If the user selects none to all criteria, the program will ask it to select at least each one and will loop back through the prompts till a minimum of 1 is chosen. 
When all parameters have been defined, the password will appear within the password box.

Technologies Used: HTML5, CSS3, JavaScript
File Directory and Files. 
Index.html
script.js
style.css


The program has unlimited loops set hence the user is able to make unlimited amount of mistakes and the program will keep running. 
The program uses reference for the fromCharCode => https://net-comber.com/charset.html for the random generation of the password. 
The program can be further enhancement for speed and 
GUI has the potential of becoming even more user friendly 
1. the user can be shown what criteria they have chosen when the password is generated). 
2. the user can have an option of copying the password to a copy board which can be pasted onto their program of choice
3. the user can click on the criteria choices instead of selecting on the windows prompt
4. the user can be shown how many times they have used the program
5. the user can be given statistics on how unlikely the generated password is hence providing further confidence
6. the user can also be given the option of chosing random sentences instead of just letters...

These are some of the many improvements that can be made in the future. 


