import React from 'react';
import { Colors } from '../theme';
import Text from './Text.jsx';

/**
 * Subtitle component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Subtitle = ({ children }) =>
  <Text
    style={{
      fontSize: '1rem',
      color: Colors.subtitle,
      marginTop: 10,
    }}>
    {children}
  </Text>;

export default Subtitle;
