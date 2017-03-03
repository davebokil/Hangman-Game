// ** Variables **

// Words to be used in game, defined by variable wordChoices and arranged in an array
var wordChoices = ["reggae", "jamaica", "marley",
                    "rasta", "vibration", "love",
                    "beach", "dancehall", "guitar", "dj"
                ];

// Choose a word from the array at random and store in variable 'gameWord'  
var gameWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
//Holds letters in word
var lettersInWord = [];
//Holds number of blanks in word
var numBlanks = 0;
//Holds Blanks letters in an array
var blanks = [];
//Stores all guesses
var lettersGuessed = []; 



// ** Functions **


// function startGame will choose a word and display it as underscores
function startGame() {
    // var audio = new Audio('assets/music/');
    // audio.play();

    //Chooses word randombly from the wordBank
    gameWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    //Splits the choosen word into individual letters
    lettersInWord = gameWord.split('');
    //Get the number of blanks based on the word in play
    numBlanks = lettersInWord.length;
    //Populate blanks
    for (var i = 0; i < numBlanks; i++) {
        blanks.push('_');
    }
    // Test
    console.log(gameWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanks);
}

// function to compare the user letter input to the game word in play
function compareLetter(keyPressed) {

}


// Initiation 

// Calls the function to start the game
startGame();

// Takes user inputs 
document.onkeyup = function(event) 
{
    var userGuess = event.key;
    // Test
    console.log(userGuess);
        for (i=0;i<1;i++) 
        {
          if (lettersInWord.indexOf(userGuess) === -1) {
            lettersGuessed.push(userGuess)
            console.log(lettersGuessed);
            document.getElementById('Guesses').innerHTML = lettersGuessed; 
          }
          // If it is in the array...
          else {
            blanks.splice(0,1);
            blanks.push(userGuess);
            console.log(blanks);
          }
        }
}

