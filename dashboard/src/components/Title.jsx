import React from 'react';
import Text from './Text.jsx';

const Title = ({ children }) =>
  <Text restyle={{
    fontSize: '2rem',
    fontWeight: 'bold',
  }}>{children}</Text>;

export default Title;
