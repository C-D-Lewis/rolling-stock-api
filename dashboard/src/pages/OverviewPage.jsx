import React from 'react';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import Title from '../components/Title.jsx';

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
