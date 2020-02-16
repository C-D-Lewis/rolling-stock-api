import React from 'react';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import Title from '../components/Title.jsx';

/**
 * Overview resource page component.
 *
 * @returns {HTMLElement}
 */
const OverviewPage = () => {

  return (
    <Fader>
      <Container restyle={{ padding: 20 }}>
        <Title>Overview</Title>
      </Container>
    </Fader>
  );
};

export default OverviewPage;
