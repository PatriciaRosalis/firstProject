var $instructions = document.getElementById('instructions');
var $animal = document.getElementById('animal');
var $littleFrog = new Frog();
$rate = document.getElementById('rating')

var $rate;
var frogNumber;
var gameTimer;
var output;
var $numHits = 0;


function onCloseIntrunctions() {
  $instructions.style.display = "none";
}

setInterval(() => {
  $littleFrog.randomImage()
}, 2000);


function hitFrog() {
  $numHits += 1;
  $rate = document.getElementById('rating').innerHTML = $numHits;
  $littleFrog.randomImage();
}

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

