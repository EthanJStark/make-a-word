// A function to get the set of possible letters
function getLetters() {
  // Select the element with the id 'letters'
  var lettersContainer = document.querySelector('#letters');

  // Get the text content of the element
  var letters = lettersContainer.innerText;

  // Return the letters
  return letters;
}

function updateLetters() {
  document.getElementById("letters").innerHTML = randomLetters();
}

function randomLetters() {
  var vowels = 'aeiou'.split('')
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  var newLettersArray = []
  var letter

  for (i = 0; i < 2; ++i) {
    var letter = vowels[Math.floor(Math.random()*vowels.length)]
    newLettersArray.push(letter)
  }

  for (i = 0; i < 5; ++i) {
    var letter = alphabet[Math.floor(Math.random()*alphabet.length)]
    newLettersArray.push(letter)
  }

  newLetters = shuffleArray(newLettersArray).join("").toUpperCase()

  return newLetters

}

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function shuffle(string) {
  string = string.toUpperCase()
  array = string.split('')

  array = shuffleArray(array)
  return array.join("")

}

function shuffleLetters() {
  document.getElementById("letters").innerHTML = shuffle(getLetters())
}

// A function to get the user's guess
function getGuess() {
  // Select the input element where the user enters their guess
  var wordGuess = document.querySelector('input#word-guess');

  // Get the text content of the element
  var guess = wordGuess.value;

  // Return the guess
  return guess;
}

// A function to display a message on the screen
function showMessage(messageText) {
  // Select the element to display a message
  var messageElem = document.querySelector('#game-message');

  // Set the text value of the element to the provided text
  messageElem.innerText = messageText;
}


// A function to check whether the guessed word is correct or not
function checkGuess() {
  // Collect the text from the letters and the guess
  var letters = getLetters();
  var guess = getGuess();

  // Convert both to uppercase so we can compare equals
  guess = guess.toUpperCase();
  letters = letters.toUpperCase();

  // Determine if all the characters in the guess are in the letters
  for (var i = 0; i < guess.length; i++) {
    var currentChar = guess[i];

    // If the current character can't be found in letters, the guess is incorrect
    if (letters.indexOf(currentChar) === -1) {
      // Show a message saying guess is incorrect
      showMessage("Wrong guess, try again.");
      // Return false to exit the function
      return false;
    }
  }

  // If we've made it this far, then the guess must be correct!
  // Show a message saying guess is correct
  showMessage("Good guess, that is correct!");
  // Return true to exit the function
  return true;
}
