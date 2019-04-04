var score;

// ----- Code for 1 High Score -----
// document.getElementById('plus').onclick = function () {
//   score++
//   document.getElementById('score').innerText = score
// }
// document.getElementById('stop').onclick = function () {
//   saveFirstHighScore(score)
//   renderHighScore()
//   score = 0
//   document.getElementById('score').innerText = score
// }

// function getFirstHighScoreValue() {
//   // localStorage.getItem always return a string
//   return Number(localStorage.getItem('highScoreValue'))
// }
// function getFirstHighScoreName() {
//   return localStorage.getItem('highScoreName')
// }
// function renderHighScore() {
//   document.getElementById("high-score-1-value").innerText = getFirstHighScoreValue()
//   document.getElementById("high-score-1-name").innerText = getFirstHighScoreName()
// }
// renderHighScore()

// // Take the score and update the first high score if necessary
// function saveFirstHighScore(newScore) {
//   let currentHighScore = getFirstHighScoreValue() 
//   // If we have a new high score
//   if (newScore > currentHighScore) {
//     let name = prompt('What is your name?', 'Anonymous')
//     localStorage.setItem('highScoreValue', score)
//     localStorage.setItem('highScoreName', name)
//   }
// }

// ----- Code for multiple high scorec -----
// document.getElementById('plus').onclick = function () {
//   score++
//   document.getElementById('score').innerText = score
// }
// document.getElementById('stop').onclick = function () {
//   saveScore(score)
//   renderHighScores()
//   score = 0
//   document.getElementById('score').innerText = score
// }

// // Return an array of high scores (ex: [{name: 'A', score: 42}])
// function getHighScores() {
//   let highScores = JSON.parse(localStorage.getItem('rating'))
//   // If we don't have any highScores (1st time), we can assume it's empty
//   if (!highScores) {
//     highScores = []
//   }
//   return highScores
// }

// function saveScore(newScore) {
//   let highScores = getHighScores()
//   highScores.push({
//     name: prompt('What is your name?', 'Anonymous'),
//     score: newScore
//   })
//   highScores.sort((a, b) => {
//     return b.score - a.score
//   })
//   localStorage.setItem('rating', JSON.stringify(highScores))
// }

// function renderHighScores() {
//   let highScores = getHighScores()
//   document.getElementById('high-score-1-score').innerText = highScores[0].score
//   document.getElementById('high-score-1-name').innerText = highScores[0].name
//   document.getElementById('high-score-2-score').innerText = highScores[1].score
//   document.getElementById('high-score-2-name').innerText = highScores[1].name
//   document.getElementById('high-score-3-score').innerText = highScores[2].score
//   document.getElementById('high-score-3-name').innerText = highScores[2].name
// }
// renderHighScores()