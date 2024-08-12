const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokeId = document.getElementById("pokemon-id");
const pokeName = document.getElementById("pokemon-name");
const imgContainer = document.getElementById("img-container");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const typesContainer = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

let pokeData = [];
const allTypes = [
  {name: "normal", color:"#A0A2A0"},
  {name: "fire", color:"#E72324"},
  {name: "water", color:"#2481F0"},
  {name: "electric", color:"#FAC100"},
  {name: "grass", color:"#3DA224"},
  {name: "ice", color:"#3DD9FF"},
  {name: "fighting", color:"#FF8100"},
  {name: "poison", color:"#923FCC"},
  {name: "ground", color:"#92501B"},
  {name: "flying", color:"#82BAF0"},
  {name: "psychic", color:"#EF3F7A"},
  {name: "bug", color:"#92A212"},
  {name: "rock", color:"#B0AB82"},
  {name: "ghost", color:"#713F71"},
  {name: "dragon", color:"#4F60E2"},
  {name: "dark", color:"#4F3F3D"},
  {name: "steel", color:"#60A2B9"},
  {name: "fairy", color:"#EF71F0"}
];
const replaceInput = (value) => {
  return value.toLowerCase().trimEnd().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-");
}

const updateView = () => {
  pokeId.textContent = `#${pokeData.id}`;
  pokeName.textContent = pokeData.name;
  imgContainer.innerHTML = `<img id="sprite" src="${pokeData.sprites.front_default}" alt="sprite ${pokeData.name}" />`;
  weight.textContent = `Weight: ${pokeData.weight/10} Kg`;
  height.textContent = `Height: ${pokeData.height/10} m`;
  typesContainer.innerHTML = ""; 
  pokeData.types.forEach(item => {
    const currentType = allTypes.find(el => el.name === item.type.name);
    typesContainer.innerHTML += `<div style="background: ${currentType.color}">${currentType.name.toUpperCase()}</div>`;
  });
  hp.textContent = pokeData.stats[0].base_stat;
  attack.textContent = pokeData.stats[1].base_stat;
  defense.textContent = pokeData.stats[2].base_stat;
  specialAttack.textContent = pokeData.stats[3].base_stat;
  specialDefense.textContent = pokeData.stats[4].base_stat;
  speed.textContent = pokeData.stats[5].base_stat;
}

const getPokemon = () => {
  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${replaceInput(input.value)}`)
  .then((res) => res.json())
  .then((data) => {
    pokeData = data;
    updateView();
  })
  .catch((err) => {
    alert("Pokémon not found");
    console.log("error: ", err);
  })
}
searchBtn.addEventListener("click", getPokemon);