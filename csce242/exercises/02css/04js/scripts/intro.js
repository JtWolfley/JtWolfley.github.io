document.getElementById("btn-show-message").onclick = () => {
    document.getElementById("p-message").innerHTML = "Hello World!";
    e.target.innerHTML = "Done!";
}

docutment.getElementById("txt-numb-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    pMessage.innerHTML = numDays;
    const plantImage = document.getElementById("img-plant");
    plantImage.classList.remove("hidden");

    if (numbDays <= 2) {
        pMessage.innerHTML = `Damn let your plant rest dude! it's only been ${numDays} day(s) since you watered it!`;
        plantImage.src= "https://dummyimage.com/100x100/2fff00/000000&text=Happy+plant";
    }
    else if (numbDays <= 5) {
        pMessage.innerHTML = `Your plant is doing ight, it's been ${numDays} day(s) since you watered it!`;
        plantImage.src= "https://dummyimage.com/100x100/699911/000000&text=Thirsty+Plant";
    }
    else if (numbDays <= 7) {
        pMessage.innerHTML = `Dawg its bee ${numDays} day(s) since you watered it itd gonna die soon!`;
        plantImage.src= "https://dummyimage.com/100x100/476907/000000&text=brink+of+death+plant";
    }
    else (numbDays > 7) {
        pMessage.innerHTML = `Find a different hobby! it's been ${numDays} day(s) since you watered it, that thang is dead!`;
        plantImage.src="https://dummyimage.com/100x100/263803/ffffff&text=Dead+Plant";
    }
}

//counting
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;

btnStart.onclick = () => {
    countInterval = setInterval(()=>{
        pCount.innerHTML = ++count;
},500);
        btnStart.disabled = true;
        btnPause.disabled = false;
        btnStop.disabled = false;
}

btnPause.onclick = () => {
    clearInterval(countInterval);

}

btnStop.onclick = () => {
    count = 0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
}

setInterval(() => {
    const pDisplay = document.getElementById("date-display");
    const today = new Date();
    const seconds = today.getSeconds();
    pDisplay.innerHTML = seconds;

    },1000);