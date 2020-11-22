import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Login from './pages/Login';
import Portal from './pages/Portal';
import PlaceHolder from './pages/PlaceHolder';

import LogoutButton from './components/LogoutButton';

import * as actions from './store/actions/Auth';
const Hoc = props => props.children;

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  Main = () => {
    return (
      <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href='/'>Admin Portal</Navbar.Brand>
            <Nav className="ml-auto">
            </Nav>
            <Nav className="ml-auto">
              <LogoutButton className="mr-auto"/>
            </Nav>
          </Navbar>

          <Hoc>
            <Route exact path='/' component={Login}/>
            <Route exact path='/portal' component={Portal}/>

            <Route exact path='/help_desk' render={(props) => (<PlaceHolder {...props} title="Help Desk"/>)}/>
            <Route exact path='/finance_reports' render={(props) => (<PlaceHolder {...props} title="Finance Reports"/>)}/>
            <Route exact path='/accounts_payable' render={(props) => (<PlaceHolder {...props} title="Accounts Payable"/>)}/>
            <Route exact path='/accounts_recievable' render={(props) => (<PlaceHolder {...props} title="Accounts Recievable"/>)}/>
            <Route exact path='/tax' render={(props) => (<PlaceHolder {...props} title="Tax"/>)}/>
            <Route exact path='/sales_reports' render={(props) => (<PlaceHolder {...props} title="Sales Reports"/>)}/>
            <Route exact path='/sales_leads' render={(props) => (<PlaceHolder {...props} title="Sales Leads"/>)}/>
            <Route exact path='/sales_demo' render={(props) => (<PlaceHolder {...props} title="Sales Demo"/>)}/>
            <Route exact path='/new_hire' render={(props) => (<PlaceHolder {...props} title="New Hire On-Boarding"/>)}/>
            <Route exact path='/benefits' render={(props) => (<PlaceHolder {...props} title="Benefits"/>)}/>
            <Route exact path='/payroll' render={(props) => (<PlaceHolder {...props} title="Payroll"/>)}/>
            <Route exact path='/off_boarding' render={(props) => (<PlaceHolder {...props} title="Off-Boarding"/>)}/>
            <Route exact path='/hr_reports' render={(props) => (<PlaceHolder {...props} title="HR Reports"/>)}/>
            <Route exact path='/application_monitoring' render={(props) => (<PlaceHolder {...props} title="Application Monitoring"/>)}/>
            <Route exact path='/tech_support' render={(props) => (<PlaceHolder {...props} title="Tech Support"/>)}/>
            <Route exact path='/app_development' render={(props) => (<PlaceHolder {...props} title="App Development"/>)}/>
            <Route exact path='/app_admin' render={(props) => (<PlaceHolder {...props} title="App Admin"/>)}/>
            <Route exact path='/release_management' render={(props) => (<PlaceHolder {...props} title="Release Management"/>)}/>
          </Hoc>
      </div>

    );
  }

  /*
    <Navbar bg="light" variant="light" fixed="bottom">
      <Nav className="m-auto">
          <div className="text-center" text-align="center" width="100%"> 
            <p>COSC 4351 Project - By Carroll Vance, Andrew Vieira, and Jerrin Wiley</p>
          </div>
      </Nav>
    </Navbar>  
  */

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
