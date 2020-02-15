import React, { useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Colors, Images } from './theme';
import { Navbar, NavbarLogo, NavbarTitle } from './components/Navbar.jsx';
import { Sidebar, SidebarMenuItem } from './components/Sidebar.jsx';
import store from './store';
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
 * Main Dashboard component.
 */
const Dashboard = () => {
  const dispatch = useDispatch();

  const ip = useSelector(state => state.ip);
  const currentPage = useSelector(state => state.currentPage);

  const CurrentPage = currentPage;
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
          <CurrentPage/>
        </Container>
      </Container>
    </RootContainer>
  );
};

const Application = () => (
  <Provider store={store}>
    <Dashboard/>
  </Provider>
);

ReactDOM.render(<Application/>, document.getElementById('app'));
