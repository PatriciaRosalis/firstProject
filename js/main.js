var $instructions = document.getElementById('instructions');
var $explode = document.getElementById('over')
var $animal = document.getElementById('animal');
var $rate = document.querySelector('#rating p');
var score = 0;
var interval;

function onCloseInstructions() {
  $instructions.style.display = "none";
  // let name = prompt('What is your name?', 'User')
}

function hitFrog(pos) {
  let dataFrog = document.querySelector("#pos-" + pos).getAttribute("data-frog")
  console.log(dataFrog)

  if (dataFrog == 1) {
    score += 10;
  }
  else if (dataFrog == 2) {
    score += 20;
  }
  else if (dataFrog == 0) {
    gameOver();
    resetTime();
    return;
  }
  $rate.innerHTML = score;
  randomImage();
  // playAudioFrog();
}

// 600 - 0
function Velocity() {
  let randomVelocity = Math.floor(Math.random() * 1500) + 800;
  return randomVelocity;
}

function frogVelocity() {
  let frogFast = Math.floor(Math.random() * 1500) + 800;
  return frogFast;
}


function randomImage() {
  var $theImage = document.getElementsByClassName('pond');
  var $placeIndex = Math.floor(Math.random() * $theImage.length);
  var $frogArray = ['./Images/bomb.png', './Images/little-frog-1.png', './Images/animal-frog-001-s.png']
  var $frogIndex = Math.floor(Math.random() * $frogArray.length);

  $theImage[$placeIndex].setAttribute("data-frog", Math.floor(Math.random() * 3))
  // $theImage[$placeIndex].style.backgroundImage = "url(" + $frogArray[$frogIndex] + ")"
  setTimeout(() => {
    // $theImage[$placeIndex].style.backgroundImage = "";
    $theImage[$placeIndex].removeAttribute("data-frog")
  }, Velocity());
  playAudioFrog()
}


// TRY AGAIN
function tryAgain() {
  $explode.style.display = "none";
  score = 0;
  $rate.innerHTML = score;
  resetTime();
  clearInterval(interval);
  pauseAudioFrog();
  pauseAudio1()
  // renderHighScore();
}

// game over
function gameOver() {
  $explode.style.display = "flex";
  playAudio1()
  pauseAudioFrog()
}

// play
function play() {
  interval = setInterval(function () {
    randomImage();
  }, frogVelocity());
  startTime();
  pauseAudio1()
}

function getFirstHighScoreValue() {
  // localStorage.getItem always return a string
  return Number(localStorage.getItem('highScoreValue'))
}

function getFirstHighScoreName() {
  return localStorage.getItem('highScoreName')
}

function renderHighScore() {
  document.getElementById("high-score-1-value").innerText = getFirstHighScoreValue()
  document.getElementById("high-score-1-name").innerText = getFirstHighScoreName()
}

renderHighScore()

// Take the score and update the first high score if necessary
function saveFirstHighScore(newScore) {
  let currentHighScore = getFirstHighScoreValue()
  // If we have a new high score
  if (newScore > currentHighScore) {
    localStorage.setItem('highScoreValue', score)
    localStorage.setItem('highScoreName', name)
  }
}

// For the highscore
// 1 high score
// localStorage.getItem("highScore")
// localStorage.setItem("highScore", 42)
// multiple high scores
// JSON.parse(localStorage.getItem("highScores"))
// localStorage.setItem("highScores", JSON.stringify([42, 30, 10]))

var audioFrog = document.getElementById("myAudioFrog");
function playAudioFrog() {
  audioFrog.play();
  // setTimeout(() => {

  // }, gameover());
}

function pauseAudioFrog() {
  audioFrog.pause();
}


var exploseAudio = document.getElementById("myAudio1");
function playAudio1() {
  exploseAudio.play();
}

function pauseAudio1() {
  exploseAudio.pause();
}