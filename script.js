`use strict`;

drawGrid();
sketch();

const button = document.querySelector(`button`);

button.addEventListener(`click`, () => {
    let size = prompt(`Please type the size wished.\nMax size allowed: 100.`);
    size = +size;
    if(size > 100) size = 100;
    
    if(isNaN(size)) {
        alert(`Value not valid. Please try again.`);
    }

    else {
        cleanGrid();
        drawGrid(size);
        sketch();
    }

    
});
/* Beginning of functions' declaration section */

function drawGrid(size = 16) {
    const container = document.querySelector(`#container`);
    
    for(let rowNo = 1; rowNo <= size; rowNo++) {
        drawRow(rowNo, container);
    
        for(let columnNo = 1; columnNo <= size; columnNo++) {
            drawColumn(rowNo, columnNo, size);
        }
    
    }
    
}

function drawRow(rowNo, container) {
    const row = document.createElement(`div`);
    row.classList.toggle(`row`);
    row.setAttribute(`id`, `row-${rowNo}`);
    container.appendChild(row);
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

function cleanGrid () {
    const container = document.querySelector(`#container`);
    const rows = document.querySelectorAll(`.row`);
    rows.forEach((row) => {
        container.removeChild(row);
    })
}

function sketch() {
    const gridElements = document.querySelectorAll(`.column`);
    gridElements.forEach(addHoverState);
}

function addHoverState(gridElement) {
    gridElement.addEventListener(`mouseenter`, (mouseEnter) => {
        mouseEnter.target.classList.add(`black-background`);
    });
}

/* End of functions' declaration section */