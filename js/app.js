
// Variables
const startButton = document.querySelector('[data-action="start"]');
const stopButton  = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes     = document.querySelector('.minutes');
const seconds     = document.querySelector('.seconds');
let timerTime     = 00;
let isRunning     = false;
let interval;


// Functions
function startTimer() {
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(interval);
}


function resetTimer() {
    stopTimer();
    timerTime = 0;
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
}

function incrementTimer() {
    timerTime++;

    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;

    minutes.innerHTML = pad(numOfMinutes);
    seconds.innerText = pad(timerTime);
}

// Make sure timer start with 00
function pad(number) {
    return (number < 10) ? '0' + number : number;
}
//     if (number < 10) {
//         return '0' + number;
//     } else {
//         return number;
//     }
// }


// Event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);