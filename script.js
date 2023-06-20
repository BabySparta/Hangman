// Guess Handling

const guessField = document.querySelector(".guessField");

guessField.addEventListener("keyup", (event) => {
  if (event.code === "Enter" && guessField.value !== "") {
  }
});

// Generating Word To Guess

const generateWord = () => {
  let wordList = [];
  fetch("wordList.txt")
    .then((res) => res.text())
    .then((text) => {
      wordList = text.split("\n");
    })
    .catch((e) => console.error(e));
};

let word = generateWord();
