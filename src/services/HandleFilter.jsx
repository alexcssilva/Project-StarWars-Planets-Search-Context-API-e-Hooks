export default function HandleFIlter(data, name, filterByNumeric) {
  if (filterByNumeric.length !== 0) {
    return data.filter((planet) => (
      filterByNumeric.every((filter) => {
        const planetValue = Number(planet[filter.column]);
        const filterValue = Number(filter.value);
        if (filter.operator === 'maior que') {
          // console.log(planetValue, filter.operator, filter.value, planetValue > filterValue);
          return planetValue > filterValue;
        }
        if (filter.operator === 'menor que') {
          return planetValue < filterValue;
        }
        return planetValue === filterValue;
      })
    ));
  }
  if (name !== '') {
    return data.filter((planets) => planets.name.includes(name));
  }
  return data;
}

// Auxiliado por Jonatas Lima - Turma 17
// Requisitos 3, 4 e 5
