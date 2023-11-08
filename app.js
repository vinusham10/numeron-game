// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
let x = document.getElementById("play-button");
  x.onclick = () => {
    window.location.href = "game.html";
  };
  