var timeLeft = 40;
var elem = document.getElementById('time');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}

function startTime() {
  timeLeft= 40;
  countdown();
}

function resetTime() {
  timeLeft= 40; seconds=40;
  document.getElementById('time').innerHTML = seconds;
}

