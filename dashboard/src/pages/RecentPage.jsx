import React, { useEffect, useState } from 'react';
import { findResources } from '../services/resourceService';
import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import Title from '../components/Title.jsx';
import Subtitle from '../components/Subtitle.jsx';

const ListItem = ({ data }) =>
  <Container
    className="listItem"
    style={{
      flexDirection: 'row',
      borderBottom: '1px solid #4444',
      height: 30,
      alignItems: 'center',
      cursor: 'pointer',
    }}>
    {data.unitNumber}
  </Container>;

/**
 * Recent resource page component.
 *
 * @returns {HTMLElement}
 */
const RecentPage = () => {
  const [items, setItems] = useState([]);

  /**
   * Load the most recent items.
   */
  const loadRecentItems = async () => {
    try {
      const items = await findResources();
      setItems(items);
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  useEffect(() => {
    loadRecentItems();
  }, []);

  return (
    <Fader>
      <Container style={{ padding: 20, flex: 1 }}>
        <Title>Recent Rolling Stock</Title>
        <Subtitle>This page shows the most recently created Rolling Stock resources.</Subtitle>
        <Card title="Recent">
          <Container>
            {items.map(p => <ListItem key={p.unitNumber} data={p} />)}
          </Container>
        </Card>
      </Container>
    </Fader>
  );
};

export default RecentPage;
