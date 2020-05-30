import React from 'react';
import { Colors, Styles } from '../theme';
import Container from './Container.jsx';

/**
 * A padded bar for buttons.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const ButtonBar = ({ children  }) =>
  <Container
    style={{
      flexDirection: 'row',
      marginTop: 15,
      justifyContent: 'flex-end',
    }}>
    {children}
  </Container>;

/**
 * Button component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const Button = ({ children, disabled = false, onClick, backgroundColor = Colors.Button.background }) =>
  <div
    className="button"
    onClick={() => disabled ? () => {} : onClick()}
    style={{
      color: Colors.Button.foreground,
      backgroundColor: disabled ? 'lightgrey' : backgroundColor,
      borderRadius: 5,
      fontWeight: 'bold',
      padding: '10px 15px',
      cursor: 'pointer',
      marginRight: 5,
    }}>
    {children}
  </div>;
