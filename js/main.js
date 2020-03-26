const grid = document.querySelector('.grid-container');

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows); 
    grid.style.setProperty('--grid-cols', cols);
    for(i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.innerText = (i + 1);
        grid.appendChild(cell).className = 'grid-item';
    };
};

makeGrid(16, 16);