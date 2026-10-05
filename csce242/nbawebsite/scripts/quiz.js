const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {

    const buttons = question.querySelectorAll(".answers button");

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            buttons.forEach(function(otherButton) {
                otherButton.classList.remove("selected");
            });

            button.classList.add("selected");

        });
    });
});

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {

    let answeredQuestions = 0;

    questions.forEach(function(question) {

        if (question.querySelector(".selected")) {
            answeredQuestions++;
        }

    });

    if (answeredQuestions < 5) {
        alert("Please answer all five questions!");
    } else {
        alert("Quiz complete!");
    }

});