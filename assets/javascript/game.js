$(document).ready(function (){


var spaces;// put spaces between words//
var word;// the current word//
var currentGuess;// letters that was just picked by user//
var blankLetters = [];//blanks for current word//
var attempts;// attempts lefts//
var corrCounter;// number of correct guesses//
var trekWord;//array of star trek words//
var letterGuess = [];//stores letters guessed//
 





//trying to show the number of attempts that are left for user//
          showAttempts = document.getElementById("remaining");

          function attemptsFun(){
          	
          	showAttempts.innerHTML = attempts + " remaining.";
          	if (attempts < 1 ) {
          		showAttempts.innerHTML = "You couldn't do it captain!!!";
          	for (var i = 0; i < blankLetters.length; i++) {
          		if (corrCounter + spaces === blankLetters.length){
          			showAttempts.innerHTML = "Make it so....You Win!!!";
          		}
          	}
          }
      }

          //this was an attempt to create blanks for the current word that is being guessed//
function blankWord(){
	wordBlank = document.getElementById("current");
	correct = document.createElemnt("ul");

	for(var i = 0; i < word.length; i++){
		correct.setAttribute("id", "word");
		currentGuess = document.createElement("li");
		currentGuess.setAttribute("class", "currentguess");
		if (word[i] === " ") {
			currentGuess.innerHTML = " ";
			space = 1;

		} else {
			currentGuess.innerHTML = "_";

		}

		blankLetters.push(currentGuess);
		wordBlank.appendchild(correct);
		correct.appendchild(currentGuess);

	}



}
//player key input//

			function keyed(input) {

				userGuess = document.getElementById("guessed");
				currentGuess = string.fromcharcode(input.keycode);
				}else if (letterGuess.find(function(value){
					return value === currentGuess.toUppercase()
				})) {
					alert("That letter has already been guessed!");
					return;
				}
				for (var i = 0; i < word.length; i++) {
					if(word[i] === currentGuess.tolowercase() || word[i] === currentGuess.toUppercase()){
						blankLetters[i].innerHTML = word[i];
						corrCounter +=1;
					}
				}

				var j = (word.indexOf(currentGuess));
				if(j === -1){
					attempts -= 1;
					attemptsFun();


				} else{
					attemptsFun();
				}

				letterGuess.push(currentGuess.toUppercase());
				userGuess.innerHTML = letterGuess;




			}

			function gameOn() {

                      trekWord = [
                      ["Picard","Crusher", "Tasha", "Wesley", "Geordi", "Trills", "Stardate", "Troi","Riker", "Data", "Worf", "Enterprise","Klingon", "Bajoran", "Romulans", "Ferengi", "Vulcans", "Warp","Borgs"]
                      ];
			chosenCategory = trekWord[Math.floor(Math.random() * trekWord.length)];
			word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];

			document.onkeypress = keyed;
			blankLetters = [];
			letterGuess = [];
			attempts = 10;
			corrCounter = 0;
			spaces = 0;
			blankWord();
			attemptsFun();
			select();

			gameOn();




			}




};