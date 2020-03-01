import React, { useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Colors, Images } from './theme';
import { Navbar, NavbarLogo, NavbarTitle } from './components/Navbar.jsx';
import { Sidebar, SidebarMenuItem } from './components/Sidebar.jsx';
import { setCurrentPage, setIp } from './actions';
import store from './store';
import Container from './components/Container.jsx';
import Text from './components/Text.jsx';
import Input from './components/Input.jsx';
import Button from './components/Button.jsx';
import BlankPage from './pages/BlankPage.jsx';
import OverviewPage from './pages/OverviewPage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import FindPage from './pages/FindPage.jsx';

/**
 * RootContainer component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const RootContainer = ({ children }) =>
  <Container
    restyle={{
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: Colors.background,
    }}>
    {children}
  </Container>;

/**
 * Main Dashboard component.
 */
const Dashboard = () => {
  const dispatch = useDispatch();

  const ip = useSelector(state => state.ip);
  const currentPage = useSelector(state => state.currentPage);

  useEffect(() => {
    dispatch(setCurrentPage(OverviewPage));
  }, []);

  const CurrentPage = currentPage;
  return (
    <RootContainer>
      <Navbar>
        <NavbarLogo/>
        <NavbarTitle>Rolling Stock API Dashboard</NavbarTitle>
        <Input
          value={ip}
          onChange={ip => dispatch(setIp(ip))}
          restyle={{
            marginLeft: 20,
            color: Colors.Navbar.foreground,
            maxWidth: 200,
          }}/>
      </Navbar>
      <Container restyle={{ flexDirection: 'row', height: '100%' }}>
        <Sidebar>
          <SidebarMenuItem
            selected={currentPage === OverviewPage}
            onClick={() => dispatch(setCurrentPage(OverviewPage))}>
            Overview
          </SidebarMenuItem>
          <SidebarMenuItem
            selected={currentPage === CreatePage}
            onClick={() => dispatch(setCurrentPage(CreatePage))}>
            Create New
          </SidebarMenuItem>
          <SidebarMenuItem
            selected={currentPage === FindPage}
            onClick={() => dispatch(setCurrentPage(FindPage))}>
            Find Existing
          </SidebarMenuItem>
        </Sidebar>
        <Container>
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
