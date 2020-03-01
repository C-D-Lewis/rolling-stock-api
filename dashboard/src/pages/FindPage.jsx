import React, { useState } from 'react';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import Fader from '../components/Fader.jsx';
import Input from '../components/Input.jsx';
import Row from '../components/Row.jsx';
import RowLabel from '../components/RowLabel.jsx';
import Subtitle from '../components/Subtitle.jsx';
import Title from '../components/Title.jsx';

/**
 * Find resource page component.
 *
 * @returns {HTMLElement}
 */
const FindPage = () => {
  const [query, setQuery] = useState('');
  const [inProgress, setInProgress] = useState(false);
  const [results, setResults] = useState([]);

  /**
   * Perform search using the current query.
   */
  const performSearch = () => {
    setInProgress(true);

    try {

    } catch (error) {

    }

    setInProgress(false);
  };

  return (
    <Fader>
      <Container restyle={{ padding: 20 }}>
        <Title>Find Rolling Stock</Title>
        <Subtitle>Use this page to search for an existing Rolling Stock resource.</Subtitle>
        <Card title="Search Query" subtitle="Enter part or all of a unit number or class">
          <Container>
            <Row>
              <RowLabel>Query</RowLabel>
              <Input value={query} onChange={setQuery}/>
              <Button disabled={inProgress} onClick={performSearch}>Search</Button>
            </Row>
          </Container>
        </Card>
      </Container>
    </Fader>
  );
};

export default FindPage;
