// declaring variables
const dogImg = document.querySelector(".dogImg")
const dogButton = document.querySelector(".dogButton")

// gets the json object using fetch
function getDog(){
  fetch("https://random.dog/woof.json")
  .then((res) => res.json())
  .then((data) => {
    dogImg.innerHTML = `<img class = "dogPic" src=${data.url}>`
  })
  .catch(getDog)
}

// adding event listener to the button
dogButton.addEventListener("click", getDog)