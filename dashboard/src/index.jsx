import React from 'react';
import ReactDOM from 'react-dom';

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
    return <div>Hello, world!</div>;
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));
