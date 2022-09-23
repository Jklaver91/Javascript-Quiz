var timeLeft = 75;
var timerId;
// ass this class to make invis "d-none"


document.getElementById("start").addEventListener("click", function () {
    var timer = document.getElementById('coundownNumber');
    var timerId = setInterval(countdown, 1000);
    showQuestion(question);
    function countdown() {
        if (timeLeft == -1) {
            endQuiz(timerId);
        } else {
            timer.innerHTML = timeLeft;
            timeLeft--;
        }
    }
});

function endQuiz() {
    clearInterval(timerId);
    resultCards();
}


function startCards() {
    document.getElementById("start-page").classList.remove("d-none");
    document.getElementById("quiz").classList.add("d-none");
    document.getElementById("result").classList.add("d-none");
}

function quizCards() {
    document.getElementById("start-page").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
    document.getElementById("result").classList.add("d-none");
}

function resultCards() {
    document.getElementById("start-page").classList.add("d-none");
    document.getElementById("quiz").classList.add("d-none");
    document.getElementById("result").classList.remove("d-none");
}

