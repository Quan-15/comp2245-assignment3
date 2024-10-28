let currentPlayer ="x";

document.querySelectorAll("#board > div").forEach(square => {
    square.addEventListener("click",() => { 
        if (square.textContent === "") { // only add if square is empty
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Switch Player
            currentPlayer = currentPlayer === "x" ? "o" : "x";
        }
    });
});