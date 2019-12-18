import React from 'react';
import { Colors } from '../theme';

/**
 * RootContainer component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const RootContainer = ({ children }) => {
  const style = {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: Colors.background,
  };

  return <div style={style}>{children}</div>;
};

export default RootContainer;
