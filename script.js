const canvasDiv = document.querySelector('#canvas');
const canvasSizeBtns = document.querySelectorAll('.canvas-size-button');
const canvasSizeLabel = document.querySelector('#canvas-size-label');
const colourOptionDiv = document.querySelector('#colour-options');
const COLOUR_OPTIONS = ["black", "red", "orange", "yellow", "green", "blue", "white", "indigo", "violet", "pink", "purple", "brown"];






let canvasSize = 16;
const CANVAS_SIZE_VALUE = 8;
const CANVAS_SIZE_MAX = 64;
const CANVAS_SIZE_MIN = 8;


let selectedColour = COLOUR_OPTIONS[0];

canvasDiv.addEventListener('mousedown', function(e){ 
    if (e.target.className == 'pixel' && e.target.id != 'canvas'){
        clickPixel(e); 
        isMouseDown = true; 
    }
});
canvasDiv.addEventListener('mouseup', function(){ isMouseDown = false;})
canvasDiv.addEventListener('mouseover', function(e){ isMouseDown ? clickPixel(e) : false;})

colourOptionDiv.addEventListener('click', function(e){
    if (e.target.className == "colour-option"){
        e.target.style.border = '2px solid #DADADA'
        console.log(selectedColour)
        colourOptions[COLOUR_OPTIONS.indexOf(selectedColour)].style.border = ''
        selectedColour = e.target.style.backgroundColor
        
    }
})

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
loadColourOptions();
const colourOptions =  document.querySelectorAll('.colour-option');


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

function loadColourOptions() {
    numberOfColours = COLOUR_OPTIONS.length
    colourOptionDiv.style.gridTemplateColumns = `repeat(${numberOfColours / 2}, 1fr)`;
    for (i = 0; i < numberOfColours; i++) {
        let colourOption = document.createElement("div");
        colourOption.style.backgroundColor = COLOUR_OPTIONS[i]
        colourOption.className = "colour-option"
        colourOptionDiv.appendChild(colourOption);
    }
}


function clickPixel(e){
    e.target.style.backgroundColor = selectedColour;
}