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
      backgroundColor: '#eee',
      width: 250,
      borderRight: 'solid 1px #1114',
      zIndex: 999,
      height: '100%',
    }}>
    {children}
  </div>;

/**
 * SidebarMenuItem component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
export const SidebarMenuItem = ({ children, onClick, selected, icon }) =>
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
    <img
      style={{
        width: 25,
        height: 'auto',
        paddingLeft: 10,
        paddingRight: 5,
      }}
      src={icon}/>
    <div style={{  }}>
      {children}
    </div>
  </div>;
