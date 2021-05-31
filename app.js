const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-eiffel-tower-before");
const after = document.querySelector(".img-container-eiffel-tower-after");
const container = document.querySelector(".container");

const imageSlider = (event) => {
    let xPos = event.layerX;
    before.style.width = xPos + "px";
    slider.style.left = xPos + "px";

    if(xPos < 30) {
        before.style.width = 0;
        slider.style.left = 0;
    }
}

container.addEventListener('mousemove', imageSlider);