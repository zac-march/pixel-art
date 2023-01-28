let canvasDiv = document.querySelector('#canvas');


let dimensions = 70
let pixelSize = canvasDiv.offsetWidth / dimensions

for (i = 0; i < dimensions; i++){
    let row = document.createElement("div")
    row.className = "row"
    for (index = 0; index < dimensions; index++){
        let pixel = document.createElement("div")
        pixel.className = "pixel"
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        row.appendChild(pixel)
        
    }
    canvasDiv.appendChild(row)

}