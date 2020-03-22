import React from 'react';

/**
 * Text component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Text = ({ children, style }) =>
  <div
    style={{
      display: 'flex',
      fontSize: 18,
      ...style,
    }}>
    {children}
  </div>;

export default Text;
