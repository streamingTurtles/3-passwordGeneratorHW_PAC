// Assignment Code
var generateBtn = document.querySelector("#generate");


// initial prompt function, starting the generate password app
var userInput = function (){
  const pwLength = prompt ("How many characters in length do you want your Generated Password to be?\n\nPlease enter a number between 8 and 128?")
  if (pwLength === null){
    console.log("User quit out of initial prompt - breakout from within userInput function");
    return
  }  
  console.log(pwLength + " from userInput()");
  return pwLength;
};



// check to see if users input is valid
var checkForNum = function (callback){
  let numOfChars = callback();
  if (numOfChars === undefined){
    console.log("User quit out of initial prompt - break out from  within checkForNum function");
    return;
  }
  console.log(numOfChars + " from inside checkForNum");
  console.log(Number.isInteger(Number(numOfChars)) + " is typeof Number.isInteger()");
  if (Number.isInteger(Number(numOfChars)) && numOfChars >= 8 && numOfChars <= 128){
  alert ("good to move on with password generator question");
  writePassword(numOfChars);
  } 
    else {
      var proceed = confirm('try again, can put in specifics as to why input failed - todo if have time??');
      // if not true break out - end, user can always just click Generat Password to begin again
      if (proceed) {
        checkForNum(userInput)
      }            
    }
}



// Question - I need this here, if I directly put checkForNum(userInput) in the event 
// listner like: generateBtn.addEventListener("click", checkForNum(userInput) - the page goes blank until I enter in some information into the prompt initial question - I don't know why this happens ???
var beginWritePassword = function (){
  checkForNum(userInput);
}


var lc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var no = ["0","1","2","3","4","5","6","7","8","9"]
// Note: there is no blank space special code 
var sc = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|",  "}", "~"];
// password questions
function generatePassword(num){
  var pwSize = num;
  console.log(pwSize + " this is how long the password will be - from inside generatePassword function");
  alert("series of question now:");

  let lcIncluded = prompt("do you want LOWER CASE LETTERS in your password?");
  console.log(lcIncluded + " lcIncluded");
  let usIncluded = prompt("do you want UPPER CASE LETTERS inUPPER password?");
  console.log(usIncluded + " usIncluded");
  let noIncluded = prompt("do you want NUMBERS in your password?");
  console.log(noIncluded + " noIncluded");
  let scIncluded = prompt("do you want SPECIAL CHARACTERS");
  console.log(scIncluded + " scIncluded");










  return "1234 - weak password";
}



// Write password to the #password input
function writePassword(num) {
  alert("begin the \n questions \n selecting the password contents");  
  var pwSize = num;
  console.log(pwSize + " this is how long the password will be - from inside writePassword function");
  var password = generatePassword(pwSize);
  var passwordText = document.querySelector("#password");
  // passwordText.value = password;
  passwordText.value = sc[23];
}


// Add event listener to generate button
generateBtn.addEventListener("click", beginWritePassword);

