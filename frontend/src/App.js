import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Login from './pages/Login';
import Portal from './pages/Portal';

import LogoutButton from './components/LogoutButton';

import * as actions from './store/actions/Auth';
const Hoc = props => props.children;

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  Main = () => {
    return (
      <div className="App">

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href='/'>Admin Portal</Navbar.Brand>
            <Nav className="mr-auto">
              
              <Nav.Item>
                <Nav.Link href='/'>Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/portal'>Portal</Nav.Link>
              </Nav.Item>
            </Nav>

          <Navbar.Toggle/>
          <LogoutButton/>
        </Navbar>

        <Navbar bg="light" variant="light" sticky="bottom" fixed="bottom">
          <Nav className="m-auto">
              <div className="text-center" text-align="center" width="100%"> 
                <p>COSC 4351 Project - By Carroll Vance, Andrew Vieira, and Jerrin Wiley</p>
              </div>
          </Nav>
        </Navbar>

        <Hoc>
          <Route exact path='/' component={Login}/>
          <Route exact path='/portal' component={Portal}/>
        </Hoc>

      </div>
    );
  }

  render() { return (
      <div className="App" >
        <this.Main{...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    isLoggedIn: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
