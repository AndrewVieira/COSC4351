import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Login from './pages/Login';
import Portal from './pages/Portal';

function App() {
  return (
    <div className="App">

      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href='/'>Admin Portal</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href='/login'>Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/portal'>Portal</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/portal' component={Portal}/>
      </Switch>

    </div>
  );
}

export default App;
