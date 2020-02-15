import React from 'react';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import Title from '../components/Title.jsx';
import Subtitle from '../components/Subtitle.jsx';
import Card from '../components/Card.jsx';

const CreatePage = () => {

  return (
    <Fader>
      <Container restyle={{ padding: 20 }}>
        <Title>Create Rolling Stock</Title>
        <Subtitle>Use this page to create a new Rolling Stock resource.</Subtitle>
        <Card title="Details" subtitle="Basic details of the Rolling Stock resource">
          
        </Card>
      </Container>
    </Fader>
  );
};

export default CreatePage;
