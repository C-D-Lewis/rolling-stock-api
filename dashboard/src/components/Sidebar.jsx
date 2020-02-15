import React from 'react';

/**
 * Sidebar component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const Sidebar = ({ children }) => {
  const style = {
    backgroundColor: 'white',
    width: 250,
    height: '100%',
    // boxShadow: '2px 3px 3px 4px #1113',
    borderRight: 'solid 1px #1114',
    zIndex: 999,
  };

  return <div style={style}>{children}</div>;
};

/**
 * SidebarMenuItem component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const SidebarMenuItem = ({ children, onClick, selected }) => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 45,
    borderBottom: '1px solid #0004',
    cursor: 'pointer',
    alignItems: 'center',
    backgroundColor: selected ? '#ddd' : 'white',
  };

  return (
    <div className="sidebarMenuItem" style={style} onClick={onClick}>
      <div style={{ marginLeft: 10 }}>{children}</div>
    </div>
  );
};
