const grid = document.getElementById('gridBox');

function makeGrid(userInput) {
    grid.style.setProperty('--gridDimension', userInput);
    for(let i = 0; i < Math.pow(userInput, 2); i++) {
        let cell = document.createElement('div');
        cell.classList.add('gridItem');
        grid.appendChild(cell);
    }
}

makeGrid(16);