// ** Variables **
// Words to be used in game, defined by variable wordChoices and arranged in an array
var wordChoices = ["reggae", "jamaica", "marley",
                    "rasta", "vibration", "love",
                    "beach", "dancehall", "guitar",
                ];
// Choose a word from the array at random and store in variable 'gameWord'  
var gameWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
//This variable will store the individual characters of the word in an array after using the split Method
var lettersInWord = [];
//This will be used to tally up total number of characters in the word and stores as a number
var numBlanks = 0;
//Holds Blanks letters in an array
var blanks = [];
//Stores all wrong guesses in an array
var lettersGuessed = [];
// Total number of guesses left
var guessesLeft = 10;
// Win Counter
var wins = 0;
// Loss Counter
var loss = 0;

//***Background music starts on page load***
var audio = new Audio('assets/music/love.mp3');
audio.play();

// ** Functions **
function startGame () 
{



    //Call up variable to choose word randombly from the wordBank
    gameWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    //Splits the chosen word into individual letters, holds in an array
    lettersInWord = gameWord.split('');
    //Get the number of characters in the game word
    numBlanks = lettersInWord.length;

      //Reset
    var guessesLeft = 10;
    var lettersGuessed = [];

    
    // Tests
    console.log(gameWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanks);

    //Populate array with underscores based on total number of characters
    for (var i = 0; i < numBlanks; i++) 
    {
        blanks.push('_');
    }
    // document.getElementById("CurrentGame").innerHTML = blanks.join(" ");
    document.getElementById("WinCounter").innerHTML = wins
    document.getElementById("LossCounter").innerHTML = loss
    document.getElementById("GuessCounter").innerHTML = guessesLeft
    document.getElementById("CurrentGame").innerHTML = blanks.join(" ")
}



function compare(letter) 
{
    // Correct Guesses
    for (var j = 0; j < numBlanks; j++) 
    {
      console.log(lettersInWord[j]);
      // Place the correct guess into the array using splice
      if (lettersInWord[j].charAt(0) === letter) 
      {
        blanks.splice(j, 1, letter)
        console.log(blanks)
        document.getElementById("CurrentGame").innerHTML = blanks.join(" ");
      }
    }

    // Wrong Guesses
    for (i = 0; i < 1; i++) 
    {
        // Store the wrong guesses in another array
        if (lettersInWord.indexOf(letter) === -1) 
        {
          lettersGuessed.push(letter);
          console.log(lettersGuessed);
          guessesLeft--;
          console.log(guessesLeft);
          document.getElementById("WrongGuesses").innerHTML = lettersGuessed;
          document.getElementById("GuessCounter").innerHTML = guessesLeft;
        }  
    }

    // Loss Counter. If number of wrong guesses totals 10, +1 loss and reset game
    if (lettersGuessed.length === 10) 
    {
      loss++;
      startGame()
    }
    // Win Counter. If array of correct guesses = original word, +1 wins and reset game
    if (blanks.toString() == lettersInWord.toString()) 
    {
      wins++;
      startGame()
    }
}

// ** Start the Game Function **
startGame();


// Function everytime a key is pressed
document.onkeyup = function(event) 
{
  //store key input in a variable
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  compare(userGuess)
}     