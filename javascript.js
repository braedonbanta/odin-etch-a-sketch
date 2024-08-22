// Create divs
console.log("javascript loaded");
const MAX_WIDTH = 600;
const MAX_HEIGHT = 600;

function generateBoard(numRows) {
for (let i = 0; i < (numRows * numRows); i++) {
    let container = document.querySelector(".container");
    let square = document.createElement("div");
    square.style.width = (MAX_WIDTH / numRows) + "px";
    square.style.height = (MAX_HEIGHT / numRows) + "px";
    square.classList.add("square");
    square.addEventListener("mouseenter", function () {
        square.style.backgroundColor = "Black";
        console.log('entered');
    })
    container.append(square);
}}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function() {
    let container = document.querySelector('.container');
    container.remove();
    container = document.createElement("div");
    container.classList.add("container");
    document.body.append(container);
    let newSize = prompt("Please enter the number of rows/columns for this new board");
    while (newSize > 100) {
        newSize = prompt("Please enter a number less than 100 to reset the board size to.");
    }
    generateBoard(Number(newSize));
})


generateBoard(4);