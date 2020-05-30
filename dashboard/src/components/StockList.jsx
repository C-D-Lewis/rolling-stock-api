import React from 'react';
import { useDispatch } from 'react-redux';
import { Colors } from '../theme';
import { setCurrentPage, setCurrentResource } from '../actions';
import UpdatePage from '../pages/UpdatePage.jsx';
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
      Registered
    </Text>
  </Container>;

/**
 * ListItem component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const ListItem = ({ item, onClick }) =>
  <Container
    onClick={onClick}
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

const StockList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <Container style={{ border: '1px solid #4444' }}>
      <ListHeader />
      {items.map(p => (
        <ListItem
          key={p.unitNumber}
          item={p}
          onClick={() => {
            dispatch(setCurrentResource(p));
            dispatch(setCurrentPage(UpdatePage));
          }}/>
      ))}
    </Container>
  );
};

export default StockList;
