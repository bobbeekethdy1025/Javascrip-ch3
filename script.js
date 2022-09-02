// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// This was helped/guided by the great TA Paul 
function generatePassword() {

    var availableCharacters = '';
    var completedPassword = '';

    var wantUpper = confirm(`Do you want to include uppercase characters in your password?`)

    var wantLower = confirm(`Do you want to include lowercase characters in your password?`)

    var wantNumbers =confirm(`Do you want to include numbers in your password?`)

    var wantSpecial =confirm(`Do you want to include special characters in your password?`)

    var desiredPasswordLength = prompt(`How long do you want the password? Must be 8-128 characters`);
    if ((parseInt(desiredPasswordLength) >= 8) && (parseInt(desiredPasswordLength) <= 128)) {
  

      if (wantUpper) {
        availableCharacters = availableCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      }

      if (wantLower) {
        availableCharacters = availableCharacters + 'abcdefghijklmnopqrstuvwxyz'
      }
      if (wantNumbers) {
        availableCharacters = availableCharacters + '1234567890'
      }
      if (wantSpecial) {
        availableCharacters = availableCharacters + '!@#$%^&*_-+='
      }

  
      for(var i = 0; i < parseInt(desiredPasswordLength); i++) {
        var randomIndex = Math.floor(Math.random()*availableCharacters.length);

        var randomCharacter = availableCharacters[randomIndex];

        completedPassword = completedPassword + randomCharacter;

      }

      return completedPassword;
  
    } else {

      alert(`the length needs to be a number between 8 and 128`);
      return '';
    }
  }