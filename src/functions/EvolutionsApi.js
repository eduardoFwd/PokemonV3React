function fetchEvolutionChain(url) {
  //const url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;
    console.log("URL",url);
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((data) => {
      const dataEvolutions = [];
      dataEvolutions.length;
      //initial value
      let name = data.chain.species.name;
      let evolve = data.chain.evolves_to[0];
      dataEvolutions.push(name);
      let flag = true;
      console.log("default:", name);
      while (flag) {
        if (evolve !== undefined) {
          name = evolve.species.name;
          dataEvolutions.push(name);
          evolve = evolve.evolves_to[0];
        } else {
          flag = !flag;
        }
      }
      return dataEvolutions;
    })
    .catch((error) => {
      throw new Error(`Error al obtener los datos: ${error.message}`);
    });
}

async function getPokemon(id="bulbasaur") {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    if (response.ok) {
      return {
        id: data.id,
        name: data.name,
        img: data.sprites.other["official-artwork"].front_default,
        ability: data.abilities[0].ability.name,
        types: data.types.map((item) => item.type.name),
        stats: data.stats.map((stat) => ({ [stat.stat.name]: stat.base_stat })),
      };
    } else {
      throw "Ha ocurrido un error al obtener el Pokémon.";
    }
  } catch (error) {
    throw "Ha ocurrido un error: " + error;
  }
}

