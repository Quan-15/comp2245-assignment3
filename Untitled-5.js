document.getElementById("newGame").addEventListener("click", () => {
    document.querySelectorAll("#board > div").forEach(square => {
        square.textContent = "";
        square.classList.remove("X", "O");
    });
    document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
    document.getElementById("status").classList.remove("you-won");
    currentPlayer = "X";
});
