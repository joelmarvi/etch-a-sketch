const grid = document.getElementById('gridBox');
const dark = document.getElementById('dark');
const newGrid = document.getElementById('new-grid');
const clear = document.getElementById('clear');
const color = document.getElementById('color');
const userInput = prompt('How many rows and columns would you like?');

function makeGrid(userInput) {
    grid.style.setProperty('--gridDimension', userInput);
    for(let i = 0; i < Math.pow(userInput, 2); i++) {
        let cell = document.createElement('div');
        cell.classList.add('gridItem');
        grid.appendChild(cell);
    }
}

function darkColor(e) {
    let cells = document.querySelectorAll('.gridItem');
    cells.forEach(cell => cell.addEventListener('mouseover', function(e){
        cell.style.backgroundColor = 'var(--hover-color)';
    }));
}

function resizeGrid(e) {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    let userInput = 0;
    userInput = prompt('How many rows and colums would you like?');
    makeGrid(userInput);
}

function clearGrid(e) {
    let cells = document.querySelectorAll('.gridItem');
    cells.forEach(cell => cell.style.backgroundColor = 'var(--start-color)');
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColor(e) {
    let cells = document.querySelectorAll('.gridItem');
    cells.forEach(cell => cell.addEventListener('mouseover', function(e){
        cell.style.backgroundColor = getRandomColor();
    }));
}

makeGrid(userInput);
dark.addEventListener('click', darkColor);
newGrid.addEventListener('click', resizeGrid);
clear.addEventListener('click', clearGrid);
color.addEventListener('click', randomColor);

