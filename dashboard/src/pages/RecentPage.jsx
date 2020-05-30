import React, { useEffect, useState } from 'react';
import { findResources } from '../services/resourceService';
import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import Fader from '../components/Fader.jsx';
import Title from '../components/Title.jsx';
import Subtitle from '../components/Subtitle.jsx';
import StockList from '../components/StockList.jsx';

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
        <Container style={{ marginTop: 30 }}>
          <StockList items={items} />
        </Container>
      </Container>
    </Fader>
  );
};

export default RecentPage;
