import React from 'react';

/**
 * Input component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Input = ({ value, width = 250, onChange, style }) =>
  <input
    type="text"
    value={value}
    className="input"
    onChange={event => onChange(event.target.value)}
    style={{
      fontSize: '1rem',
      border: 'none',
      flex: 2,
      borderBottom: '2px solid #ddd',
      backgroundColor: '#0000',
      outline: 'none',
      padding: '5px 0px',
      marginRight: 10,
      ...style,
    }}/>;

export default Input;
