let canvasDiv = document.querySelector('#canvas');

let dimensions = 8
for (i = 0; i < dimensions; i++){
    let row = document.createElement("div")
    row.className = "row"
    for (index = 0; index < dimensions; index++){
        let pixel = document.createElement("div")
        pixel.className = "pixel"
        row.appendChild(pixel)
        
    }
    canvasDiv.appendChild(row)

}