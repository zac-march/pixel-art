let canvasDiv = document.querySelector('#canvas');


let dimensions = 10
let pixelSize = canvasDiv.offsetWidth / dimensions
canvasDiv.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`
for (i = 0; i < dimensions * dimensions; i++){
    let pixel = document.createElement("div")
    pixel.className = "pixel"
    //pixel.style.height = `${pixelSize}px`
    canvasDiv.appendChild(pixel)
}