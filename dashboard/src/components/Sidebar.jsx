import React from 'react';

/**
 * Sidebar component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const Sidebar = ({ children }) =>
  <div
    style={{
      backgroundColor: 'white',
      width: 250,
      height: '100%',
      borderRight: 'solid 1px #1114',
      zIndex: 999,
    }}>
    {children}
  </div>;

/**
 * SidebarMenuItem component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const SidebarMenuItem = ({ children, onClick, selected }) =>
  <div
    className="sidebarMenuItem"
    onClick={onClick}
    style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: 45,
      borderBottom: '1px solid #0004',
      cursor: 'pointer',
      alignItems: 'center',
      backgroundColor: selected ? '#ddd' : 'white',
    }}>
    <div style={{ paddingLeft: 10 }}>
      {children}
    </div>
  </div>;
