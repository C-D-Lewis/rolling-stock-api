import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import { Button, ButtonBar } from '../components/Button.jsx';
import { updateResource } from '../services/resourceService';
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
 * Update resource page component.
 *
 * @returns {HTMLElement}
 */
const UpdatePage = () => {
  const ip = useSelector(state => state.ip);
  const currentResource = useSelector(state => state.currentResource);

  const [inProgress, setInProgress] = useState(false);
  const [type, setType] = useState(TYPES[0]);
  const [className, setClassName] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [manufactureDate, setManufactureDate] = useState('1985-01-01');
  const [operator, setOperator] = useState('');
  const [inService, setInService] = useState('false');
  const [serviceStartDate, setServiceStartDate] = useState('2020-01-01');
  const [serviceEndDate, setServiceEndDate] = useState('2020-02-01');
  const [image, setImage] = useState('');

  /**
   * Make the POST request to create a resource.
   */
  const performUpdate = async () => {
    setInProgress(true);

    await waitAsync(300);

    try {
      const resource = {
        id: currentResource.id,
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
      await updateResource(resource);
    } catch (e) {
      alert(e);
    }

    setInProgress(false);
  };

  // When mounted, display item data
  useEffect(() => {
    setType(currentResource.type || '');
    setClassName(currentResource.class || '');
    setUnitNumber(currentResource.unitNumber || '');
    setManufacturer(currentResource.manufacturer || '');
    setManufactureDate(currentResource.manufactureDate || '');
    setOperator(currentResource.operator || '');
    setInService(currentResource.inService || '');
    setServiceStartDate(currentResource.serviceStartDate || '');
    setServiceEndDate(currentResource.serviceEndDate || '');
    setImage(currentResource.image || '');
  }, []);

  const typeOptions = TYPES.map(p => ({ name: p.charAt(0).toUpperCase() + p.slice(1), value: p }));

  return (
    <Fader>
      <Container style={{ padding: 20, maxWidth: 500 }}>
        <Title>Update Rolling Stock</Title>
        <Subtitle>Use this page to update an existing Rolling Stock resource.</Subtitle>
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
          <Button disabled={inProgress} onClick={performUpdate}>Update</Button>
        </ButtonBar>
      </Container>
    </Fader>
  );
};

export default UpdatePage;
