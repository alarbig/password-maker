// Assignment Code
var generateBtn = document.querySelector("#generate");
var userNunmber;
var userLetter;
var userUpperLetter;
var userSymbol;
var userPrompt;
var userConfirm;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "/:", "/;", " < ", "=", " > ", " ? ", "@", "[", "//", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
userUpperLetter = letter.map(toUpper);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Asks for user input
  var myConfirm = confirm("Would you like to include numbers? Cancel = no");
  var userSymbol = confirm('Do you want to include symbols? Cancel = no');
  var myPrompt = parseInt(prompt("How many characters for your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!myPrompt) {
      alert("This needs a value");
  } else if (myPrompt < 8 || myPrompt > 128) {
      // Validates user input
      // Start user input prompts
      myPrompt = parseInt(prompt("You must choose between 8 and 128"));
  }

  else if (myPrompt && myConfirm && userSymbol){
    dealerChoice = character.concat(number, letter);
  }

  else if (myPrompt && myConfirm){
    dealerChoice = character.concat(number);
  } 
  else if (myPrompt && userSymbol){
    dealerChoice = character.concat(userSymbol);
  }
   var passwordUser=[];

   for (var i = 0; i < myPrompt; i++) {
    var userSuperChoice= dealerChoice[Math.floor(Math.random() * dealerChoice.length)];
    passwordUser.push(userSuperChoice);
}
    var newPassword = passwordUser.join("");
    UserInput(newPassword);
    return newPassword;
}

function UserInput(newPassword) {
  document.getElementById("password").textContent = newPassword;

}

