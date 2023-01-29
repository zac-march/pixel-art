const canvasDiv = document.querySelector('#canvas');
const canvasSizeBtns = document.querySelectorAll('.canvas-size-button');
const canvasSizeLabel = document.querySelector('#canvas-size-label');
let canvasSize = 16;
const CANVAS_SIZE_VALUE = 8;
const CANVAS_SIZE_MAX = 64;
const CANVAS_SIZE_MIN = 8;

canvasDiv.addEventListener('mousedown', function(e){ clickPixel(e); isMouseDown = true; });
canvasDiv.addEventListener('mouseup', function(){ isMouseDown = false;})
canvasDiv.addEventListener('mouseover', function(e){ isMouseDown ? clickPixel(e) : false;})


canvasSizeBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.textContent;
        if (btnText == 'Smaller' && canvasSize != CANVAS_SIZE_MIN) {
            canvasSize -= CANVAS_SIZE_VALUE
            loadCanvas(canvasSize)
        }
        else if (btnText == 'Larger' && canvasSize != CANVAS_SIZE_MAX) {
            canvasSize += CANVAS_SIZE_VALUE
            loadCanvas(canvasSize)
        }
    });
});


let isMouseDown = false

loadCanvas(canvasSize);

function loadCanvas(dimensions) {
    canvasSizeLabel.textContent = `${dimensions}x${dimensions}`
    canvasDiv.innerHTML = ''
    canvasDiv.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
    for (i = 0; i < dimensions * dimensions; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        canvasDiv.appendChild(pixel);
    }
}

function clickPixel(e){
    if (e.target.id != 'canvas'){
        e.target.style.backgroundColor = "red"
    }

    
}