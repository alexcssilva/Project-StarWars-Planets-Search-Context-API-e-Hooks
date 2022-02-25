import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsApi from '../services/starWarsApi';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const context = { planets };

  useEffect(() => {
    starWarsApi().then(({ results }) => setPlanets(results));
  }, []);

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
