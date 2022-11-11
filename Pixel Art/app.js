const screen = document.querySelector(".screen")
const color = document.getElementsByClassName("color")
const chosenColor = document.querySelector("#chosenColor")
const block = document.getElementsByClassName("block")

// If we create the needed div elements in html file we don't need the following code block 
//-------------------------------------------------------
const blockArray = []
for(let i = 0; i < 100; i++){
  blockArray.push(document.createElement("div"))
  blockArray[i].classList.add("block")
  screen.appendChild(blockArray[i])
}
//-------------------------------------------------------
function chooseColor(event){
  if(chosenColor.classList.length > 0){
    chosenColor.classList.remove(chosenColor.classList[0])
  }
  chosenColor.classList.add(`${event.target.classList[0]}`)
}

function fill(event){
  if(event.target.classList.length > 1){
    event.target.classList.remove(event.target.classList[1])
  }
  event.target.classList.add(chosenColor.classList[0])
}

for(let i = 0; i < color.length; i++){
  color[i].addEventListener("click", chooseColor)
}

for(let i = 0; i < block.length; i++){
  block[i].addEventListener("click", fill)
}

