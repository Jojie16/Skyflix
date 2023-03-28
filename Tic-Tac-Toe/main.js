let currentPlayer = "R";
let winner = null;
let reginaScore = 0;
let jojieScore = 0;
let darkMode = false;

const squares = document.querySelectorAll(".square");
const status = document.getElementById("status");
const reginaScoreDisplay = document.getElementById("regina-score");
const jojieScoreDisplay = document.getElementById("jojie-score");
const restartButton = document.querySelector("#restart button");
const darkModeToggle = document.querySelector(".dark-mode");

function toggleDarkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
  darkMode = !darkMode;
}

function restart() {
  currentPlayer = "R";
  winner = null;
  squares.forEach(square => square.innerHTML = "");
  status.innerHTML = `${currentPlayer}'s turn`;
  restartButton.style.display = "none";
}

function handleMove(square) {
  if (square.innerHTML !== "" || winner !== null) {
    return;
  }

  square.innerHTML = currentPlayer;

  if (checkWin()) {
    winner = currentPlayer;
    updateScoreBoard();
    status.innerHTML = `${winner} wins!`;
    restartButton.style.display = "block";
    return;
  }

  if (checkDraw()) {
    status.innerHTML = "It's a draw!";
    restartButton.style.display = "block";
    return;
  }

  currentPlayer = currentPlayer === "R" ? "J" : "R";
  status.innerHTML = `${currentPlayer}'s turn`;
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombos.some(combo => {
    return combo.every(index => {
      return squares[index].innerHTML === currentPlayer;
    });
  });
}

function checkDraw() {
  return [...squares].every(square => {
    return square.innerHTML !== "";
  });
}

function updateScoreBoard() {
  if (winner === "R") {
    reginaScore++;
    reginaScoreDisplay.innerHTML = `Regina: ${reginaScore}`;
  } else if (winner === "J") {
    jojieScore++;
    jojieScoreDisplay.innerHTML = `Jojie: ${jojieScore}`;
  }
}

function addEventListeners() {
  squares.forEach(square => {
    square.addEventListener("click", () => {
      handleMove(square);
    });
  });

  restartButton.addEventListener("click", () => {
    restart();
  });

  darkModeToggle.addEventListener("click", () => {
    toggleDarkMode();
  });
}

addEventListeners();
restart();
