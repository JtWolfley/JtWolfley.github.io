
const triviaButtons = document.querySelectorAll(".trivia-button");

triviaButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.parentElement;
        const answer = card.querySelector(".trivia-answer");

        answer.classList.toggle("show");

        if (answer.classList.contains("show")) {
            button.textContent = "HIDE ANSWER";
        } else {
            button.textContent = "REVEAL ANSWER";
        }

    });

});
