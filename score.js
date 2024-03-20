// Iteration 5: Store the player score and display it on the game over screen
document.addEventListener("DOMContentLoaded", function() {
    const scoreBoard = document.getElementById("score-board");
    const playAgainButton = document.getElementById("play-again-button");
    const score = localStorage.getItem("score");
    scoreBoard.innerText = score;
    playAgainButton.addEventListener("click", function() {
        window.location.href = "./game.html";
    });
});
