async function greet(e) {
  const pokemon = document.querySelector("#pokemon");
  const url = "https://pokeapi.co/api/v2/pokemon/" + e.target.value;
  let response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    pokemon.innerHTML = `
      <p><img src='${json.sprites.other["official-artwork"].front_default}' /></p>
      <p>height: ${json.height} </p>
      <p>weight: ${json.weight} </p>
      `;
  } else {
    pokemon.innerHTML = "Thats not a pokemon :3";
  }
}

document.querySelector("#name").addEventListener("change", greet);
