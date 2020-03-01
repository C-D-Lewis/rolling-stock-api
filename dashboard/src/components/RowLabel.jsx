import React from 'react';
import Text from './Text.jsx';

/**
 * RowLabel component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const RowLabel = ({ children }) =>
  <Text
    restyle={{
      fontWeight: 'bold',
      fontSize: '1rem',
      width: 120,
      alignItems: 'center',
    }}>
    {children}
  </Text>;

export default RowLabel;
