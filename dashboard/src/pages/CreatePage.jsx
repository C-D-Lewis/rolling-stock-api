import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import Button from '../components/Button.jsx';
import Title from '../components/Title.jsx';
import Subtitle from '../components/Subtitle.jsx';
import Text from '../components/Text.jsx';
import Card from '../components/Card.jsx';
import RowLabel from '../components/RowLabel.jsx';
import Row from '../components/Row.jsx';
import Input from '../components/Input.jsx';
import Select from '../components/Select.jsx';

const SERVICE_PORT = 8000;
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

const CreatePage = () => {
  const ip = useSelector(state => state.ip);

  const [type, setType] = useState(TYPES[0]);
  const [className, setClassName] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const createResource = async () => {
    try {
      const res = await fetch(`http://${ip}:${SERVICE_PORT}/rollingStock`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          'class': className,
          unitNumber,
          manufacturer,
        }),
      });
      const json = await res.json();
      console.log(json);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Fader>
      <Container restyle={{ padding: 20 }}>
        <Title>Create Rolling Stock</Title>
        <Subtitle>Use this page to create a new Rolling Stock resource.</Subtitle>
        <Card title="Details" subtitle="Basic details of the Rolling Stock resource">
          <Container>
            <Row>
              <RowLabel>Type</RowLabel>
              <Select value={type} onChange={setType} options={TYPE_OPTIONS}/>
            </Row>
            <Row>
              <RowLabel>Class</RowLabel>
              <Input value={className} onChange={setClassName}/>
            </Row>
            <Row>
              <RowLabel>Unit Number</RowLabel>
              <Input value={unitNumber} onChange={setUnitNumber}/>
            </Row>
            <Row>
              <RowLabel>Manufacturer</RowLabel>
              <Input value={manufacturer} onChange={setManufacturer}/>
            </Row>
          </Container>
        </Card>
        <Container restyle={{ flexDirection: 'row', marginTop: 15, }}>
          <Button onClick={createResource}>Create</Button>
        </Container>
      </Container>
    </Fader>
  );
};

export default CreatePage;