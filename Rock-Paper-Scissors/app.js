const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")

const items = [
  {
    name: "rock",
    beats: "scissors",
    beatenBy: "paper",
  },
  {
    name: "paper",
    beats: "rock",
    beatenBy: "scissors",
  },
  {
    name: "scissors",
    beats: "paper",
    beatenBy: "rock",
  }
]

rockButton.addEventListener("click", randomSelection)
paperButton.addEventListener("click", randomSelection)
scissorsButton.addEventListener("click", randomSelection)

let result = document.querySelector(".result")

let computerSelection = ""

function randomSelection() {
  let random = items[Math.floor(Math.random() * items.length)]
  document.querySelector(".computer-selection").innerText = 
  ` Your choice: ${this.id}
  Your opponent: ${random.name} `
  computerSelection = random.name

  console.log("this.id:", this.id, " ///  computerSelection:", computerSelection)

  if(this.id == items[0].name && computerSelection == items[0].beats) {
    console.log("you won")
    youWon()
    parseInt(document.querySelector("#your-score").innerHTML)
    document.querySelector("#your-score").innerHTML++
  }
  if(this.id == items[1].name && computerSelection == items[1].beats) {
    console.log("you won")
    youWon()
    parseInt(document.querySelector("#your-score").innerHTML)
    document.querySelector("#your-score").innerHTML++
  }
  if(this.id == items[2].name && computerSelection == items[2].beats) {
    console.log("you won")
    youWon()
    parseInt(document.querySelector("#your-score").innerHTML)
    document.querySelector("#your-score").innerHTML++
  }
  if(this.id == computerSelection) {
    console.log("draw")
    draw()
  }
  if(this.id == "rock" && computerSelection == items[0].beatenBy) {
    console.log("you lost")
    youLost()
    parseInt(document.querySelector("#computer-score").innerHTML)
    document.querySelector("#computer-score").innerHTML++
  }
  if(this.id == "paper" && computerSelection == items[1].beatenBy) {
    console.log("you lost")
    youLost()
    parseInt(document.querySelector("#computer-score").innerHTML)
    document.querySelector("#computer-score").innerHTML++
  }
  if(this.id == "scissors" && computerSelection == items[2].beatenBy) {
    console.log("you lost")
    youLost()
    parseInt(document.querySelector("#computer-score").innerHTML)
    document.querySelector("#computer-score").innerHTML++
  }
}

function youWon() {
  result.innerHTML = `<span style="color: green;">You Won</span>`
}

function youLost() {
  result.innerHTML = `<span style="color: red;">You Lost</span>`
}

function draw() {
  result.innerHTML = `<span style="color: yellow;">Draw</span>`
}

/*

This code is quite messy, I was trying to practice my js skills but I ended up spending hours on this simple and overcomplex + untidy
All these Vanilla JS projects are from the past.

The summary of this code is: I tried to make this game work by using 2 functions named "randomSelection" and "theGame". 
Basically, randomSelection function chooses a random object from the array named items and returns it as "computerSelection". 
theGame function decides who wins and displays the result by using if structures. The problem was I couldn't display the current 
value of let variable named "computerSelection". I tried many things and in the end, I merged these 2 functions into "randomSelection", 
then it worked. Even now this code is not good enough but this is what I could do.

*/