`use strict`;

let isRgbActive = false;

drawGrid();
sketch();

const resizeButton = document.querySelector(`#resize-button`);
resizeButton.addEventListener(`click`, resizeGrid);

const resetButton = document.querySelector(`#reset-button`);
resetButton.addEventListener(`click`, resetGrid);

const rgbButton = document.querySelector(`#rgb-button`);
rgbButton.addEventListener(`click`, toggleRGB);

/* Beginning of functions' declaration section */

function drawGrid(size = 16) {
    
    for(let rowNo = 1; rowNo <= size; rowNo++) {
        drawRow(rowNo);
    
        for(let columnNo = 1; columnNo <= size; columnNo++) {
            drawColumn(rowNo, columnNo, size);
        }
    
    }
    
}

function drawRow(rowNo) {
    const gridContainer = document.querySelector(`#grid-container`);
    const row = document.createElement(`div`);
    row.classList.toggle(`row`);
    row.setAttribute(`id`, `row-${rowNo}`);
    gridContainer.appendChild(row);
}

function drawColumn(rowNo, columnNo, size) {
    const firstRow = 1;
    const lastColumn = size;
    const row = document.querySelector(`#row-${rowNo}`);
    const column = document.createElement(`div`);
    column.classList.toggle(`column`);
    if(rowNo === firstRow) column.classList.toggle(`border-top`);
    if(columnNo === lastColumn) column.classList.toggle(`border-right`);
    column.setAttribute(`id`, `row-${rowNo}, column-${columnNo}`);
    row.appendChild(column);
}

function eraseGrid() {
    const gridContainer = document.querySelector(`#grid-container`);
    const rows = document.querySelectorAll(`.row`);
    rows.forEach((row) => {
        gridContainer.removeChild(row);
    });
}

function sketch() {
    const gridElements = document.querySelectorAll(`.column`);
    gridElements.forEach((gridElement) => {

        gridElement.addEventListener(`mouseenter`, (mouseEnter) => {

           if(isRgbActive) {
                const red = generateRandomNumber();
                const green = generateRandomNumber();
                const blue = generateRandomNumber();
                const rgb = `rgb(${red}, ${green}, ${blue})`;
                mouseEnter.target.style.backgroundColor = rgb;
            }

            else {
                const ORANGE_RED = `#FF4500`;
                mouseEnter.target.style.backgroundColor = ORANGE_RED;
            }

            mouseEnter.target.classList.add(`draw-background`);
        });
    });
}

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 256); //Returns a random integer from 0 to 255
    return randomNumber;
}

function resizeGrid() {
    let size = prompt(`Please type the size wished.\nMax size allowed: 100.\nMin size allowed: 2`);
    
    if(size !== null) {
        size = +size;
        if(isNaN(size)) {
            alert(`Value not valid. Please try again.`);
        }
    
        else {
            if(size > 100) size = 100;
            if(size < 2) size = 2;
            eraseGrid();
            drawGrid(size);
            sketch();
        } 
    }
}

function resetGrid() {
    const FLORAL_WHITE = `#FFFAF0`;
    const columns = document.querySelectorAll(`.column`);
    columns.forEach((column) => {
    column.style.backgroundColor = FLORAL_WHITE;
    });
}

function toggleRGB() {
    if(rgbButton.textContent === `Activate RGB`) {
        rgbButton.textContent = `Deactivate RGB`;
        isRgbActive = true;
    }

    else if(rgbButton.textContent === `Deactivate RGB`) {
        rgbButton.textContent = `Activate RGB`;
        isRgbActive = false;
    }
}

/* End of functions' declaration section */