let timer;
let isRunning = false;
let time = 0; // Time in seconds

const timeDisplay = document.getElementById("time");
const startStopButton = document.getElementById("startStopButton");
const resetButton = document.getElementById("resetButton");
const lapList = document.getElementById("lapList");

// Start or stop the stopwatch
startStopButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer); // Stop the timer
        startStopButton.textContent = "Start"; // Change button text
    } else {
        timer = setInterval(updateTime, 1000); // Start the timer
        startStopButton.textContent = "Stop"; // Change button text
    }
    isRunning = !isRunning;
});

// Reset the stopwatch
resetButton.addEventListener("click", () => {
    clearInterval(timer); // Stop the timer
    isRunning = false;
    time = 0;
    lapCount = 1;
    timeDisplay.textContent = "00:00:00"; // Reset the time display
    lapList.innerHTML = ""; // Clear lap list
    startStopButton.textContent = "Start"; // Reset button text
});

// Function to update time and display
function updateTime() {
    time++;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    timeDisplay.textContent = `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
}

// Function to pad single digit numbers with a leading zero
function padTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}


