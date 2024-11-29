const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const hp = document.getElementById('hp');
const atk = document.getElementById('attack');
const def = document.getElementById('defense');
const spatk = document.getElementById('special-attack');
const spdef = document.getElementById('special-defense');
const spd = document.getElementById('speed');
searchButton.addEventListener("click", ()=>{
if (searchInput.value.trim() == "Pikachu"){
    hp.innerText = 35;
}
}
)