// ---------- Declaring Variables ----------
const turnTitle = document.querySelector(".turnTitle")
const turnWrapper = document.querySelector(".turnWrapper")
const cell = document.getElementsByClassName("cell")
const cell1 = document.querySelector(".cell1")
const cell2 = document.querySelector(".cell2")
const cell3 = document.querySelector(".cell3")
const cell4 = document.querySelector(".cell4")
const cell5 = document.querySelector(".cell5")
const cell6 = document.querySelector(".cell6")
const cell7 = document.querySelector(".cell7")
const cell8 = document.querySelector(".cell8")
const cell9 = document.querySelector(".cell9")
const sideX = document.querySelector(".sideX")
const sideO = document.querySelector(".sideO")
const turn = document.querySelector(".turn")
const sides = document.querySelector(".sides")
const chooseSide = document.querySelector(".chooseSide")
const winner = document.querySelector(".winner")
const endGame = document.querySelector(".endGame")
const restart = document.querySelector(".restart")
const xmark = `<i class="fa-solid fa-xmark"></i>`
const circle = `<i class="fa-regular fa-circle"></i>`
const winningCombinations = [
  [cell1, cell2, cell3],
  [cell4, cell5, cell6],
  [cell7, cell8, cell9],
  [cell1, cell4, cell7],
  [cell2, cell5, cell8],
  [cell3, cell6, cell9],
  [cell1, cell5, cell9],
  [cell3, cell5, cell7]
]
let decideXmark = false
let decideCircle = false
let chosenSign = ""
// -----------------------------------------

// This function sets the initial value of chosenSign
function chooseXmark(){
  turnTitle.classList.remove("hide")
  turnWrapper.classList.remove("hide")
  chosenSign = xmark
  turn.innerHTML = chosenSign
  sideX.removeEventListener("click", chooseXmark)
  sideO.removeEventListener("click", chooseCircle)
  chooseSide.classList.add("hide")
  sides.classList.add("hide")
}

// This function sets the initial value of chosenSign
function chooseCircle(){
  turnTitle.classList.remove("hide")
  turnWrapper.classList.remove("hide")
  chosenSign = circle
  turn.innerHTML = chosenSign
  sideX.removeEventListener("click", chooseXmark)
  sideO.removeEventListener("click", chooseCircle)
  chooseSide.classList.add("hide")
  sides.classList.add("hide")
}

// This function changes the current sign
function signChange(){
  chosenSign = chosenSign === xmark ? circle : xmark
}

// Basically, this function checks whether the targeted cell has a mark (circle or xmark) and the variable named
// chosenSign has a value => if conditions are met, it marks the targeted cell with the value of chosenSign.
// Then checks if a side has won and if no one has won it simply changes the sign and changes the innerHTML of
// turn box
function signPut(e){
  if(!e.currentTarget.innerHTML.includes(`<i`) && chosenSign.includes(`<i`)){
    e.currentTarget.innerHTML = chosenSign
    winningCombinations.some((item) => {
      decideCircle = item[0].innerHTML == circle && item[1].innerHTML == circle && item[2].innerHTML == circle
      return decideCircle
    })
    winningCombinations.some((item) => {
      decideXmark = item[0].innerHTML == xmark && item[1].innerHTML == xmark && item[2].innerHTML == xmark
      return decideXmark
    })
    if(decideXmark){
      winner.innerHTML = "X won!"
      endGame.classList.remove("hide")
    } else if(decideCircle){
      winner.innerHTML = "O won!"
      endGame.classList.remove("hide")
    } else {
      signChange()
      turn.innerHTML = chosenSign
    }
  }
}

// Cleans up everything and restarts the game
function restartFunc(){
  decideXmark = false
  decideCircle = false
  chosenSign = ""
  for(let i = 0; i < cell.length; i++){
    cell[i].innerHTML = ""
  }
  turn.innerHTML = ""
  turnTitle.classList.add("hide")
  turnWrapper.classList.add("hide")
  chooseSide.classList.remove("hide")
  sides.classList.remove("hide")
  sideX.addEventListener("click", chooseXmark)
  sideO.addEventListener("click", chooseCircle)
  endGame.classList.add("hide")
}

// Adding event listeners to every cell
for(let i = 0; i < cell.length; i++){
  cell[i].addEventListener("click", signPut)
}
restart.addEventListener("click", restartFunc)

// Adding event listeners to buttons
sideX.addEventListener("click", chooseXmark)
sideO.addEventListener("click", chooseCircle)
