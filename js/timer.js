// Here set the minutes, seconds, and tenths-of-second when you want the chronometer to stop
// If all these values are set to 0, the chronometer not stop automatically
var stmints = 0;
var stseconds = 0;
var stzecsec = 0;

// function to be executed when the chronometer stops
// function toAutoStop() {
//   alert('Your life goes on');
// }

// the initial tenths-of-second, seconds, and minutes
var zecsec = 0;
var seconds = 0;
var mints = 0;


var startchron = 0;

function chronometer() {
  if (startchron == 1) {
    zecsec += 1;       // set tenths of a second

    // set seconds
    if (zecsec > 9) {
      zecsec = 0;
      seconds += 1;
    }

    // set minutes
    if (seconds > 59) {
      seconds = 0;
      mints += 1;
    }

    // adds data in #showtm
    document.getElementById('showtm').innerHTML = mints + ' : ' + seconds + '<sub>' + zecsec + '</sub>';

    // if the chronometer reaches to the values for stop, calls whenChrStop(), else, auto-calls chronometer()
    if (zecsec == stzecsec && seconds == stseconds && mints == stmints) toAutoStop();
    else setTimeout("chronometer()", 100);
  }
}

function startChr() {
  startchron = 1; 
  chronometer();
}      // starts the chronometer

function stopChr() {
  startchron = 0;
}                      // stops the chronometer

function resetChr() {
  zecsec = 0; seconds = 0; mints = 0; startchron = 0;
  document.getElementById('showtm').innerHTML = mints + ' : ' + seconds + '<sub>' + zecsec + '</sub>';
}

