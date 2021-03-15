//Dit is het inputveld uit de html
let dexNumber = document.getElementById("dexNumber");


//De functie waarmee je verschillende pokemon mee kan opzoeken
function searchDex() {
  //Checkt of er iets is ingevuld, als er een nummer hoger is dan het aantal pokemon of als er tekst wordt gebruikt in plaats van een nummer. Anders voert hij gewoon de code uit.
  if (dexNumber.value.length == 0) {
    alert("Vul een nummer in voordat je op de knop klikt");
  }
  else if (dexNumber.value >= 899) {
    alert("Deze pokemon bestaat helaas niet")
  }
  else if (isNaN(parseInt(dexNumber.value))) {
    alert("Voer een nummer in en geen letters of symbolen");
  }
  //Hierin worden een aantal stukken data opgehaald en met html in de pagina gezet
  else {
    let apiData = {
      url: "https://pokeapi.co/api/v2/",
      type: "pokemon",
      id: dexNumber.value
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
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
        </div>
      `
      const pokemonDiv = document.querySelector(".pokemon");
      pokemonDiv.innerHTML = html;
    }
  }
}
