import React from 'react';
import ReactDOM from 'react-dom';
import { Colors, Images } from './theme';
import Navbar from './components/Navbar.jsx';
import Container from './components/Container.jsx';
import Sidebar from './components/Sidebar.jsx';
import Image from './components/Image.jsx';
import Text from './components/Text.jsx';

class Application extends React.Component {
  /**
   * Application class constructor
   *
   * @param {Object} props - Component props.
   */
  constructor (props) {
    super(props);

    this.state = {

    };

    this.setStateSync = this.setStateSync.bind(this);
  }

  /**
   * Async-await version of setState.
   *
   * @param {Object} slice - State slice.
   * @returns {Promise}
   */
  setStateSync (slice) {
    return new Promise(resolve => this.setState(slice, resolve));
  }

  /**
   * Component render function.
   */
  render () {
    return (
      <Container restyle={{
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: Colors.background,
      }}>
        <Navbar>
          <Image src={Images.logo} restyle={{ width: 36, marginLeft: 10 }}/>
          <Text restyle={{
            fontSize: 24,
            color: 'white',
            marginLeft: 10,
          }}>Rolling Stock API Dashboard</Text>
        </Navbar>
        <Container restyle={{ flexDirection: 'row', height: '100%' }}>
          <Sidebar/>
          <Container restyle={{ width: '100%' }}>
          </Container>
        </Container>
      </Container>
    );
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));
