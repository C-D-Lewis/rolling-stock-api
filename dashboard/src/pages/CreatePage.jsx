import React from 'react';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import Title from '../components/Title.jsx';

const CreatePage = () => {

  return (
    <Fader>
      <Container restyle={{ padding: 20 }}>
        <Title>Create Rolling Stock</Title>
      </Container>
    </Fader>
  );
};

export default CreatePage;
