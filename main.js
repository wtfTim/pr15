const colorBox = document.getElementById('color-box');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

let intervalId = null;

startButton.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    colorBox.style.backgroundColor = randomColor;
  }, 500);
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
});
