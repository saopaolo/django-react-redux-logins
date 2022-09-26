import React, { useState } from 'react';
import { Navigate, useMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { verify } from '../actions/auth';
import './Activate.css';

function Activate({ verify }) {
  const match = useMatch('/activate/:uid/:token');
  const [verified, setVerified] = useState(false);
  
  const verify_account = e => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify (uid, token);
    setVerified(true);
  };
 
  if (verified) {
    return <Navigate to='/' />
  }

  return (
    <div className='activation'>
      <div className='activation__title'>
        <h1 className='activation__lead'>Verify your Account:</h1>
        <Button className='activation__button__primary' onClick={verify_account} type='submit'>Verify</Button>
      </div>
    </div>
  )
};


export default connect (null, { verify }) (Activate);