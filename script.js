const container = document.querySelector(`#container`);
const size = 16;

for(let rowNo = 1; rowNo <= size; rowNo++) {
    drawRow(rowNo);

    for(let columnNo = 1; columnNo <= size; columnNo++) {
        drawColumn(rowNo, columnNo);
    }

}

function drawRow(rowNo) {
    const row = document.createElement(`div`);
    row.classList.toggle(`row`);
    row.setAttribute(`id`, `row-${rowNo}`)  ;
    container.appendChild(row);
}

function drawColumn(rowNo, columnNo) {
    const firstRow = 1;
    const lastColumn = 16;
    const row = document.querySelector(`#row-${rowNo}`);
    const column = document.createElement(`div`);
    column.classList.toggle(`column`);
    if(rowNo === firstRow) column.classList.toggle(`border-top`);
    if(columnNo === lastColumn) column.classList.toggle(`border-right`);
    column.setAttribute(`id`, `row-${rowNo}, column-${columnNo}`);
    row.appendChild(column);
}