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

  // Choose a word from the word bank at random
  selectedWord = wordBank[Math.floor(Math.random()*wordBank.length)]
  // Split the word into an array
  lettersInWord = selectedWord.split("");
  // calculate the length of the array
  numBlanks = lettersInWord.length;


  // Reset parameters each time a new round is started
  guessesLeft = 9;
  wrongLetters = [];
  PushSplice = [];

  // For loop that pushes blanks to the array
  for (var i=0; i<numBlanks; i++){
    PushSplice.push("_");
  }

  // update the html with game info
  document.getElementById("wordToGuess").innerHTML = PushSplice.join(" ");
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;

  // Tests
  console.log(selectedWord);
  console.log(lettersInWord);
  console.log(numBlanks);
  console.log(PushSplice);

}

// This function will hold the checks for user key input
function checkLetters(letter) {
  var isLetterInWord = false;


  // for loop to check if key entry is in game word
  for (var i=0; i<numBlanks; i++) {
    if(selectedWord[i] == letter) {
      isLetterInWord = true;
    }
  }

  // if letter is in word, run through the blanks and push the letter to the correct position
  if(isLetterInWord) {
    for (var i=0; i<numBlanks; i++) {
      if(selectedWord[i] == letter) {
        PushSplice[i] = letter;
      }
    }
  } 

  // if not, update the guess counter and push the letter to the wrong letters array
  else {
    wrongLetters.push(letter);
    guessesLeft--
  }

  console.log(PushSplice);
} 

// function that holds information on what to do when a round is completed
function roundComplete(){

  // update the html based on the round
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("wordToGuess").innerHTML = PushSplice.join(" ");
  document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

  // A win will trigger a victory audio snippet, update the counter, and restart the next round
  if (lettersInWord.toString() == PushSplice.toString()){
    var audio = new Audio('assets/music/airhorn.mp3');
    audio.play();
    audio.volume = 0.5;
    winCount++;
    document.getElementById("winCounter").innerHTML = winCount;
    startGame()
  }

  // A loss triggers a sound effect, updates the loss counter, and restars the function startgame
  else if (guessesLeft == 0) {
    var audio = new Audio('assets/music/rewind.mp3');
    audio.play();
    audio.volume = 0.7;
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



