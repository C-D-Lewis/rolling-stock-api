import React from 'react';
import Container from './Container.jsx';

/**
 * Row component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Row = ({ children }) =>
  <Container restyle={{
    flexDirection: 'row',
    margin: '5px 0px',
  }}>{children}</Container>;

export default Row;
