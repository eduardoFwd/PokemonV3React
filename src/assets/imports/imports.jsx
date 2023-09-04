import bug from "../icons/bug.svg";
import dark from "../icons/dark.svg";
import dragon from "../icons/dragon.svg";
import electric from "../icons/electric.svg"; 
import fairy from "../icons/fairy.svg";
import fire from "../icons/fire.svg";
import fighting from "../icons/fighting.svg";
import flying from "../icons/flying.svg"
import ghost from "../icons/ghost.svg";
import grass from "../icons/grass.svg";
import ground from "../icons/grass.svg";
import ice from "../icons/ice.svg";
import normal from "../icons/normal.svg";
import poison from "../icons/poison.svg";
import psychic from "../icons/psychic.svg";
import rock from "../icons/rock.svg";
import steel from "../icons/steel.svg";
import water from "../icons/ground.svg";

// export const types = {
//   bug: [bug, "background-color:#fd7d24"],
//   dark: [dark, "background-color: #707070;"],
//   dragon: [dragon, "background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);"],
//   electric: [electric, "background-color: #eed535;"],
//   fairy: [fairy, "background-color: #fdb9e9;"],
//   fighting: [fighting, "background-color: #d56723;"],
//   fire: [fire, "background-color: #fd7d24;"],
//   flying: [flying, "background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);"],
//   ghost: [ghost, "background-color: #7b62a3;"],
//   grass: [grass, "background-color: #9bcc50;"],
//   ground: [ground, "background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);"],
//   ice: [ice, "background-color: #51c4e7;"],
//   normal: [normal, "background-color: #a4acaf;"],
//   poison: [poison, "background-color: #b97fc9;"],
//   psychic: [psychic, "background-color: #f366b9;"],
//   rock: [rock, "background-color: #a38c21;"],
//   steel: [steel, "background-color: #9eb7b8;"],
//   water: [water, "background-color: #4592c4;"],
// };
export const types = {
  bug: [bug, 'bug'],
  dark: [dark, 'dark'],
  dragon: [dragon, 'dragon'],
  electric: [electric, 'electric'],
  fairy: [fairy, 'fairy'],
  fighting: [fighting, 'fighting'],
  fire: [fire, 'fire'],
  flying: [flying, 'flying'],
  ghost: [ghost, 'ghost'],
  grass: [grass, 'grass'],
  ground: [ground, 'ground'],
  ice: [ice, 'ice'],
  normal: [normal, 'normal'],
  poison: [poison, 'poison'],
  psychic: [psychic, 'psychic'],
  rock: [rock, 'rock'],
  steel: [steel, 'steel'],
  water: [water, 'water'],
};

  export const selectType = (type) => {
    if (types.hasOwnProperty(type)) {
      return types[type];
    }
  };
