import React from 'react';

/**
 * Container component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Container = ({ children, style, ...rest }) =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}
    {...rest}>
    {children}
  </div>;

export default Container;
