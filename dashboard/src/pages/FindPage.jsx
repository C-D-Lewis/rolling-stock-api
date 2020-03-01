import React, { useState } from 'react';
import { Button } from '../components/Button.jsx';
import { findResources } from '../services/resourceService';
import Container from '../components/Container.jsx';
import Card from '../components/Card.jsx';
import Fader from '../components/Fader.jsx';
import Input from '../components/Input.jsx';
import Row from '../components/Row.jsx';
import RowLabel from '../components/RowLabel.jsx';
import Subtitle from '../components/Subtitle.jsx';
import Title from '../components/Title.jsx';
import Text from '../components/Text.jsx';

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
  const performSearch = async () => {
    setInProgress(true);

    try {
      const json = await findResources(query);
      setResults(json);
    } catch (error) {
      alert(`Error searching; ${error.message}`);
    }

    setInProgress(false);
  };

  return (
    <Fader>
      <Container restyle={{ padding: 20 }}>
        <Title>Find Rolling Stock</Title>
        <Subtitle>Use this page to search for an existing Rolling Stock resource.</Subtitle>
        <Card title="Search Query">
          <Container>
            <Row>
              <RowLabel>Query</RowLabel>
              <Input value={query} onChange={setQuery}/>
              <Button disabled={inProgress} onClick={performSearch}>Search</Button>
            </Row>
          </Container>
        </Card>

        <Card title="Search Results">
          <Container>
            {results.length === 0 && <Text>Nothing yet.</Text>}
            {results.length && results.map(item => <Text>{item.unitNumber}</Text>)}
          </Container>
        </Card>
      </Container>
    </Fader>
  );
};

export default FindPage;
