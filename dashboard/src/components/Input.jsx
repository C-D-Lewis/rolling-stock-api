import React from 'react';

/**
 * Input component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Input = ({ value, width = 250, onChange, restyle }) => {
  const style = Object.assign({
    fontSize: '1rem',
    border: 'none',
    borderBottom: '2px solid #ddd',
    backgroundColor: '#0000',
    outline: 'none',
    padding: '5px 0px',
    marginRight: 10,
  }, restyle);

  return (
    <input
      type="text"
      value={value}
      className="input"
      onChange={event => onChange(event.target.value)}
      style={style}/>
  );
};

export default Input;
