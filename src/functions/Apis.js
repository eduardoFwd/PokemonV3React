export async function getPokemon(id) {
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

export async function AddPokemon(id) {
  const pokemonMockApi = await getPokemonMockApi()
  const verify = pokemonMockApi.some(({ idPokemon }) => {
    return idPokemon === id;
  });
  console.log(verify);
  //existe
  if (verify !== false) {
    return true;
  } else {
    return fetch(
      "https://64f8b4b9824680fd217ff696.mockapi.io/api/pokemons/data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idPokemon: id}),
      }
    ).then((res) => {
      if (res.ok) {
        console.log(`Datos guardados en mockupApi`);
      } else {
        throw `Error`;
      }
    });
  }
}
export async function getPokemonMockApi() {
  const res = await fetch(
    "https://64f8b4b9824680fd217ff696.mockapi.io/api/pokemons/data/"
  );
  const data = await res.json();
  return data;
}
//
export async function deletePokemon (id){
  try {
    const pokemonMockApi = await getPokemonMockApi()
    const pokemon = pokemonMockApi.find((pokemon) => {
      console.log("idFind=>",pokemon.idPokemon,"type=>",typeof(pokemon.idPokemon));
      console.log("id=>",id,"type=>",typeof(id));
      return pokemon.idPokemon == id;
    });
    console.log(pokemon);
    if (pokemon === undefined) {
      return true;
    } else {
      const idPokemon=pokemon.id
      return fetch(
        `https://64f8b4b9824680fd217ff696.mockapi.io/api/pokemons/data/${idPokemon}`,
        {
          method: "DELETE",
        }
      ).then((response)=>{
        if (response.ok) {
          console.log(`Pokémon ${idPokemon} eliminado correctamente.`);
        } else {
          console.error(`Error al eliminar el Pokémon con idPokemon ${idPokemon}.`);
        }
      });
  
    }
  } catch (error) {
    console.error("Ha ocurrido un error:", error);
  }
};
export async function getPokemonData({currentPage=0, pokemonsLimit=1000 ,offSet=20}) {
  try {
    const response1 = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsLimit}&offset=${
        currentPage * offSet
      }`
    );

    if (!response1.ok) {
      throw new Error("Error getting data");
    }

    const data1 = await response1.json();

    //array de promesas
    const pokemonPromises = data1.results.map(async (pokemon) => {
      const response2 = await fetch(pokemon.url);

      if (!response2.ok) {
        throw new Error(`Error al obtener datos para ${pokemon.name}`);
      }
      const data2 = await response2.json();
      return data2;
    });
    //esperar
    const pokemonData = await Promise.all(pokemonPromises);
    return pokemonData.map((data) => {
      return {
        id: `${data.id}`,
        name: data.name,
        img: data.sprites.other["official-artwork"].front_default,
        types: data.types.map((item) => item.type.name),
      };
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
//
export default async function fetchEvolutionChain(id) {
  try {
    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    const speciesResponse = await fetch(speciesUrl);

    if (!speciesResponse.ok) {
      throw new Error(
        `Error al obtener datos: ${speciesResponse.status} - ${speciesResponse.statusText}`
      );
    }

    const speciesData = await speciesResponse.json();

    const evolutionUrl = speciesData.evolution_chain.url;
    const evolutionResponse = await fetch(evolutionUrl);

    if (!evolutionResponse.ok) {
      throw new Error(
        `Error al obtener datos de evolucion: ${evolutionResponse.status} - ${evolutionResponse.statusText}`
      );
    }

    const evolutionData = await evolutionResponse.json();
    const evolutions = [];

    let currentPokemon = evolutionData.chain.species.name;
    evolutions.push(currentPokemon);
    let nextEvolution = evolutionData.chain.evolves_to[0];

    while (nextEvolution !== undefined) {
      currentPokemon = nextEvolution.species.name;
      evolutions.push(currentPokemon);
      nextEvolution = nextEvolution.evolves_to[0];
    }
    return {
      evolutions: evolutions,
      flavorText: speciesData.flavor_text_entries[0].flavor_text,
    };
  } catch (error) {
    throw new Error(`Error al obtener los datos: ${error.message}`);
  }
}

