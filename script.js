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

  let lcIncluded = confirm("do you want LOWER CASE LETTERS in your password?");
  console.log(lcIncluded + " lcIncluded");
  let ucIncluded = confirm("do you want UPPER CASE LETTERS in your password?");
  console.log(ucIncluded + " ucIncluded");
  let noIncluded = confirm("do you want NUMBERS in your password?");
  console.log(noIncluded + " noIncluded");
  let scIncluded = confirm("do you want SPECIAL CHARACTERS in your password");
  console.log(scIncluded + " scIncluded");
  
  // to turn back to local variable after all testing is done
  // arrays are kept global (without the var) temporarly to test live in the console and not trapped in the function
  PWarraySized = []; //  variable character feeder array - size will vary depending on users selections of lc, uc, no adn sc types
  PWarrayActual = []; // the initial, actual user selected password size, length
  numReduceBySelectedCharType = num-1;
  totalSampleSize =0; // initialize  to zero - represents the total size of feeder array - PWarraySized
  iOffSet = 0; // initialize to zero - adjust the index/count depending on the users character type feeder arrays chosen to include

  // for LowerCase user selection
  if (lcIncluded == true) {  // only boolean value check needed
    PWarraySized = PWarraySized.concat(lc);  // start to build the feeder array based on user choices
    console.log(PWarraySized); // test array is being build upon condition
    // guarentee that at least one of the selected character types is selected per the criteria - make it a random selection
    PWarrayActual[iOffSet] = PWarraySized[Math.floor(Math.random()*26)]; 
    // console.log(PWarrayActual[0]); // test single random fill for lc (lowercase) letters
    // now subtract the num by this single char entry - need to adjust for when randomly filling the array after character selections are made
    numReduceBySelectedCharType;  // will fill, tap off the array by this remaining spots to meet user pw size request
    console.log(numReduceBySelectedCharType + " = fill array up to index")
    iOffSet++;  // offset the array index by 1
    console.log(iOffSet + " = iOffSet")
    totalSampleSize += 26;  // accounting for 26 lower case letters to sample
  }

  // for UpperCase user selection
  if (ucIncluded == true) {  // only boolean value check needed
    PWarraySized = PWarraySized.concat(uc);   // start to build the feeder array based on user choices
    console.log(PWarraySized); // test array is being build upon condition
    // guarentee that at least one of the selected character types is selected per the criteria - make it a random selection
    PWarrayActual[iOffSet] = PWarraySized[Math.floor(Math.random()*26)]; 
    // console.log(PWarrayActual[0]); // test single random fill for lc (lowercase) letters
    // console.log(PWarrayActual[1]); // test single random fill for uc (lowercase) letters
    // now subtract the num by this single char entry - need to adjust for when randomly filling the array after character selections are made
    numReduceBySelectedCharType;  // will fill, tap off the array by this remaining spots to meet user pw size request
    console.log(numReduceBySelectedCharType + " = fill array up to index")
    iOffSet++;  // offset the array index by 1
    console.log(iOffSet + " = iOffSet")
    totalSampleSize += 26;  // accounting for 26 upper case letters to sample
  }

    // for Numbers
    if (noIncluded == true) {  // only boolean value check needed
      PWarraySized = PWarraySized.concat(no);   // start to build the feeder array based on user choices
      console.log(PWarraySized); // test array is being build upon condition
      // guarentee that at least one of the selected character types is selected per the criteria - make it a random selection
      PWarrayActual[iOffSet] = PWarraySized[Math.floor(Math.random()*10)]; 
      // console.log(PWarrayActual[0]); // test single random fill for lc (lowercase) letters
      // console.log(PWarrayActual[1]); // test single random fill for uc (lowercase) letters
      // console.log(PWarrayActual[2]); // test single random fill for the numbers 
      // now subtract the num by this single char entry - need to adjust for when randomly filling the array after character selections are made
      numReduceBySelectedCharType;  // will fill, tap off the array by this remaining spots to meet user pw size request
      console.log(numReduceBySelectedCharType + " = fill array up to index")
      iOffSet++;  // offset the array index by 1
      console.log(iOffSet + " = iOffSet")
      totalSampleSize += 10;  // accounting for the 10 numeric digits 0-9
    }


  





  // fill the remainig part of the array to the users desired password size 
  for (var i=iOffSet; i <= numReduceBySelectedCharType; i++ ) {
      console.log(i);
      PWarrayActual[i] = PWarraySized[Math.floor(Math.random()*totalSampleSize)];
  }
  console.log(PWarrayActual);  
  return PWarrayActual;
  // return "1234 - weak password";   // testing code
}










// Write password to the #password input
function writePassword(num) {
  alert("begin the \n questions \n selecting the password contents");  
  var pwSize = num;
  console.log(pwSize + " this is how long the password will be - from inside writePassword function");
  var password = generatePassword(pwSize);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // passwordText.value = sc[23];  // testing single value
} 


// Add event listener to generate button
generateBtn.addEventListener("click", beginWritePassword);

