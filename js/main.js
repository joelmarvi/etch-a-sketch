const grid = document.getElementById('gridBox');
const dark = document.getElementById('dark');

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
        cell.style.backgroundColor = 'black';
    }));
}

makeGrid(64);

dark.addEventListener('click', darkColor);

