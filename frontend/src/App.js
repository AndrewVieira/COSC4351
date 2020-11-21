import React from 'react';
import {Route} from 'react-router-dom';
import {useHistory} from "react-router-dom";

import {connect} from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Portal from './pages/Portal';

import * as actions from './store/actions/Auth';
const Hoc = props => props.children;

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  onLogout = (event) => {
    /*this.props.logout();
    const history = useHistory();
    history.push('/');*/
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
                <Nav.Link href='/signup'>Sign Up</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/portal'>Portal</Nav.Link>
              </Nav.Item>
            </Nav>

          <Navbar.Toggle/>
          <Button type="submit" variant="light" onClick={this.onLogout}>Log Out</Button>
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
          <Route exact path='/signup' component={SignUp}/>
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
