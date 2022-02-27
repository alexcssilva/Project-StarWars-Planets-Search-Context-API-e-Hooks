import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const [filter, setFilter] = useState('');
  const { HaldleName } = useContext(StarWarsContext);

  useEffect(() => {
    HaldleName(filter);
  });

  return (
    <div className="header">
      <div>
        <h3>Projeto Star Wars - Trybe</h3>
      </div>
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          value={ filter }
          id="name-filter"
          type="text"
          onChange={ (event) => setFilter(event.target.value) }
        />
      </label>
    </div>

  );
}

export default Header;
