let apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: "389" //document.getElementById("number").innerHTML
}

const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}` ;

console.log(apiUrl);

fetch(apiUrl)
  .then( (data) => data.json())
  .then( (pokemon) => makeHtml(pokemon) )

const makeHtml = (data) => {
  console.log(data)
  const html = `
    <div class="name">${data.name}</div>
    <img src=${data.sprites.front_default}
    <div class="details">
      <span>Height: ${data.height}</span>
      <span>Weight: ${data.weight}</span>
    </div>
  `
  const pokemonDiv = document.querySelector(".pokemon");
  pokemonDiv.innerHTML = html;
}
