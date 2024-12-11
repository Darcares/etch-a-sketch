`use strict`;

drawGrid();
sketch();

/* Beginning of functions' declaration section */

function drawGrid() {
    const container = document.querySelector(`#container`);
    const size = 100;
    
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