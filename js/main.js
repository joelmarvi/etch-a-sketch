const grid = document.getElementById('grid-box');
const dark = document.getElementById('dark');
const newGrid = document.getElementById('new-grid');
const clear = document.getElementById('clear');
const color = document.getElementById('color');
const userInput = prompt('How many rows and columns would you like?');

//Modifying the grid functions
function makeGrid(userInput) {
    grid.style.setProperty('--grid-dimension', userInput);
    for(let i = 0; i < Math.pow(userInput, 2); i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        grid.appendChild(cell);
    }
}

function resizeGrid(e) {
    //Eliminates all children from grid-box before creating a new grid
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    let userInput = 0;
    userInput = prompt('How many rows and colums would you like?');
    makeGrid(userInput);
}

function clearGrid(e) {
    let cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => cell.style.backgroundColor = 'var(--start-color)');
}

//Coloring the grid
function darkColor(e) {
    let cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => cell.addEventListener('mouseover', function(e){
        cell.style.backgroundColor = 'var(--hover-color)';
    }));
}

//Random color selected so it can be used by the function below
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColor(e) {
    let cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => cell.addEventListener('mouseover', function(e){
        cell.style.backgroundColor = getRandomColor();
    }));
}

//Sterting the grid
makeGrid(userInput);

//Event listeners
dark.addEventListener('click', darkColor);
newGrid.addEventListener('click', resizeGrid);
clear.addEventListener('click', clearGrid);
color.addEventListener('click', randomColor);

