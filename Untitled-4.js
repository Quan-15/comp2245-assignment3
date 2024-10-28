function checkWinner() {
    const squares = document.querySelectorAll("#board > div");
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    for (const pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (squares[a].textContent && 
            squares[a].textContent === squares[b].textContent && 
            squares[a].textContent === squares[c].textContent) {
            document.getElementById("status").textContent = 
                `Congratulations! ${squares[a].textContent} is the Winner!`;
            document.getElementById("status").classList.add("you-won");
            return true;
        }
    }
    return false;
}

document.querySelectorAll("#board > div").forEach(square => {
    square.addEventListener("click", () => {
        if (!square.textContent) {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (!checkWinner()) {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    });
});
