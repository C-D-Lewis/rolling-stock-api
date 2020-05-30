import React from 'react';
import { Colors } from '../theme';
import Container from './Container.jsx';
import Text from './Text.jsx';

/**
 * ListHeader component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const ListHeader = (props) =>
  <Container
    style={{
      flexDirection: 'row',
      borderBottom: '1px solid #4444',
      backgroundColor: '#444',
      color: 'white',
      height: 45,
      alignItems: 'center',
      cursor: 'pointer',
      paddingLeft: 10,
    }}>
    <Text
      style={{
        fontSize: '1rem',
        flex: 1,
      }}>
      Unit Number
    </Text>
    <Text
      style={{
        fontSize: '1rem',
        flex: 1,
      }}>
      Class
    </Text>
    <Text
      style={{
        fontSize: '1rem',
        flex: 1,
      }}>
      Type
    </Text>
    <Text
      style={{
        fontSize: '1rem',
        flex: 1,
      }}>
      Manufacturer
    </Text>
    <Text
      style={{
        fontSize: '1rem',
        flex: 1,
      }}>
      Operator
    </Text>
    <Text
      style={{
        fontSize: '1rem',
        flex: 1,
      }}>
      Created
    </Text>
  </Container>;

/**
 * ListItem component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const ListItem = ({ item }) =>
  <Container
    className="listItem"
    style={{
      flexDirection: 'row',
      borderBottom: '1px solid #4444',
      height: 45,
      alignItems: 'center',
      cursor: 'pointer',
      paddingLeft: 10,
    }}>
    <Text
      style={{
        fontSize: '1.1rem',
        fontWeight: 'bold',
        flex: 1,
      }}>
      {item.unitNumber}
    </Text>
    <Text
      style={{
        fontSize: '0.9rem',
        color: Colors.subtitle,
        flex: 1,
      }}>
      {item.class}
    </Text>
    <Text
      style={{
        fontSize: '0.9rem',
        color: Colors.subtitle,
        flex: 1,
      }}>
      {item.type}
    </Text>
    <Text
      style={{
        fontSize: '0.9rem',
        color: Colors.subtitle,
        flex: 1,
      }}>
      {item.manufacturer}
    </Text>
    <Text
      style={{
        fontSize: '0.9rem',
        color: Colors.subtitle,
        flex: 1,
      }}>
      {item.operator}
    </Text>
    <Text
      style={{
        fontSize: '0.9rem',
        color: Colors.subtitle,
        flex: 1,
      }}>
      {new Date(item.createdAt).toDateString()}
    </Text>
  </Container>;

const StockList = ({ items }) =>
  <Container>
    <ListHeader />
    {items.map(p => <ListItem key={p.unitNumber} item={p} />)}
  </Container>

export default StockList;
