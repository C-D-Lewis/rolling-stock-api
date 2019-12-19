import React from 'react';
import { Colors, Images } from '../theme';
import Image from './Image.jsx'
import Text from './Text.jsx'

/** Navbar height */
export const NAVBAR_HEIGHT = 70;

/**
 * Navbar component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const Navbar = ({ children }) => {
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

/**
 * NavbarLogo component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const NavbarLogo = () => {
  const style = { width: 36, marginLeft: 10 };

  return <Image src={Images.logo} restyle={style}/>
};

/**
 * NavbarTitle component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const NavbarTitle = ({ children }) => {
  const style = {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  };

  return <Text restyle={style}>{children}</Text>;
};
