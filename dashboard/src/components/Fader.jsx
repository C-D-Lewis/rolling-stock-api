import React, { useState, useEffect } from 'react';

const Fader = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 0);
  }, []);

  const style = {
    opacity: visible ? 1 : 0,
    visibility: visible ? 'visible' : 'hidden',
    transition: '0.5s',
  };

  return <div style={style}>{children}</div>;
};

export default Fader;