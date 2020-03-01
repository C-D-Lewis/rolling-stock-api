import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import { Button, ButtonBar } from '../components/Button.jsx';
import { createResource } from '../services/resourceService';
import Title from '../components/Title.jsx';
import Subtitle from '../components/Subtitle.jsx';
import Text from '../components/Text.jsx';
import Card from '../components/Card.jsx';
import RowLabel from '../components/RowLabel.jsx';
import Row from '../components/Row.jsx';
import Input from '../components/Input.jsx';
import Select from '../components/Select.jsx';

/** Types of rolling stock available. TOOD: Use same schema */
const TYPES = [
  'diesel',
  'electric',
  'passenger',
  'freight',
  'maintenance',
  'emu',
  'dmu'
];

/**
 * Create resource page component.
 *
 * @returns {HTMLElement}
 */
const CreatePage = () => {
  const ip = useSelector(state => state.ip);

  const [type, setType] = useState(TYPES[0]);
  const [className, setClassName] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [inProgress, setInProgress] = useState(false);

  /**
   * Make the POST request to create a resource.
   */
  const performCreate = async () => {
    setInProgress(true);

    try {
      const resource = {
        type,
        'class': className,
        unitNumber,
        manufacturer,
      };
      createResource(resource);
    } catch (e) {
      alert(e);
    }

    setInProgress(false);
  };

  const typeOptions = TYPES.map(p => ({ name: p.charAt(0).toUpperCase() + p.slice(1), value: p }));

  return (
    <Fader>
      <Container restyle={{ padding: 20 }}>
        <Title>Create Rolling Stock</Title>
        <Subtitle>Use this page to create a new Rolling Stock resource.</Subtitle>
        <Card title="Details" subtitle="Basic details of the Rolling Stock resource">
          <Container>
            <Row>
              <RowLabel>Type</RowLabel>
              <Select value={type} onChange={setType} options={typeOptions}/>
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
          <ButtonBar>
            <Button disabled={inProgress} onClick={performCreate}>Create</Button>
          </ButtonBar>
        </Card>
      </Container>
    </Fader>
  );
};

export default CreatePage;
