const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const timer = document.getElementById("timer");
let score = 0;
let timeRemaining = 5;
let intervalId;
function displayRandomNumber() {
    const number1 = randomNumber();
    const number2 = randomNumber();
    num1.innerText = number1;
    num2.innerText = number2;
    startTimer();
}

function randomNumber() {
    return Math.floor(Math.random() * 123) + 1; 
}

function startTimer() {
    clearInterval(intervalId); 
    timeRemaining = 5;
    timer.innerText = timeRemaining;
    intervalId = setInterval(() => {
        timeRemaining--;
        timer.innerText = timeRemaining;
        if (timeRemaining == 0) {
            clearInterval(intervalId);
            gameOver();
        }
    }, 1000);
}

function compareNumbers(operation) {
    const number1 = parseInt(num1.innerText);
    const number2 = parseInt(num2.innerText);
  
    if (
        (operation === "greater-than" && number1 > number2) ||
        (operation === "lesser-than" && number1 < number2) ||
        (operation === "equal-to" && number1 === number2)
    ) {
        score++;
        displayRandomNumber();
    } else {
        gameOver();
    }
}

function gameOver() {
    window.location.href = "./gameover.html";
    localStorage.setItem("score", score);
}

document.getElementById("greater-than").onclick = () => compareNumbers("greater-than");
document.getElementById("lesser-than").onclick = () => compareNumbers("lesser-than");
document.getElementById("equal-to").onclick = () => compareNumbers("equal-to");

displayRandomNumber();
