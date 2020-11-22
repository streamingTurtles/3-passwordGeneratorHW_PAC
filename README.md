# 3-passwordGeneratorHW_PAC
# HW #3: Password Generator
# Due: Saturday, November 21, 2020 @ 11:59pm Local

## User Story
This application will generate a user password based on 4 selectable character sets that a user can choose from.  The following character sets are:
1. Lowercase Letters (26 characters)
2. Uppercase Letters (26 characters)
3. Numbers, the digits from (0-9, 10 characters)
4. Special Characters, (32 characters used)from the following list: [list of Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters). 
*note: the Space special character was not used to eliminate confusion due to the nature on not being able o detect the character visually*

## There are 4 files in this application:
* index.html
* script.js
* style.css
* README.md
* A series of Screenshots are provided as a reference in the `Assets` folder, demonstrating a user being prompted through the application.  

---
---
## Acceptance Criteria

## Using Native Javascript, this application was coded according to meeting the following Acceptance Criteria:
1. A new password will be generated after answering a series of prompts and user input. (CONFIRMED)
2. The password's length can be determined by the user. (CONFIRMED)
3. The password's character sets can be selected by the user. (CONFIRMED)
4. The user can select any combination of the 4 character sets presented.  (listed above.) (CONFIRMED)
5. At least one character from any of the selected charater the user confirms will be part of the random generated password.  Matching the user selected criteria. (CONFIMED)
6. The password is written to the center of the page when all questions have been answered by the user. (CONFIRMED)




<br/>
<br/>


## NOTES:
* > All comments have been left in whild developing this application to help in current and primarily future reFactoring enhancements.
* > If the user enters a password length that is our of the criteri's range (8-126 characters in length), the user will be prompted to reEnter their desired length.  The application will accuratly address either incorrect entries and user cancel button requests from the dialogue prompts.
* > By design, the character set with the least amount of characters (the digits) will have less chances for randome selections.
* > The code has been written in a modular function layout, such that further refactoring for optimum modularity is capable without major rewritting of the code.

<br/>
<br/>


---
---
## gitHub repo link & live web link:
<br/>

* `Application GitHub Repo URL:`
https://github.com/streamingTurtles/3-passwordGeneratorHW_PAC  

* `Application Live GitHub URL:`  https://streamingturtles.github.io/3-passwordGeneratorHW_PAC/



- - -
- - -
Peter Cardillo, Columbia Engineering Fullstack Bootcamp, 2020-2021