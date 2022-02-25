const starWarsApi = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const planets = await fetch(URL).then((response) => response.json());
  return planets;
};

export default starWarsApi;
