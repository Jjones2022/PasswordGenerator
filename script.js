//Assignment Code
var generateBtn = document.querySelector("#generate");
let sign = prompt("Welcome, Let's Generate a Password, CLick The Ok Button To Get Started! Then Press the Generate Password button!");
if (sign.length > 0) {
  alert("Please follow the prompts")
}

// Variables need to be assigned
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";

// Write password to the #password input
function enterpassword() {
  var password = genratepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

//Password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener generates password once user clicks button
generateBtn.addEventListener("click", writePassword)

//This function should return the final password
function generatePassword(){
  //The if loops will cause the random generation and the final password will be generated
  var result = "";
  //prompts the user to enter how many characters they want in the password
  var length = prompt("How many characters would you like for your random password? (between 8 and 128)");
  if(isNaN(length)){
    alert("Input a number!");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please choose numbers between 8 - 128!");
    return generatePassword()
  }
  //Prompts the user to include uppercase, lowercase, numbers, or special characters
  var hasUpper = confirm("Upper case letters?");
  var hasLower = confirm("Lower case letters?");
  var hasNumbers = confirm("Numbers?");
  var hasSpecial = confirm("Special Characters?");

  if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
    alert("Choose at least 1 character type!");
    return generatePassword()
  }

  if(hasUpper){
    chosenCharacters += upper
  }
  if(hasLower){
    chosenCharacters += lower
  }

  if(hasNumbers) {
    chosenCharacters += numbers
  }

  if(hasSpecial) {
    chosenCharacters += special
  }

for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}