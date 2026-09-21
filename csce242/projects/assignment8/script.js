const showExerciseOne = () => {
    document.getElementById("missing-section").classList.remove("hidden");
    document.getElementById("semester-section").classList.add("hidden");
};

const showExerciseTwo = () => {
    document.getElementById("missing-section").classList.add("hidden");
    document.getElementById("semester-section").classList.remove("hidden");

    calculateSemester();
};

const showMenu = () => {
    const nav = document.getElementById("nav-list");
    const arrow = document.getElementById("arrow");

    if (nav.style.display == "block") {
        nav.style.display = "none";
        arrow.innerHTML = "▼";
    } else {
        nav.style.display = "block";
        arrow.innerHTML = "▲";
    }
};

const calculatePoints = () => {
    const days = document.getElementById("days-missed").value;

    const pointsPerDay = 7 / 25;
    const pointsLost = days * pointsPerDay;

    document.getElementById("points").innerHTML =
        "You will lose " + pointsLost.toFixed(1) +
        "% for skipping " + days + " days.";

    if (days == 0) {
        document.getElementById("message").innerHTML =
            "Great job! You aren't missing any classes.";
    } else if (days <= 2) {
        document.getElementById("message").innerHTML =
            "Missing a couple classes isn't too bad.";
    } else if (days <= 5) {
        document.getElementById("message").innerHTML =
            "Be careful, you are starting to miss a lot of class.";
    } else {
        document.getElementById("message").innerHTML =
            "You are missing valuable learning opportunities.";
    }
};

const calculateSemester = () => {
    const today = new Date();
    const lastDay = new Date(2026, 11, 4);

    const difference = lastDay - today;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    document.getElementById("days-left").innerHTML =
        "You have " + days + " days left in the semester.";

    if (days > 60) {
        document.getElementById("semester-message").innerHTML =
            "Not time to start counting down yet.";
    } else if (days > 30) {
        document.getElementById("semester-message").innerHTML =
            "The end is getting closer!";
    } else if (days > 10) {
        document.getElementById("semester-message").innerHTML =
            "Almost there!";
    } else {
        document.getElementById("semester-message").innerHTML =
            "The semester is almost over!";
    }
};

document.getElementById("exercise-one").onclick = showExerciseOne;
document.getElementById("exercise-two").onclick = showExerciseTwo;
document.getElementById("arrow").onclick = showMenu;
document.getElementById("days-missed").onchange = calculatePoints;