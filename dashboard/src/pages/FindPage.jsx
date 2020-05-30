import React, { useState } from 'react';
import { Button } from '../components/Button.jsx';
import { findResources } from '../services/resourceService';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import Input from '../components/Input.jsx';
import Row from '../components/Row.jsx';
import RowLabel from '../components/RowLabel.jsx';
import Subtitle from '../components/Subtitle.jsx';
import Title from '../components/Title.jsx';
import Text from '../components/Text.jsx';
import StockList from '../components/StockList.jsx';

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
      <Container style={{ padding: 20 }}>
        <Title>Find Rolling Stock</Title>
        <Subtitle>Search for an existing Rolling Stock resource by unit number, class, type, or manufacturer.</Subtitle>
        <Container style={{ maxWidth: 400, marginTop: 30 }}>
          <Row>
            <RowLabel>Query</RowLabel>
            <Input value={query} onChange={setQuery}/>
            <Button disabled={inProgress} onClick={performSearch}>Search</Button>
          </Row>
        </Container>

        <Container style={{ marginTop: 30 }}>
          {results.length === 0 && <Text>Nothing yet.</Text>}
          {results.length > 0 && <StockList items={results} />}
        </Container>
      </Container>
    </Fader>
  );
};

export default FindPage;
