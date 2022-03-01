import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsApi from '../services/starWarsApi';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumeric, setFilterByNumeric] = useState([]);

  function HaldleName(event) {
    setName(event);
  }

  useEffect(() => {
    starWarsApi().then(({ results }) => setPlanets(results));
  }, []);

  const context = {
    planets,
    name,
    HaldleName,
    filterByNumeric,
    setFilterByNumeric,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default StarWarsProvider;
