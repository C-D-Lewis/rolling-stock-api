import React from 'react';
import ReactDOM from 'react-dom';
import { Colors, Images } from './theme';
import { Navbar, NavbarLogo, NavbarTitle } from './components/Navbar.jsx';
import { Sidebar, SidebarMenuItem } from './components/Sidebar.jsx';
import Container from './components/Container.jsx';
import Text from './components/Text.jsx';
import BlankPage from './pages/BlankPage.jsx';

/**
 * RootContainer component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const RootContainer = ({ children }) => {
  const style = {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: Colors.background,
  };

  return <Container restyle={style}>{children}</Container>;
};

/**
 * Main Application class.
 */
class Application extends React.Component {
  /**
   * Application class constructor
   *
   * @param {Object} props - Component props.
   */
  constructor (props) {
    super(props);

    this.state = {
      currentPage: BlankPage,
    };
  }

  /**
   * Component render function.
   */
  render () {
    const CurrentPage = this.state.currentPage;

    return (
      <RootContainer>
        <Navbar>
          <NavbarLogo/>
          <NavbarTitle>Rolling Stock API Dashboard</NavbarTitle>
        </Navbar>
        <Container restyle={{ flexDirection: 'row', height: '100%' }}>
          <Sidebar>
            <SidebarMenuItem>Overview</SidebarMenuItem>
            <SidebarMenuItem>Create New</SidebarMenuItem>
            <SidebarMenuItem>Find Existing</SidebarMenuItem>
          </Sidebar>
          <Container restyle={{ width: '100%' }}>
            <CurrentPage state={this.state}/>
          </Container>
        </Container>
      </RootContainer>
    );
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));
