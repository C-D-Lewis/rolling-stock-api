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
export const Navbar = ({ children }) =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      minHeight: NAVBAR_HEIGHT,
      backgroundColor: Colors.Navbar.background,
      zIndex: 999,
    }}>
    {children}
  </div>;

/**
 * NavbarLogo component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const NavbarLogo = () =>
  <Image
    src={Images.logo}
    style={{
      width: 36,
      marginLeft: 10,
    }}/>;

/**
 * NavbarTitle component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const NavbarTitle = ({ children }) =>
  <Text
    style={{
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginLeft: 10,
      cursor: 'default',
    }}>
    {children}
  </Text>;
