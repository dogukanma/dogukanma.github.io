window.onload=function(){const addButton = document.querySelector(".addButton")}
window.onload=function(){const clearButton = document.querySelector(".clearButton")}
const checkButtons = document.getElementsByClassName("checkIconWrapper")
const removeButtons = document.getElementsByClassName("xmarkIconWrapper")
const taskSection = document.querySelector(".taskSection")
const toDoInput = document.querySelector("#toDoInput")
const allTasks = document.getElementsByClassName("eachTask")

taskSection.innerHTML = localStorage.getItem("taskSection")

function addButtonEventListeners(){
  for(let i = 0; i < checkButtons.length; i++){
    checkButtons[i].addEventListener("click", complete)
  }
  for(let i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener("click", remove)
  }
}

function handleAdding(){
  const eachTask = document.createElement("div")
  eachTask.classList.add("eachTask")
  eachTask.innerHTML = `
    <div class="checkIconWrapper">
      <i class="fa-solid fa-check"></i>
    </div>
    <div class="taskText">${toDoInput.value}</div>
    <div class="xmarkIconWrapper">
      <i class="fa-solid fa-xmark"></i>
    </div>
  `
  taskSection.append(eachTask)
  localStorage.setItem("taskSection", taskSection.innerHTML)
  addButtonEventListeners()
}

function addNewItem(){
  if(toDoInput.value.trim().length > 0){
    handleAdding()
  }
}

function clearInput(){
  toDoInput.value = ""
}

function complete(event){
  if(event.currentTarget.nextElementSibling.classList.contains("completedTask")){
    event.currentTarget.nextElementSibling.classList.remove("completedTask")
  } else{
    event.currentTarget.nextElementSibling.classList.add("completedTask")
  }
  localStorage.setItem("taskSection", taskSection.innerHTML)
}

function remove(event){
  event.currentTarget.parentElement.parentElement.removeChild(event.currentTarget.parentElement)
  localStorage.setItem("taskSection", taskSection.innerHTML)
  console.log("remove yapmıyor it");
}

toDoInput.addEventListener("keypress", function(e){
  if(e.key === 'Enter' && toDoInput.value.trim().length > 0){
    handleAdding()
  }
})
addButton.addEventListener("click", addNewItem)
clearButton.addEventListener("click", clearInput)
addButtonEventListeners()