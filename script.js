`use strict`;

let isRgbActive = false;
let isOpacityActive = false;

drawGrid();
sketch();

const resizeButton = document.querySelector(`#resize-button`);
resizeButton.addEventListener(`click`, resizeGrid);

const resetButton = document.querySelector(`#reset-button`);
resetButton.addEventListener(`click`, resetGrid);

const rgbButton = document.querySelector(`#rgb-button`);
rgbButton.addEventListener(`click`, toggleRGB);

const opacityButton = document.querySelector(`#opacity-button`);
opacityButton.addEventListener(`click`, toggleOpacity);

/* Beginning of functions' declaration section */

function drawGrid(size = 16) {
    
    for(let rowNo = 1; rowNo <= size; rowNo++) {
        drawRow(rowNo);
    
        for(let columnNo = 1; columnNo <= size; columnNo++) {
            drawColumn(rowNo, columnNo, size);
        }
    
    }
    
    printGridCurrentSize(size);
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
            
            colorGridElement(mouseEnter);
            obscureGridElement(mouseEnter);
 
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
    column.style.opacity = ``;
    if(column.className.includes(`draw`)) column.classList.remove(`draw`);
    if(column.className.includes(`opacity`)) column.classList.remove(`opacity`);
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

function toggleOpacity() {
    if(opacityButton.textContent === `Gradual Opacity`) {
        opacityButton.textContent = `Fixed Opacity`;
        isOpacityActive = true;
    }

    else if(opacityButton.textContent === `Fixed Opacity`) {
        opacityButton.textContent = `Gradual Opacity`;
        isOpacityActive = false;
        const gridElements = document.querySelectorAll(`.column`);
        gridElements.forEach((gridElement) => {
            if(gridElement.className.includes(`opacity`)) {
                gridElement.classList.remove(`opacity`);
            }
        });
    }
}

function colorGridElement(mouseEnter) {
    if(isRgbActive) {
        const red = generateRandomNumber();
        const green = generateRandomNumber();
        const blue = generateRandomNumber();
        const rgb = `rgb(${red} ${green} ${blue})`;
        mouseEnter.target.style.backgroundColor = rgb;
    }

    else {
        const ORANGE_RED = `#FF4500`;
        mouseEnter.target.style.backgroundColor = ORANGE_RED;
    }

    mouseEnter.target.classList.add(`draw`);
}

function obscureGridElement(mouseEnter) {
    const gridElement = mouseEnter.target;
    const className = mouseEnter.target.className;
    if(isOpacityActive && !className.includes(`opacity`)) {
        gridElement.style.opacity = `0.1`;
        gridElement.classList.add(`opacity`);
    }

    else if (isOpacityActive && className.includes(`opacity`)) {
        let opacity = +gridElement.style.opacity;
        opacity += 0.1;
        if(opacity > 1) opacity = 1;
        gridElement.style.opacity = `${opacity}`;
    }

    else if(!isOpacityActive && className.includes(`opacity`)) {
        gridElement.style.opacity = ``;
        gridElement.classList.remove(`opacity`);
    }

}

function printGridCurrentSize(size) {
    const currentSize = document.querySelector(`#current-size`);
    currentSize.textContent = `Current Size: ${size} x ${size}`;
}

/* End of functions' declaration section */