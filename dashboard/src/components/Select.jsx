import React from 'react';

/**
 * Select component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Select = ({ value, options, onChange, width = 250 }) =>
  <select
    value={value}
    onChange={event => onChange(event.target.value)}
    style={{
      fontSize: '1rem',
      border: 'none',
      borderBottom: '2px solid #ddd',
      outline: 'none',
      padding: '5px 0px',
    }}>
    {options.map(({ name, value }) => <option key={value} value={value}>{name}</option>)}
  </select>;

export default Select;
