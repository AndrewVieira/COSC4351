import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Portal from './pages/Portal';

function App() {
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
      </Navbar>

      <Navbar bg="light" variant="light" sticky="bottom" fixed="bottom">
        <Nav className="m-auto">
            <div class="text-center" text-align="center" width="100%"> 
              <p>COSC 4351 Project - By Carroll Vance, Andrew Vieira, and Jerrin Wiley</p>
            </div>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/portal' component={Portal}/>
      </Switch>

    </div>
  );
}

export default App;
