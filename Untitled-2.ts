document.addEventListener("DOMContentLoaded", () => {
    //Select all divs within the board and add 'square' class
    const squares = document.querySelectorAll("aboard > div");
    squares.forEach(square => {
        square.classList.add("square");
    }); 
});