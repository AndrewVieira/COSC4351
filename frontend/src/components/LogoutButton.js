import React from 'react';
import {useHistory} from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export default function LogoutButton(){
  const history = useHistory();

  function handleClick() {
    //this.props.logout();
    history.push("/");
  }

  return (
    <Button type="submit" variant="light" onClick={handleClick}>
      Log Out
    </Button>
  );
}