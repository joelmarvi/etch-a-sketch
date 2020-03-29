const grid = document.getElementById('gridBox');
const dark = document.getElementById('dark');
const newGrid = document.getElementById('new-grid');
const clear = document.getElementById('clear');

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
    let userInput = 0;
    userInput = prompt('How many rows and colums would you like?');
    makeGrid(userInput);
}

function clearGrid(e) {
    let cells = document.querySelectorAll('.gridItem');
    cells.forEach(cell => cell.style.backgroundColor = 'var(--start-color)');
}

dark.addEventListener('click', darkColor);
newGrid.addEventListener('click', resizeGrid);
clear.addEventListener('click', clearGrid);

