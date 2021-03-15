function searchDex() {

  let apiData = {
    url: "https://pokeapi.co/api/v2/",
    type: "pokemon",
    id: document.getElementById("dexNumber").value
  }

  const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}` ;

  fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => makeHtml(pokemon) )

  const makeHtml = (data) => {
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
  console.log("hello")
}
