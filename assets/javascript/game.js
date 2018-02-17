window.onload = funtion(){






var spaces;               // put spaces between words
var word;                // the current word
var currentGuess;        // letters that was just picked by user
var blankLetters = [];    //blanks for current word
var attempts;            // attempts lefts
var corrCounter;         // number of correct guesses
var trekWord             //array of star trek words
var letterGuess = [];    //stores letters guessed



//this was an attempt to create blanks for the current word that is being guessed//
function blankWord(){
	wordBlank = document.getElementById("current");
	correct = document.createElemnt("ul");

	for(var i = 0; i < word.length; i++){
		correct.setAttribute("id", "word");
		currentGuess = document.createElement("li");
		currentGuess.setAttribute.("class", "currentguess");
		if (word[i] === " ") {
			currentGuess.innterhtml = " ";
			space = 1;

		} else {
			currentGuess.innterhtml = "_";

		}

		blankLetters.push(currentGuess);
		wordBlank.appendchild(correct);
		correct.appendchild(currentGuess);
	}

}

//trying to show the number of attempts that are left for user//
          showAttempts = document.getElementById("remaining")

          function attempts(){
          	showAttempts.setAttribute("class", "label label-primary");
          	showAttempts.innterhtml = attempts + " remaining.";
          	if (attempts < 1 ) {
          		showAttempts.setAttribute("class", "label label-danger");
          		showAttempts.innterhtml = "You couldn't do it captain!!!";
          	}else if (tries < 5) {
          		showAttempts.setAttribute("class", "label label-warning");
          	}
          	for (var i = 0; i < blankLetters.length; i++) {
          		if (corrCounter + spaces === blankLetters.length){
          			showAttempts.setAttribute("class", "label label-success");
          			showAttempts.innterhtml = "Make it so....You Win!!!";
          		}
          	}
          }




var trekWord = ["Picard", "Troi","Riker", "Data", "Worf", "Enterprise","Klingon", "Bajoran", "Romulans", "Ferengi", "Vulcans", "Borgs"];
};