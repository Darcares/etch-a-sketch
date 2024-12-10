const container = document.querySelector(`#container`);
const containerHeight = 600;
const containerWidth = 600;
const dimensions = 16;
for(let i = 0; i < dimensions; i++) {
    drawHorizontalContainer(i);
/*  const gridElement = document.createElement(`div`);
    gridElement.classList.toggle(`gridElement`);
    gridElement.style.height = `${containerHeight / dimensions}px`;
    gridElement.style.width = `${containerWidth / dimensions}px`;
    gridElement.textContent = `${i + 1}`;
    container.appendChild(gridElement); */
}

function drawHorizontalContainer(i) {
    const horizontalContainer = document.createElement(`div`);
    horizontalContainer.classList.toggle(`horizontal-container`);
    horizontalContainer.textContent = `${i + 1}`;
    container.appendChild(horizontalContainer);
}

/* function drawVerticalContainer(i) {
    const verticalContainer = document.createElement(`div`);
    verticalContainer.classList.toggle(`vertical-container`);
    verticalContainer.textContent = `${i + 1}`;
    container.appendChild(verticalContainer);
} */