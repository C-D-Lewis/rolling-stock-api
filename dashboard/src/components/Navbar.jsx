import React from 'react';
import { Colors } from '../theme';

/** Navbar height */
export const NAVBAR_HEIGHT = 60;

/**
 * Navbar component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Navbar = ({ children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: NAVBAR_HEIGHT,
    backgroundColor: Colors.navbar.background,
    boxShadow: '-2px 3px 3px 4px #1113',
    zIndex: 999,
  };

  return <div style={style}>{children}</div>;
};

export default Navbar;
