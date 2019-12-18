import React from 'react';

/**
 * RootContainer component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const RootContainer = ({ children }) => {
  const style = {
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
  };

  return <div style={style}>{children}</div>;
};

export default RootContainer;
