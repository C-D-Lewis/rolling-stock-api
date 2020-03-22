import React from 'react';
import { Colors } from '../theme';
import Text from './Text.jsx';

/**
 * Title component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Title = ({ children }) =>
  <Text
    style={{
      fontSize: '2rem',
      fontWeight: 'bold',
      color: Colors.title,
    }}>
    {children}
  </Text>;

export default Title;
