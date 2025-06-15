// script.js
let currentPlayer = "X";
let gameOver = false;

function makeMove(cell) {
  if (cell.innerHTML === "" && !gameOver) {
    cell.innerHTML = currentPlayer;
    if (checkWinner()) {
      document.getElementById("result").innerText = currentPlayer + " wins!";
      gameOver = true;
    } else if (isDraw()) {
      document.getElementById("result").innerText = "It's a draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWinner() {
  const cells = document.getElementsByClassName("cell");
  const combos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  return combos.some(combo => {
    const [a, b, c] = combo;
    return (
      cells[a].innerHTML &&
      cells[a].innerHTML === cells[b].innerHTML &&
      cells[a].innerHTML === cells[c].innerHTML
    );
  });
}

function isDraw() {
  const cells = document.getElementsByClassName("cell");
  return Array.from(cells).every(cell => cell.innerHTML !== "");
}

function resetGame() {
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.innerHTML = "";
  }
  currentPlayer = "X";
  gameOver = false;
  document.getElementById("result").innerText = "";
}
