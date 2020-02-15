import React from 'react';
import { Colors, Styles } from '../theme';

/**
 * Button component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Button = ({ children, onClick }) =>
  <div className="button" onClick={onClick} style={{
    borderRadius: 5,
    color: Colors.button.foreground,
    backgroundColor: Colors.button.background,
    padding: '10px 15px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: Styles.boxShadow,
  }}>{children}</div>;

export default Button;
