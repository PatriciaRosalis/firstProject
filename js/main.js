var $instructions = document.getElementById('instructions');
var $animal = document.getElementById('animal');
var $rate = document.querySelector('#rating p')

var frogNumber;
var gameTimer;
var output;
var $numHits = 0;


function onCloseInstructions() {
  $instructions.style.display = "none";
}

setInterval(() => {
  randomImage()
}, 2000);


function hitFrog(pos) {
  let dataFrog = document.querySelector("#pos-" + pos).getAttribute("data-frog")
  console.log(dataFrog)

  if (dataFrog >= 1) {
    $numHits += 10;
  }
  else if (dataFrog >= 2) {
    $numHits += 20;
  }
  else {
    $numHits = 0;
  }
  $rate.innerHTML = $numHits;
  randomImage();
}

function randomImage() {
  var $theImage = document.getElementsByClassName('pond');
  var $placeIndex = Math.floor(Math.random() * $theImage.length);
  var $frogArray = ['./Images/bomb.png', './Images/little-frog-1.png', './Images/animal-frog-001-s.png']
  var $frogIndex = Math.floor(Math.random() * $frogArray.length);

  $theImage[$placeIndex].setAttribute("data-frog", Math.floor(Math.random() * 3) + 1)
  // $theImage[$placeIndex].style.backgroundImage = "url(" + $frogArray[$frogIndex] + ")"
  setTimeout(() => {
    // $theImage[$placeIndex].style.backgroundImage = "";
    $theImage[$placeIndex].removeAttribute("data-frog")
  }, 1000);
}


// function gameOver() {

//   var $over = document.getElementById("over");
//   if ($over.style.display === "none") {
//     $over.style.display = "block";
//   } else {
//     $over.style.display = "none";
//   }
// }
// ----------------------------------------------------------------------------------------------------------------------------------
// falta fazer o score + possivel high score + reset + play + click frogs + string no spongebob + game over
// ----------------------------------------------------------------------------------------------------------------------------------


// SCORE - 
// this.score = Math.floor(Math.random() * 201) - 100



// RESET THE GAME ????
// function reset() {
//   document.getElementById("reset").reset();
//   console.log("reset")
// }



// For the highscore
// 1 high score
// localStorage.getItem("highScore")
// localStorage.setItem("highScore", 42)
// multiple high scores
// JSON.parse(localStorage.getItem("highScores"))
// localStorage.setItem("highScores", JSON.stringify([42, 30, 10]))
