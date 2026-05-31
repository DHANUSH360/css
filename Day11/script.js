const image = document.getElementById("image");

let originalWidth = 400;
let currentWidth = originalWidth;

function zoomIn(){

    currentWidth += 50;

    image.style.width = currentWidth + "px";
}

function zoomOut(){

    if(currentWidth > 100){

        currentWidth -= 50;

        image.style.width = currentWidth + "px";
    }
}

function resetZoom(){

    currentWidth = originalWidth;

    image.style.width = originalWidth + "px";
}