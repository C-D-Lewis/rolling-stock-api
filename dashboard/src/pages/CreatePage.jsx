import React, { useState } from 'react';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import Button from '../components/Button.jsx';
import Title from '../components/Title.jsx';
import Subtitle from '../components/Subtitle.jsx';
import Text from '../components/Text.jsx';
import Card from '../components/Card.jsx';

const TYPES = [
  'diesel',
  'electric',
  'passenger',
  'freight',
  'maintenance',
  'emu',
  'dmu'
];
const TYPE_OPTIONS = TYPES.map(p => ({ name: p.charAt(0).toUpperCase() + p.slice(1), value: p }));

const RowLabel = ({ children }) =>
  <Text restyle={{
    fontWeight: 'bold',
    width: 120,
  }}>{children}</Text>

const Row = ({ children }) =>
  <Container restyle={{
    flexDirection: 'row',
    padding: '10px 0px',
  }}>{children}</Container>;

const InputForm = () => (
  <Container>
    <Row>
      <RowLabel>Type</RowLabel>
    </Row>
    <Row>
      <RowLabel>Class</RowLabel>
    </Row>
    <Row>
      <RowLabel>Unit Number</RowLabel>
    </Row>
    <Row>
      <RowLabel>Manufacturer</RowLabel>
    </Row>
  </Container>
);

const CreatePage = () => {
  const [type, setType] = useState(TYPES[0]);
  const [className, setClassName] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  return (
    <Fader>
      <Container restyle={{ padding: 20 }}>
        <Title>Create Rolling Stock</Title>
        <Subtitle>Use this page to create a new Rolling Stock resource.</Subtitle>
        <Card title="Details" subtitle="Basic details of the Rolling Stock resource">
          <InputForm/>
        </Card>
        <Container restyle={{ flexDirection: 'row', marginTop: 15, }}>
          <Button onClick={() => {}}>Create</Button>
        </Container>
      </Container>
    </Fader>
  );
};

export default CreatePage;
