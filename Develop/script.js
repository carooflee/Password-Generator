// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let pwLength;
  let pwLengthVerified = true
  while (pwLengthVerified) {
    pwLength = window.prompt("How long would you like your password to be?");
    if (parseInt(pwLength) > 128 || parseInt(pwLength) < 8) {
      pwLengthVerified = true;
    }
    else {
      pwLengthVerified = false;
    }
  }
  let lowerCase = window.confirm("Would you like to use lower case characters?");
  let upperCase = window.confirm("Would you like to use upper case characters?");
  let numbers = window.confirm("Would you like to use numbers?");
  let special = window.confirm("Would you like to use special characters?");

 // let password = generatePassword();
  let passwordText = document.querySelector("#password");

//  passwordText.value = password;

  let charset1 = "abcdefghijklmnopqrstuvwxyz"
  let charset2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let charset3 = "1234567890"
  let charset4 = "~!@#$%^&*()_+"

let charset; 

  if (lowerCase && upperCase && numbers && special) {
   charset = charset1 + charset2 + charset3 + charset4
  }
  else if (lowerCase && upperCase && numbers) {
   charset = charset1 + charset2 + charset3
  }
  else if (lowerCase && upperCase) {
   charset = charset1 + charset2
  }
  else if (lowerCase && numbers) {
   charset = charset1 + charset3
  }
  else if (lowerCase && special) {
   charset = charset1 + charset4
  }
  else if (lowerCase) {
   charset = charset1
  }
  else if (upperCase && numbers && special) {
   charset = charset2 + charset3 + charset4
  }
  else if (upperCase && number) {
   charset = charset2 + charset3
  }
  else if (upperCase && special) {
   charset = charset2 + charset4
  }
  else if (upperCase) {
   charset = charset2
  }
  else if (numbers && special) {
   charset = charset3 + charset4
  }
  else if (numbers) {
   charset = charset3
  }
  else if (special) {
   charset = charset4
  }

  let length = pwLength;
  let retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  document.getElementById("password").innerHTML = retVal
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


