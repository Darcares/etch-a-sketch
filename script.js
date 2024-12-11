const container = document.querySelector(`#container`);
const containerHeight = 600;
const containerWidth = 600;
const dimensions = 16;
for(let i = 0; i < dimensions; i++) {
    drawHorizontalContainer(i);

    for(let j = 0; j < dimensions; j++) {
        drawVerticalContainer(i, j);
    }

}

function drawHorizontalContainer(i) {
    const horizontalContainer = document.createElement(`div`);
    horizontalContainer.classList.toggle(`horizontal-container`);
    horizontalContainer.setAttribute(`id`, `horizontal-${i + 1}`)  ;
    container.appendChild(horizontalContainer);
}

function drawVerticalContainer(i, j) {
    const firstRow = 0;
    const lastColumn = 15;
    const horizontalContainer = document.querySelector(`#horizontal-${i + 1}`)
    const verticalContainer = document.createElement(`div`);
    verticalContainer.classList.toggle(`vertical-container`);
    if (i === firstRow) verticalContainer.classList.toggle(`border-top`);
    if (j === lastColumn) verticalContainer.classList.toggle(`border-right`);
    verticalContainer.setAttribute(`id`, `${i + 1},${j + 1}`)
    horizontalContainer.appendChild(verticalContainer);
}