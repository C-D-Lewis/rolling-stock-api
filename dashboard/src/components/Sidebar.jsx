import React from 'react';

/**
 * Sidebar component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Sidebar = ({ children }) => {
  const style = {
    backgroundColor: 'white',
    width: 250,
    height: '100%',
    boxShadow: '2px 3px 3px 4px #1113',
    zIndex: 999,
  };

  return <div style={style}>{children}</div>;
};

export default Sidebar;
