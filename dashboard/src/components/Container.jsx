import React from 'react';

/**
 * Container component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Container = ({ children, restyle }) => {
  const style = Object.assign({
    display: 'flex',
    flexDirection: 'column',
  }, restyle);

  return <div style={style}>{children}</div>;
};

export default Container;
