// ********* Global Variables *********
// Word Bank
var wordBank = ["reggae", "jamaica", "marley",
                    "rasta", "vibration", "love",
                    "beach", "dancehall", "guitar",
                    "singer", "songwriter", "exodus",
                    "jamming", "rastafari", "ganja"
                  ];
// Holds a game word in a string chosen at random from above array
var selectedWord = "";
// conver the selected word into an array
var lettersInWord = [];
// Calculate the number of blanks in the word
var numBlanks = 0;
// This variable has two functions: display the blanks, and populate correct guesses
var PushSplice = [];
// Holds the user's wrong guesses in an array
var wrongLetters = [];
// Updates the win count
var winCount = 0;
// Updates the loss count
var lossCount = 0;
// Total number of guesses left to play
var guessesLeft = 10;

// ********* FUNCTIONS *********
function startGame() {

  selectedWord = wordBank[Math.floor(Math.random()*wordBank.length)]
  lettersInWord = selectedWord.split("");
  numBlanks = lettersInWord.length;


  // Reset
  guessesLeft = 9;
  wrongLetters = [];
  PushSplice = [];

  // Populate Blanks and Succeses with right number of blanks
  for (var i=0; i<numBlanks; i++){
    PushSplice.push("_");
  }

  document.getElementById("wordToGuess").innerHTML = PushSplice.join(" ");
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;

  // Testing
  console.log(selectedWord);
  console.log(lettersInWord);
  console.log(numBlanks);
  console.log(PushSplice);

}

function checkLetters(letter) {
  var isLetterInWord = false;

  for (var i=0; i<numBlanks; i++) {
    if(selectedWord[i] == letter) {
      isLetterInWord = true;
    }
  }

  if(isLetterInWord) {
    for (var i=0; i<numBlanks; i++) {
      if(selectedWord[i] == letter) {
        PushSplice[i] = letter;
      }
    }
  } 

  else {
    wrongLetters.push(letter);
    guessesLeft--
  }

  console.log(PushSplice);
} 

function roundComplete(){

  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("wordToGuess").innerHTML = PushSplice.join(" ");
  document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

  //Win
  if (lettersInWord.toString() == PushSplice.toString()){
    winCount++;
    document.getElementById("winCounter").innerHTML = winCount;
    startGame()
  }

  //Loss
  else if (guessesLeft == 0) {
    lossCount++
    document.getElementById("lossCounter").innerHTML = lossCount;
    startGame()
  }

}

// ********* Background Music Intiate *********
var audio = new Audio('assets/music/love.mp3');
audio.play();
audio.loop = true;

// ********* Game Starts *********
startGame()

// ********* User Key Entries *********
document.onkeyup = function(event) {
  // store user input to a variable and convert to lowercase
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase()
  // run the comparison function
  checkLetters(letterGuessed);
  // run the win/loss function
  roundComplete();
}



