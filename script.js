"use strict";

drawGrid();
paintElement();
resetGrid();

function drawGrid(gridSize = 16) {

    const container = document.querySelector(".container");

    for(let index = 0; index < gridSize; index++) {
        const column = document.createElement("div");
        column.classList.toggle("column");
        container.appendChild(column);

          for(let indexTwo = 0; indexTwo < gridSize; indexTwo++) {
            const row = document.createElement("div");
            row.classList.toggle("row");
            column.appendChild(row);
        }
    }
}

function paintElement() {

    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.addEventListener("mouseover", event => {
        row.classList.add("paint");
    }));
}

function resetGrid() {

    const body = document.querySelector("body");
    const button = document.querySelector("button");

    button.addEventListener("click", event => {
        const gridSize = prompt("Enter the grid of size.");

        const container = document.querySelector(".container");
        const newContainer = document.createElement("div");
        newContainer.classList.add("container");

        body.removeChild(container);
        body.append(newContainer);
        
        drawGrid(gridSize);
        paintElement();
    });
    
}