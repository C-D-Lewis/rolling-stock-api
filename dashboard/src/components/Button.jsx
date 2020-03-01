import React from 'react';
import { Colors, Styles } from '../theme';

/**
 * Button component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Button = ({ children, disabled = false, onClick }) =>
  <div
    className="button"
    onClick={() => disabled ? () => {} : onClick()}
    style={{
      color: Colors.Button.foreground,
      backgroundColor: disabled ? 'lightgrey' : Colors.Button.background,
      borderRadius: 5,
      fontWeight: 'bold',
      padding: '10px 15px',
      boxShadow: Styles.boxShadow,
      cursor: 'pointer',
    }}>
    {children}
  </div>;

export default Button;
