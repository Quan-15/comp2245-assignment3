document.querySelectorAll("#board > div").forEach(square => {
    square.addEventListener("click", () => {
        if (square.textContent === "") { // Only proceed if empty
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (!checkWinner()) {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    });
});
