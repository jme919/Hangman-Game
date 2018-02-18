window.onload = function() {






var spaces;               // put spaces between words//
var word;                // the current word//
var currentGuess;        // letters that was just picked by user//
var blankLetters = [];    //blanks for current word//
var attempts;            // attempts lefts//
var corrCounter;         // number of correct guesses//
var trekWords;             //array of star trek words//
var letterGuess = [];    //stores letters guessed//
var randomTrek; 


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

          function attemptsFun(){
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
//player key input//

			function keyed(input) {

				userGuess = document.getElementById("guessed");
				currentGuess = string.fromcharcode(input.keycode);
				if(attempts === 0 || corrCounter + spaces === blankLetters.length){
					alert("Click play again to start a new game.");
					return;

				}else if (letterGuess.find(function(value){
					return value === currentGuess.toUppercase()
				})) {
					alert("That letter has already been guessed!");
					return;
				}
				for (var i = 0; i < word.length; i++) {
					if(word[i] === currentGuess.tolowercase() || word[i] === currentGuess.toUppercase()){
						blankLetters[i].innterhtml = word[i];
						corrCounter +=1;
					}
				}

				var j = (word.indexOf(currentGuess));
				if(j === -1){
					attempts -= 1;
					attemptFun();


				} else{
					attemptFun();
				}

				letterGuess.push(currentGuess.toUppercase());
				userGuess.innterhtml = letterGuess;




			}

			function gameOn() {

                      trekWord = [
                      ["Picard","Crusher", "Tasha", "Wesley", "Geordi", "Trills", "Stardate", "Troi","Riker", "Data", "Worf", "Enterprise","Klingon", "Bajoran", "Romulans", "Ferengi", "Vulcans", "Warp","Borgs"];
                      ];
			randomTrek = trekWord[math.floor(math.random() * trekWord.length)];
			word = randomTrek[math.floor(math.random() * randomtrek.length)];

			document.onkeypress = keyed;
			blankLetters = [];
			letterGuess = [];



			}




};