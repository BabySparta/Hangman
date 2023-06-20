// Generating Word To Guess
let word5List = ["watch"];
let word6List = ["launch"];
let word7List = ["dynamic"];

const generateWord = () => {
  let listNum = Math.round(Math.random() * 2);
  if (listNum === 0) {
    let index = Math.floor(Math.random() * word5List.length);
    return word5List[index];
  }
  if (listNum === 1) {
    let index = Math.floor(Math.random() * word6List.length);
    return word6List[index];
  }
  if (listNum === 2) {
    let index = Math.floor(Math.random() * word7List.length);
    return word7List[index];
  }
};

let word = generateWord();

// Guess Handling

const guessField = document.querySelector(".guessField");
const wrongGuesses = document.querySelector(".wrongGuesses");
let guesses = new Array(word.length);
let livesRemaining = 6;

guessField.addEventListener("keyup", (event) => {
  if (event.code === "Enter" && guessField.value !== "") {
    let guess = guessField.value;
    if (checkLetter(guess)) {
        makeGuess(guess);
        guessField.value = "";
    } else {
        let wrongGuess = document.getElementById("" + (7 - livesRemaining));  
        wrongGuess.innerText = guess;
        guessField.value = "";
        livesRemaining--;
    }
    
  }
});

const checkLetter = (letter) => {
  if (word.indexOf(letter) >= 0) {
    return true;
  }
  return false;
};

const makeGuess = (letter) => {
    let i = word.indexOf(letter)
    guesses[i] = letter;
}
