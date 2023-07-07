window.onload = function () {
    // Variable declarations
    var seconds = 0o00; // Updated octal literal to use 0o prefix
    var tens = 0o00; // Updated octal literal to use 0o prefix
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;
  
    // Start button click event handler
    buttonStart.onclick = function() {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };
  
    // Stop button click event handler
    buttonStop.onclick = function() {
      clearInterval(Interval);
    };
  
    // Reset button click event handler
    buttonReset.onclick = function() {
      clearInterval(Interval);
      tens = 0o00; // Updated octal literal to use 0o prefix
      seconds = 0o00; // Updated octal literal to use 0o prefix
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
    };
  
    // Timer logic
    function startTimer () {
      tens++;
  
      if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
      }
  
      if (tens > 9) {
        appendTens.innerHTML = tens;
      } 
  
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0o00; // Updated octal literal to use 0o prefix
        appendTens.innerHTML = "0" + 0o00; // Updated octal literal to use 0o prefix
      }
  
      if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }
    }
  };
  