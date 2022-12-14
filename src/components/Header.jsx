import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const [nameFilter, setNameFilter] = useState('');
  const [columFilter, setColumFilter] = useState('population');
  const [operatorFilter, setOperatorFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const {
    HaldleName, setFilterByNumeric, columns, setColumns,
  } = useContext(StarWarsContext);

  useEffect(() => {
    HaldleName(nameFilter);
  });

  const getFilter = () => {
    setFilterByNumeric((prev) => [
      ...prev,
      {
        column: columFilter,
        operator: operatorFilter,
        value: valueFilter,
      },
    ]);
    setColumns((prev) => prev.filter((column) => column !== columFilter));
  };

  return (
    <div className="header">
      <div>
        <h3>Projeto Star Wars - Trybe</h3>
      </div>
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          value={ nameFilter }
          id="name-filter"
          type="text"
          onChange={ (event) => setNameFilter(event.target.value) }
        />
      </label>
      <div>
        <label htmlFor="column-filter">
          Coluna
          <select
            data-testid="column-filter"
            id="comparison-filter"
            value={ columFilter }
            onChange={ (event) => setColumFilter(event.target.value) }
          >
            {columns.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Operador
          <select
            data-testid="comparison-filter"
            id="comparison-filter"
            value={ operatorFilter }
            onChange={ (event) => setOperatorFilter(event.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            data-testid="value-filter"
            type="number"
            name=""
            id="value-filter"
            value={ valueFilter }
            onChange={ (event) => setValueFilter(event.target.value) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="submit"
          onClick={ getFilter }
        >
          FILTRAR
        </button>
      </div>
    </div>

  );
}

export default Header;

// Auxiliado por Jonatas Lima - Turma 17
// Requisitos 3, 4 e 5
