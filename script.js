"use strict";

drawGrid();

function drawGrid() {
    const container = document.querySelector(".container");

    for(let index = 0; index < 16; index++) {
        const column = document.createElement("div");
        column.classList.toggle("column");
        container.appendChild(column);

          for(let indexTwo = 0; indexTwo < 16; indexTwo++) {
            const row = document.createElement("div");
            row.classList.toggle("row");
            column.appendChild(row);
        }
    }

}