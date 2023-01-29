let canvasDiv = document.querySelector('#canvas');
let isMouseDown = false


let dimensions = 50
let pixelSize = canvasDiv.offsetWidth / dimensions
canvasDiv.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`
for (i = 0; i < dimensions * dimensions; i++){
    let pixel = document.createElement("div")
    pixel.className = "pixel"
    //pixel.addEventListener('mousedown', function(e){ clickPixel(e) });
    canvasDiv.appendChild(pixel)
}
canvasDiv.addEventListener('mousedown', function(e){ console.log(e); isMouseDown = true; });
canvasDiv.addEventListener('mouseup', function(){ isMouseDown = false;})
canvasDiv.addEventListener('mouseover', function(e){ 
    if (isMouseDown){
        clickPixel(e)
    }

})


function clickPixel(e){
    if (e.target.id != 'canvas'){
        e.target.style.backgroundColor = "red"
    }

    
}