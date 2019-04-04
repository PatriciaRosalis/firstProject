var $instructions = document.getElementById('instructions');
var $explode = document.getElementById('over')
var $animal = document.getElementById('animal');
var $rate = document.querySelector('#rating p');
var $countDown = document.getElementById('time');
var $valueHighScore = document.getElementById('high-score-1-value');

var playing = false;
var highScore = 0;
var score = 0;
var interval;
var timeLeft = 40;
var countDownInterval;

function onLoad() {
  $rate.innerText = score;
  $countDown.innerText = timeLeft;
  getHighScore();
  //  TODO: falta o high score
}

function onCloseInstructions() {
  $instructions.style.display = "none";
  // let name = prompt('What is your name?', 'User')
}

function hitFrog(pos) {
  if (!playing) { return; }
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
    resetCountDown();
    return;
  }
  $rate.innerText = score;
  if (highScore < score) {
    setHighScore();
  }
  randomImage();
  // playAudioFrog();
}

function setHighScore() {
  highScore = score;
  $valueHighScore.innerText = highScore;
  localStorage.setItem('highScoreValue', highScore.toString());
}

function getHighScore() {
  highScore = Number(localStorage.getItem('highScoreValue'));
  $valueHighScore.innerText = highScore;
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
  playing = false;
  $explode.style.display = "none";
  score = 0;
  $rate.innerText = score;
  clearInterval(interval);
  pauseAudioFrog();
  pauseAudio1();
  clearInterval(countDownInterval);
  resetCountDown();
  // renderHighScore();
}

// game over
function gameOver() {
  playing = false;
  $explode.style.display = "flex";
  playAudio1();
  pauseAudioFrog();
  clearInterval(countDownInterval);
}

// play
function play() {
  playing = true;
  interval = setInterval(function () {
    randomImage();
  }, frogVelocity());
  pauseAudio1();
  startCountDown();
}

// tiktak
function tiktak() {
  if (timeLeft == -1) {
    gameOver();
  } else {
    $countDown.innerText = timeLeft;
    timeLeft--;
  }
}

// start count
function startCountDown() {
  countDownInterval = setInterval(tiktak, 1000);
  // tiktak();
}

// reset Time
function resetCountDown() {
  timeLeft = 40;
  document.getElementById('time').innerText = timeLeft;
}

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

onLoad()