import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import { Button, ButtonBar } from '../components/Button.jsx';
import { createResource } from '../services/resourceService';
import Title from '../components/Title.jsx';
import Subtitle from '../components/Subtitle.jsx';
import Text from '../components/Text.jsx';
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
 * Asynchronous wait.
 *
 * @param {number} ms - Milliseconds to wait.
 * @returns {Promise}
 */
const waitAsync = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Create resource page component.
 *
 * @returns {HTMLElement}
 */
const CreatePage = () => {
  const ip = useSelector(state => state.ip);

  const [inProgress, setInProgress] = useState(false);
  const [type, setType] = useState(TYPES[0]);
  const [className, setClassName] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [manufactureDate, setManufactureDate] = useState('1985-01-01');
  const [operator, setOperator] = useState('');
  const [inService, setInService] = useState(false);
  const [serviceStartDate, setServiceStartDate] = useState('2020-01-01');
  const [serviceEndDate, setServiceEndDate] = useState('2020-02-01');
  const [image, setImage] = useState('');

  /**
   * Make the POST request to create a resource.
   */
  const performCreate = async () => {
    setInProgress(true);

    await waitAsync(300);

    try {
      const resource = {
        type,
        'class': className,
        unitNumber,
        manufacturer,
        manufactureDate,
        operator,
        inService,
        serviceStartDate,
        serviceEndDate,
        image,
      };
      await createResource(resource);
    } catch (e) {
      alert(e);
    }

    setInProgress(false);
  };

  const typeOptions = TYPES.map(p => ({ name: p.charAt(0).toUpperCase() + p.slice(1), value: p }));

  return (
    <Fader>
      <Container style={{ padding: 20, maxWidth: 500 }}>
        <Title>Create Rolling Stock</Title>
        <Subtitle>Use this page to create a new Rolling Stock resource.</Subtitle>
        <Container style={{ marginTop: 30 }}>
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
          <Row>
            <RowLabel>Manufacture Date</RowLabel>
            <Input value={manufactureDate} onChange={setManufactureDate}/>
          </Row>
          <Row>
            <RowLabel>Operator</RowLabel>
            <Input value={operator} onChange={setOperator}/>
          </Row>
          <Row>
            <RowLabel>In Service</RowLabel>
            <Input value={inService} onChange={setInService}/>
          </Row>
          <Row>
            <RowLabel>Service Start</RowLabel>
            <Input value={serviceStartDate} onChange={setServiceStartDate}/>
          </Row>
          <Row>
            <RowLabel>Service End</RowLabel>
            <Input value={serviceEndDate} onChange={setServiceEndDate}/>
          </Row>
          <Row>
            <RowLabel>Image</RowLabel>
            <Input value={image} onChange={setImage}/>
          </Row>
        </Container>
        <ButtonBar>
          <Button disabled={inProgress} onClick={performCreate}>Create</Button>
        </ButtonBar>
      </Container>
    </Fader>
  );
};

export default CreatePage;
