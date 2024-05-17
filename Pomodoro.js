let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const customMinutesInput = document.getElementById('custom-minutes');
const setTimeButton = document.getElementById('set-time');

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                alert("Time's up!");
                isRunning = false;
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

function setCustomTime() {
    const customMinutes = parseInt(customMinutesInput.value);
    if (!isNaN(customMinutes) && customMinutes > 0) {
        minutes = customMinutes;
        seconds = 0;
        updateDisplay();
    }
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
setTimeButton.addEventListener('click', setCustomTime);

updateDisplay();