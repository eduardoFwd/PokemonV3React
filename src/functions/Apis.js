export async function getPokemon(id){
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    if (response.ok) {
      return {
        id: `${data.id}`,
        name: data.name,
        img: data.sprites.front_default,
        ability: data.abilities[0].ability.name,
        type: data.types[0].type.name,
        hp: [data.stats[0].base_stat, data.stats[0].stat.name],
        attack: [data.stats[1].base_stat, data.stats[1].stat.name],
      };
    } else {
      throw "Ha ocurrido un error al obtener el Pokémon.";
    }
  } catch (error) {
    throw "Ha ocurrido un error: " + error;
  }
};


export async function insertPokemonData(data) {
  try {
    return fetch(
      "https://64ee6475219b3e2873c32f49.mockapi.io/api/v1/pokemons",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      if (res.ok) {
        console.log(`Datos guardados en mockupApi:${JSON.stringify(data)}`);
      } else {
        throw `Error${data.name}.`;
      }
    });
  } catch (err) {
    throw "Ha ocurrido un error al insertar datos en la API: " + err;
  }
}
//
export const deletePokemon = async (idPokemon) => {
  try {
    const response = await fetch(
      `https://64ee6475219b3e2873c32f49.mockapi.io/api/v1/pokemons/${idPokemon}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log(`Pokémon ${idPokemon} eliminado correctamente.`);
    } else {
      console.error(`Error al eliminar el Pokémon con idPokemon ${idPokemon}.`);
    }
  } catch (error) {
    console.error("Ha ocurrido un error:", error);
  }
};
export async function getPokemonData(page,pokemonsLimit) {
  try {
    const response1 = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsLimit}&offset=${((page)*pokemonsLimit)}`
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
    // Espera a que todas las promesas se resuelvan
    const pokemonData = await Promise.all(pokemonPromises);
    return pokemonData.map((data) => {
      return {
        id: `${data.id}`,
        name: data.name,
        img: data.sprites.front_default,
        ability: data.abilities[0].ability.name,
        types: data.types.map((item) => item.type.name),
        hp: [data.stats[0].base_stat, data.stats[0].stat.name],
        attack: [data.stats[1].base_stat, data.stats[1].stat.name],
      };
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
export function getStatsPokemon() {
  return pokemonData.map((data) => {
    return {
      id: `${data.id}`,
      name: data.name,
      img: data.sprites.front_default,
      ability: data.abilities[0].ability.name,
      types: data.types[0].type.name,
      hp: [data.stats[0].base_stat, data.stats[0].stat.name],
      attack: [data.stats[1].base_stat, data.stats[1].stat.name],
    };
  });
}