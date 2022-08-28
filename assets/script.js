let timerEl = document.getElementById("timer");

let startbtn = document.getElementById("startQuiz");

let timeLeft = 75;

let questions = ["What does JS stand for?"]

timerEl.textContent = "Time left: " + timeLeft;

function countdown() {

    timeLeft = 75;

    let timeInterval = setInterval(function () {
        
        timeLeft--;
        timerEl.textContent = "Time left: " + timeLeft;
        if(timeLeft===-1){
            clearInterval(timeInterval);
            timerEl.textContent = "";
            timeOut();
        }
    }, 1000);
}

function timeOut(){

}

startbtn.addEventListener("click", function(){
    countdown();
  })
