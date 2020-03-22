import React from 'react';
import { Colors, Styles } from '../theme';
import Container from './Container.jsx';
import Text from './Text.jsx';

/**
 * Card component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Card = ({ children, title, subtitle, style }) =>
  <Container
    style={{
      background: 'white',
      border: '1px solid #1113',
      borderRadius: 5,
      padding: 10,
      marginTop: 15,
      boxShadow: Styles.boxShadow,
      ...style,
    }}>
    <Text
      style={{
        fontSize: '1.3rem',
        color: Colors.title,
        marginBottom: 5,
      }}>
      {title}
    </Text>
    {subtitle !== undefined && (
      <Text
        style={{
          fontSize: '1.0rem',
          color: Colors.subtitle,
          marginBottom: 10,
        }}>
        {subtitle}
      </Text>
    )}
    {children}
  </Container>;

export default Card;
