import React, { useState, useEffect } from 'react';

/**
 * Fader component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Fader = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 0);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transition: '0.5s',
      }}>
      {children}
    </div>
  );
};

export default Fader;
