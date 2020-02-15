import React from 'react';

/**
 * Input component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Input = ({ value, width = 250, onChange }) =>
  <input
    type="text"
    value={value}
    className="input"
    onChange={event => onChange(event.target.value)}
    style={{
      fontSize: '1rem',
      border: 'none',
      borderBottom: '2px solid #ddd',
      outline: 'none',
      padding: '5px 0px',
    }}/>;

export default Input;
