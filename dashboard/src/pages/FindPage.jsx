import React from 'react';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import Title from '../components/Title.jsx';

/**
 * Find resource page component.
 *
 * @returns {HTMLElement}
 */
const FindPage = () => {

  return (
    <Fader>
      <Container restyle={{ padding: 20 }}>
        <Title>Find Rolling Stock</Title>
      </Container>
    </Fader>
  );
};

export default FindPage;
