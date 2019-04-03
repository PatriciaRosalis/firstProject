var $instructions = document.getElementById('instructions');
var $explode = document.getElementById('over')
var $animal = document.getElementById('animal');
var $rate = document.querySelector('#rating p');
var score = 0;
var interval;

function onCloseInstructions() {
  $instructions.style.display = "none";
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
    resetChr();
    return;
  }
  $rate.innerHTML = score;
  randomImage();
}

// 600 - 0
function Velocity() {
  let randomVelocity = Math.floor(Math.random() * 800) + 100;
  return randomVelocity;
}

function frogVelocity() {
  let frogFast = Math.floor(Math.random() * 800) + 1500;
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
}


// TRY AGAIN
function tryAgain() {
  $explode.style.display = "none";
  score = 0;
  $rate.innerHTML = score;
  resetChr();
  clearInterval(interval);
}

// game over
function gameOver() {
  $explode.style.display = "flex";
}

// play
function play() {
  interval = setInterval(function () {
    randomImage();
  }, frogVelocity());
  startChr();
}

// ----------------------------------------------------------------------------------------------------------------------------------
// falta fazer o score + possivel high score 
// ----------------------------------------------------------------------------------------------------------------------------------


// For the highscore
// 1 high score
// localStorage.getItem("highScore")
// localStorage.setItem("highScore", 42)
// multiple high scores
// JSON.parse(localStorage.getItem("highScores"))
// localStorage.setItem("highScores", JSON.stringify([42, 30, 10]))
