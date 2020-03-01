import React from 'react';

/**
 * Text component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Text = ({ children, restyle }) => {
  const style = Object.assign({ display: 'flex', fontSize: 18 }, restyle);

  return <div style={style}>{children}</div>;
};

export default Text;
