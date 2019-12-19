import React from 'react';

/**
 * Image component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Image = ({ restyle, src }) => {
  const style = Object.assign({
    width: 48,
    height: 'auto',
  }, restyle);

  return <img style={style} src={src}/>;
};

export default Image;
