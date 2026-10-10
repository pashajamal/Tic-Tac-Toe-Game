
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");
const playerX = document.getElementById("playerX");
const playerO = document.getElementById("playerO");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Handle a cell click
function handleCellClick(event) {
    const cell = event.currentTarget;
    const index = Number(cell.dataset.index);

    // Ignore invalid moves
    if (!gameActive || board[index] !== "") {
        return;
    }

    // Place the current player's symbol
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
    cell.disabled = true;
    cell.setAttribute("aria-label", `Cell ${index + 1}: ${currentPlayer}`);

    // Check whether the current player has won
    const winningCombination = getWinningCombination();

    if (winningCombination) {
        gameActive = false;

        winningCombination.forEach((winningIndex) => {
            cells[winningIndex].classList.add("winner");
        });

        statusText.textContent = `Player ${currentPlayer === "X" ? "1" : "2"} (${currentPlayer}) wins!`;
        updateActivePlayer();
        return;
    }

    // Check for a draw
    if (board.every((cell) => cell !== "")) {
        gameActive = false;
        statusText.textContent = "It's a draw! 🤝";
        updateActivePlayer();
        return;
    }

    // Switch players
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    updateStatus();
}

// Return the winning combination, if any
function getWinningCombination() {
    return winningCombinations.find((combination) => {
        const [a, b, c] = combination;

        return (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        );
    });
}

// Update the status message
function updateStatus() {
    const playerNumber = currentPlayer === "X" ? "1" : "2";

    statusText.textContent = `Player ${playerNumber}'s turn (${currentPlayer})`;

    updateActivePlayer();
}

// Highlight the player whose turn it is
function updateActivePlayer() {
    playerX.classList.toggle(
        "active",
        gameActive && currentPlayer === "X"
    );

    playerO.classList.toggle(
        "active",
        gameActive && currentPlayer === "O"
    );
}

// Reset the entire game
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;

    cells.forEach((cell, index) => {
        cell.textContent = "";
        cell.disabled = false;
        cell.classList.remove("x", "o", "winner");
        cell.setAttribute("aria-label", `Cell ${index + 1}`);
    });

    updateStatus();
}

// Register event listeners
cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
});

restartBtn.addEventListener("click", restartGame);

// Initialize the game
updateStatus();
