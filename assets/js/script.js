var StartQuizEl = document.querySelector('#StartQuiz');

StartQuizEl.addEventListener('click', function() {
    var StartTime = 75,
    display = document.querySelector('#time');
    startTimer(StartTime, display);
    StartQuiz.style.display = 'none';
  });

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}