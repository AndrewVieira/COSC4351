import React from 'react';

import {Route, Link, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Portal from './pages/Portal';

function App() {
  return (
      <div className="App">
        <h1>Routes</h1>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/portal'>Portal</Link></li>
        </ul>

        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/portal' component={Portal}/>
        </Switch>
      </div>
  );
}

export default App;
