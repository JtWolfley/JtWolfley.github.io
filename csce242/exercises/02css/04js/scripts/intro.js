document.getElementById("btn-show-message").onclick = () => {
    document.getElementById("p-message").innerHTML = "Hello World!";
    e.target.innerHTML = "Done!";
}

docutment.getElementById("txt-numb-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    pMessage.innerHTML = numDays;

    if (numbDays <= 2) {
        pMessage.innerHTML = `Damn let your plant rest dude! it's only been ${numDays} day(s) since you watered it!`;
    }
    else if (numbDays <= 5) {
        pMessage.innerHTML = `Your plant is doing ight, it's been ${numDays} day(s) since you watered it!`;
    }
    else if (numbDays <= 7) {
        pMessage.innerHTML = `Dawg its bee ${numDays} day(s) since you watered it itd gonna die soon!`;
    }
    else (numbDays > 7) {
        pMessage.innerHTML = `Find a different hobby! it's been ${numDays} day(s) since you watered it, that thang is dead!`;
    }
}