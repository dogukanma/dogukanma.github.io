const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const resetButton = document.getElementById("reset")
let hours = 0
let minutes = 0
let seconds = 0

startButton.addEventListener("click", startFunc)
stopButton.addEventListener("click", stopFunc)
resetButton.addEventListener("click", resetFunc)

function startFunc(){
  startButton.classList.add("active")
  if(startButton.classList.contains("active")){
    firstInterval = setInterval(function() {
      seconds++;
      document.getElementById("seconds").innerHTML = `${seconds}`;
      if(seconds == 60){
        seconds = 0
        document.getElementById("seconds").innerHTML = 0
      };
      if(minutes == 60){
        minutes = 0
        document.getElementById("seconds").innerHTML = 0
      };
      if(hours == 60){
        hours = 0
        document.getElementById("seconds").innerHTML = 0
      };
    }, 1000);
    secondInterval = setInterval(() => {
      minutes++;
      document.getElementById("minutes").innerHTML = `${minutes}:`;
    }, 60000);
    thirdInterval = setInterval(() => {
      hours++;
      document.getElementById("hours").innerHTML = `${hours}:`;
    }, 3600000);
    startButton.setAttribute("disabled", true)
  }
}

function stopFunc(){
  startButton.classList.remove("active")
  clearInterval(firstInterval)
  clearInterval(secondInterval)
  clearInterval(thirdInterval)
  startButton.removeAttribute("disabled")
}

function resetFunc(){
  startButton.classList.remove("active")
  clearInterval(firstInterval)
  clearInterval(secondInterval)
  clearInterval(thirdInterval)
  startButton.removeAttribute("disabled")
  document.getElementById("hours").innerHTML = " 00 : "
  document.getElementById("minutes").innerHTML = " 00 : "
  document.getElementById("seconds").innerHTML = "00"
  hours = 0
  minutes = 0
  seconds = 0
}