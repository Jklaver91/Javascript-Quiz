var ul = document.getElementById('ul')
var nextButton = document.getElementById('next');
var quizbox = document.getElementById('question')
var optionOne = document.getElementById('option1')
var optionTwo = document.getElementById('option2')
var optionThree = document.getElementById('option3')
var optionFour = document.getElementById('option4')
var timeLeft = 75;
var timerId;

var app={
    questions:[
        {
            q:'Which is the letter a',
            options: ['a', 'b', 'c', 'd'],
            answer:0
        },
        {
            q:'Which is the letter b',
            options: ['a', 'b', 'c', 'd'],
            answer:1
        },
        {
            q:'Which is the letter c',
            options: ['a', 'b', 'c', 'd'],
            answer:2
        },
        {
            q:'Which is the letter d',
            options: ['a', 'b', 'c', 'd'],
            answer:3
        },
        {
            q:'Which is the letter e',
            options: ['a', 'b', 'c', 'e'],
            answer:3
        }            
    ],
    index:0,

    load:function(){
        if(this.index<=this.questions.length-1){
            question.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
            optionOne.innerHTML=this.questions[this.index].options[0];
            optionTwo.innerHTML=this.questions[this.index].options[1];
            optionThree.innerHTML=this.questions[this.index].options[2];
            optionFour.innerHTML=this.questions[this.index].options[3];
        }
        else {
            quizbox.innerHTML="Quiz Completed!";
            ul.classList.add("d-none");
            nextButton.classList.add("d-none");
            nextButton.classList.remove("d-flex");
            clearInterval(timerId);
            endQuiz();
        }
    },
    next: function(){
        this.index++;
        this.load();
    },
    check: function(ele){
        var id=ele.id.split("");
        console.log(id);
        var id=id.slice(-1);
        console.log(id);
        if(id[id.length-1]==this.questions[this.index].answer +1){
            this.score++;
            timeLeft = timeLeft + 10;
            ele.className="btn btn-success d-flex mx-auto mt-4";
            this.scoreCard();
        }
        else{
            ele.className="btn btn-danger d-flex mx-auto mt-4";
            timeLeft = timeLeft - 10;
        }
    },
    preventClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";
        }
    },
    allowClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''
        }
    },
    score:0,
    scoreCard:function(){
        console.log(this.score);
        if (this.score >= 1) {
            marks.innerHTML=this.score + "/" + this.questions.length;
            percentage.innerHTML= this.score / this.questions.length * 100;
            storeScore = localStorage.setItem('percentage', this.score / this.questions.length * 100);
        }
        else{
            storeScore = localStorage.setItem('percentage', "0");
        }
    }
}

window.load=app.load();

function button(ele){
app.check(ele);
app.preventClick();
}

function next(){
app.next();
app.allowClick();
}

// ass this class to make invis "d-none"


document.getElementById("start").addEventListener("click", function () {
    startTime();
    quizCards();
});


function startTime(){
    var timer = document.getElementById('coundownNumber');
    var timerId = setInterval(countdown, 1000);
    function countdown() {
        if (timeLeft == -1) {
            endQuiz(timerId);
        } else {
            timer.innerHTML = timeLeft;
            timeLeft--;
        }
    }
}

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

document.getElementById("reload").addEventListener("click", function () {
    window.location.reload();
});

document.getElementById("submit").addEventListener("click", function () {
    let initials = document.getElementById("initialInput").value;
    storeInitials = localStorage.setItem('initials', initials);

});

document.getElementById("viewScores").addEventListener("click", function () {
    if(document.getElementById("viewScores").value=="OFF"){
        document.getElementById("scoresDiv").classList.remove("d-none");
        document.getElementById("viewScores").value="ON";
        
        var retrievedScore = localStorage.getItem('percentage');

        console.log(JSON.parse(retrievedScore));
        storeScore.innerHTML= JSON.parse(retrievedScore);

        
        var retrievedInitial = localStorage.getItem('initials');

        console.log(retrievedInitial);
        storeInitial.innerHTML= retrievedInitial;
    }

    else {
        document.getElementById("scoresDiv").classList.add("d-none");
        document.getElementById("viewScores").value="OFF";
    }
});
