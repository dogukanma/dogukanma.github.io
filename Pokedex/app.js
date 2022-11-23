/* ---------- DECLARING VARIABLES ----------*/
const loading = document.querySelector(".loading")
const pokeTitle = document.querySelector(".poke-title")
const pokeForm = document.querySelector("#poke-form")
const pokeInput = document.querySelector("#poke-input")
const pokeSearchBtn = document.querySelector(".poke-search-btn")
const pokeContainer = document.querySelector(".poke-container")
const dot1 = document.querySelector(".dot1")
const dot2 = document.querySelector(".dot2")
const dot3 = document.querySelector(".dot3")
const dot4 = document.querySelector(".dot4")
const dot5 = document.querySelector(".dot5")
const pokeCount = 200
const pokemonArray = []

/* In this section I tried to make a loading animation for the first time */
interval1_1 = setInterval(() => {
  dot1.classList.add("hide")
}, 625)

interval1_2 = setInterval(() => {
  dot1.classList.remove("hide")
}, 1250);

interval2_1 = setInterval(() => {
  dot5.classList.add("hide")
}, 625)

interval2_2 = setInterval(() => {
  dot5.classList.remove("hide")
}, 1250);

// This asynchronous function fetches the data from the target and creates objects that contain each pokemon's data
// and pushes those objects into an array named pokemonArray
const storePokemon = async () => {
  for(let id = 1; id <= pokeCount; id++){
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const dataJson = await data.json()
    let pokemonData = {
      imgURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      name: dataJson.name[0].toUpperCase() + dataJson.name.slice(1),
      id: id,
      weight: dataJson.weight,
      type: dataJson.types[0].type.name[0].toUpperCase() + dataJson.types[0].type.name.slice(1)
    }
    pokemonArray.push(pokemonData)
  }
}

// This function creates pokemon cards for each object we created before and appends them to the container div
const createPage = async () => {
  await storePokemon()
  for(let i = 0; i < pokemonArray.length; i++){
    let pokemonCard = document.createElement("div")
    pokemonCard.className = "poke-card"
    pokemonCard.innerHTML = `
    <img class="poke-img" 
    src="${pokemonArray[i].imgURL}"
    alt="${pokemonArray[i].name}">
    <h1 class="poke-name">${pokemonArray[i].name}</h1>
    <p class="poke-id">
      #${pokemonArray[i].id < 10 ?
      `00${pokemonArray[i].id}` :
      pokemonArray[i].id < 100 ?
      `0${pokemonArray[i].id}` :
      pokemonArray[i].id}
    </p>
    <p class="poke-weight">Weight: ${pokemonArray[i].weight} kg</p>
    <p class="poke-type">Type: ${pokemonArray[i].type}</p>
    `
    pokeContainer.append(pokemonCard)
  }
// Ends the loading part
  loading.classList.add("hide")
  pokeTitle.classList.remove("hide")
  pokeForm.classList.remove("hide")
  pokeInput.classList.remove("hide")
  pokeSearchBtn.classList.remove("hide")
  pokeContainer.classList.remove("hide")
  clearInterval(interval1_1)
  clearInterval(interval1_2)
  clearInterval(interval2_1)
  clearInterval(interval2_2)
}
// Searches through indicated array and displays the requested ones
function searchPokemon(e){
  e.preventDefault()
  const input = pokeInput.value.toLowerCase()
  const pokeNamesh1 = document.querySelectorAll(".poke-name")
  pokeNamesStr = []
  for(let i = 0; i < pokeNamesh1.length; i++){
    pokeNamesStr.push(pokeNamesh1[i].innerHTML)
    pokeNamesStr[i] = pokeNamesStr[i].toLowerCase()
  }
  for(let i = 0; i < pokeNamesStr.length; i++){
    if(!pokeNamesStr[i].includes(input)){
      pokeNamesh1[i].parentElement.style.display = "none"
    }else {
      pokeNamesh1[i].parentElement.style.display = "block"
    }
  }
}
// Adding event listeners
pokeForm.addEventListener("input", searchPokemon)
pokeForm.addEventListener("submit", (e) => {
  e.preventDefault()
})

createPage()