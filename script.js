const canvasDiv = document.querySelector('#canvas');
const canvasSizeBtns = document.querySelectorAll('.canvas-size-button');
const canvasSizeLabel = document.querySelector('#canvas-size-label');
const colourOptionDiv = document.querySelector('#colour-options');
const rainbowBtn = document.querySelector("#rainbow-button")
const clearBtn = document.querySelector("#clear-button")

const COLOUR_OPTIONS = ["black", "red", "orange", "yellow", "green", "blue", "white", "indigo", "violet", "pink", "purple", "brown"];
const CANVAS_SIZE_VALUE = 8;
const CANVAS_SIZE_MAX = 64;
const CANVAS_SIZE_MIN = 8;
const CANVAS_SIZE_DEFAULT = 16;

let colourOptions 
let canvasSize = CANVAS_SIZE_DEFAULT;
let isMouseDown = false;
let isRainbowMode = false;
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
    if (e.target.className == "colour-option" && e.target.style.backgroundColor != selectedColour){
        if (isRainbowMode){toggleRainbowMode()}
        switchSelectedColor(e.target.style.backgroundColor)
    }
})

canvasSizeBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.textContent;

        if (btnText == '↓' && canvasSize != CANVAS_SIZE_MIN) {
            canvasSize -= CANVAS_SIZE_VALUE
            loadCanvas()
        }

        else if (btnText == '↑' && canvasSize != CANVAS_SIZE_MAX) {
            canvasSize += CANVAS_SIZE_VALUE
            loadCanvas()
        }
    });
});

rainbowBtn.addEventListener('click', toggleRainbowMode)
clearBtn.addEventListener('click',  loadCanvas)

function toggleRainbowMode(){
    isRainbowMode = !isRainbowMode
    const bgColor = isRainbowMode ? "#333" : "white"
    const color = isRainbowMode ? "white" : "#333"
    rainbowBtn.style.backgroundColor = bgColor
    rainbowBtn.style.color = color
}

function main(){
    loadCanvas();
    loadColourOptions();
}


function loadCanvas() {
    let dimensions = canvasSize;
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
    colourOptions =  document.querySelectorAll('.colour-option');
    colourOptions[COLOUR_OPTIONS.indexOf(selectedColour)].style.border = '2px solid #c8d3cd'
}


function clickPixel(e){
    if(isRainbowMode === true){
        colourIndex = Math.floor(Math.random() * COLOUR_OPTIONS.length)
        newColor = COLOUR_OPTIONS[colourIndex]
        switchSelectedColor(newColor);
    }
    e.target.style.backgroundColor = selectedColour;
}

main()
function switchSelectedColor(newColor) {
    colourOptions[COLOUR_OPTIONS.indexOf(selectedColour)].style.border = '';
    colourOptions[COLOUR_OPTIONS.indexOf(newColor)].style.border = '2px solid #c8d3cd';
    selectedColour = newColor
}

