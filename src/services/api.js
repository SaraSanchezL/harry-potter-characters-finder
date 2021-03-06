// Fichero src/services/api.js

const getApiData = (filterHouse) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character, index) => {
        return {
          id: index,
          name: character.name,
          image: character.image,
          species: character.species,
          house: character.house,
          status: character.alive,
          gender: character.gender,
          alternateNames: character.alternate_names,
          hogwartsStudent: character.hogwartsStudent
        };
      });
      return cleanData;
    });
};

export default getApiData;
