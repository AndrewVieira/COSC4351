import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button';

import * as actions from '../store/actions/Auth';

function LogoutButton ({token, logout}) {
  const history = useHistory();

  function handleClick() {
    logout();
    history.push("/");
  }

  if (token){
    return (<Button type="submit" variant="light" onClick={handleClick}>Log Out</Button>);
  }
  else{
    return (null);
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton)