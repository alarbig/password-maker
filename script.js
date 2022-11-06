// Assignment Code
var generateBtn = document.querySelector("#generate");
var userNunmber;
var userLetter;
var userUpperLetter;
var userSymbol;
var userPrompt;
var userConfirm;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "/:", "/;", "<", "=", ">", "?", "@", "[", "//", "]", "^", "_", "`", "{","|","}","~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// Write password to the #password input
function passwordDisplay() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", passwordDisplay);

function generatePassword() {
  // list of inputs to be entered by the user. 
  var myConfirm = confirm("Would you like to include numbers? Cancel = no");
  var userUpperLetter = confirm("Would you like to use upper case letters? Cancel = no")
  var userSymbol = confirm('Do you want to include symbols? Cancel = no');
  var myPrompt = parseInt(prompt("How many characters for your password? Choose between 8 and 128"));
  
  if (!myPrompt) {
      alert("Please enter a number between 8 and 128");
  } else if (myPrompt < 8 || myPrompt > 128) {
      myPrompt = parseInt(prompt("You must choose between 8 and 128"));
  }
/* depending on the selection this will take the users inputs and then convert them to a variable to then be run through the math.random command */
  else if (myPrompt && myConfirm && userSymbol && userUpperLetter){
    dealerChoice = letter.concat(number, upperCase, character);
  }

  else if (myPrompt && myConfirm && userUpperLetter){
    dealerChoice = letter.concat(number, upperCase);
  }

  else if (myPrompt && myConfirm && userSymbol ){
    dealerChoice = letter.concat(number, character);
  } 
  else if (myPrompt && userSymbol && userUpperLetter){
    dealerChoice = letter.concat(userSymbol, upperCase, character);
  }
// if no choices are selected it will simply default to how many characters you entered and will only display lower case letters. 
  else if (myPrompt){
    dealerChoice = letter;
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
// after the password has been generated it will be displayed in the password field on the users screen.
function UserInput(newPassword) {
  document.getElementById("password").textContent = newPassword;

}

