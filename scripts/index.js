// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

let difficulty = "easy";

function addWordToDom() {

  let randomIndex = Math.floor(Math.random() * words.length);

  randomWord = words[randomIndex];

  word.innerHTML = randomWord;
}

function updateScore() {
  score = score + 1;
  scoreEl.innerHTML = score;
}

function updateTime() {

  time = time - 1;

  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    
    gameOver();
  }
  
}

function gameOver() {
  
  endgameEl.style.display = "flex";

  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;
}

addWordToDom();

text.addEventListener("input", e => {

  if (e.target.value === randomWord) {

    updateScore();

    addWordToDom();

    if (difficulty === "easy") {
      time = time + 5; 
    } else if (difficulty === "medium") {
      time = time + 3; 
    } else {
      time = time + 2; 
    }

    timeEl.innerHTML = time + "s";

    e.target.value = "";
    text.focus();
  }
});

let timeInterval = setInterval(updateTime, 1000);

settingsBtn.addEventListener("click", function() {
  settings.classList.toggle("hide");
});

settingsForm.addEventListener("change", function(e) {
  difficulty = e.target.value;

});