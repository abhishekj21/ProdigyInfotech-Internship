let startTime = 0;
let elapsedTime = 0;
let interval;
let isRunning = false;

const display = document.querySelector(".display");
const lapTimes = document.getElementById("lapTimes");

function updateTime() {
  const time = Date.now() - startTime + elapsedTime;
  const seconds = Math.floor((time / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((time / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor(time / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("start").onclick = () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();
    interval = setInterval(updateTime, 1000);
  }
};

document.getElementById("pause").onclick = () => {
  if (isRunning) {
    isRunning = false;
    elapsedTime += Date.now() - startTime;
    clearInterval(interval);
  }
};

document.getElementById("reset").onclick = () => {
  isRunning = false;
  startTime = 0;
  elapsedTime = 0;
  clearInterval(interval);
  display.textContent = "00:00:00";
  lapTimes.innerHTML = "";
};

document.getElementById("lap").onclick = () => {
  if (isRunning) {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    lapTimes.appendChild(li);
  }
};
