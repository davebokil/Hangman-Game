// Note to Craig:
// I realize that this is only partially completed,
// but after the many hours of reading and experimenting,
// I'm glad to say I've learned a great deal,
// and this work here still feels like a victory!
// There is plenty missing but you will find
// you can play a round in html.
// you won't see the array of underscores to start (one of many problems I encountered),
// but if you press a key to start the game it will display the array
// lots of comments throughout to help you understand my process.


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
// Win Counter
var wins = 0;

// ** Functions **

//***Background music starts on page load***
var audio = new Audio('assets/music/love.mp3');
audio.play();

//Call up variable to choose word randombly from the wordBank
gameWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
//Splits the chosen word into individual letters, holds in an array
lettersInWord = gameWord.split('');
//Get the number of characters in the game word
numBlanks = lettersInWord.length;
//Populate array with underscores based on total number of characters
for (var i = 0; i < numBlanks; i++) 
{
    blanks.push('_');
}

// Tests
console.log(gameWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanks);


// Function everytime a key is pressed
document.onkeyup = function(event) 
{
  //store key input in a variable
  var userGuess = event.key;
    // Correct Guesses
    for (var j = 0; j < numBlanks; j++) 
    {
      console.log(lettersInWord[j]);
      // Place the correct guess into the array using splice
      if (lettersInWord[j].charAt(0) === userGuess) 
      {
        blanks.splice(j, 1, userGuess)
        console.log(blanks)
        var x = document.getElementById("CurrentGame");
            x.innerHTML = blanks.join(" ");
      }
    }
    // Wrong Guesses
    for (i = 0; i < 1; i++) 
    {
        // Store the wrong guesses in another array
        if (lettersInWord.indexOf(userGuess) === -1) 
        {
          lettersGuessed.push(userGuess)
          console.log(lettersGuessed);
          document.getElementById("Guesses").innerHTML=lettersGuessed;
        }  
    }
    // Win Counter. Craig, please note I had trouble making this work.
    // I learned that you cannot compare two arrays
    // However two strings cant be compared. I just couldnt put it together. 
    for (var j = 0; j < numBlanks; j++) 
    {
      if (blanks[j].charAt(0) === gameWord) 
      {
        alert('You Win')
        console.log(j)
      }
    }
    // Loss Alert - If the user locks in 13 wrong guesses, an alert occurs.
    if (lettersGuessed.length === 13) 
    {
      alert("You Lose")

    }
}     