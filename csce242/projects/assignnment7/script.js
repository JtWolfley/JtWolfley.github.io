const showSpeech = () => {
    const bubble = document.getElementById("speech-bubble");
    bubble.classList.remove("hidden");
};

const showBeverage = () => {
    const beverage = document.getElementById("beverage").value;
    document.getElementById("beverage-output").innerHTML = beverage;
};

const addSticker = () => {
    const sticker = document.createElement("span");
    sticker.innerHTML = ":)";
    sticker.classList.add("sticker");

    document.getElementById("image-area").append(sticker);
};

document.getElementById("speech").onclick = showSpeech;
document.getElementById("beverage").onchange = showBeverage;
document.getElementById("cat-sticker").onclick = addSticker;