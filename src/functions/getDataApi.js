// export const getPokemon = async (tam = 1) => {
//     try {
//       const promises = [];
//       for (let i = 1; i <= tam; i++) {
//         const promise = fetch("https://pokeapi.co/api/v2/pokemon/" + i)
//           .then((response) => response.json())
//           .then((data) => ({
//             id:`${data.id}`,
//             name: data.name,
//             img: data.sprites.front_default,
//             ability: data.abilities[0].ability.name,
//             type: data.types[0].type.name,
//             hp: [data.stats[0].base_stat, data.stats[0].stat.name],
//             attack: [data.stats[1].base_stat, data.stats[1].stat.name],
//           }))
//           .catch((error) => {
//             throw "Ha ocurrido un error: " + error;
//           });
//         promises.push(promise);
//       }
//       return Promise.all(promises);
//     } catch (err) {
//       throw "Ha ocurrido un error: " + err;
//     }
//   };