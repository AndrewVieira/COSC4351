import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button';

import * as actions from '../store/actions/Auth';

function LogoutButton ({logout}) {
  const history = useHistory();

  function handleClick() {
    logout();
    history.push("/");
  }

  return (
      <Button type="submit" variant="light" onClick={handleClick}>
        Log Out
      </Button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout()),
  }
}

export default connect(null, mapDispatchToProps)(LogoutButton)