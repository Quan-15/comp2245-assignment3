document.querySelectorAll("aboard > div").forEach(square => {
    square.addEventListener("mouseover",() => square.classList.add("hover"));
    square.addEventListener("mouseout", () => square.classList.remove("hover"));
});