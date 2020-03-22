import React from 'react';

/**
 * Image component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Image = ({ style, src }) =>
  <img
    style={{
      width: 48,
      height: 'auto',
      ...style,
    }}
    src={src}
  />;

export default Image;
