import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { reset_password } from '../actions/auth';
import './ResetPassword.css';

function ResetPassword ({ reset_password }) {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();

    reset_password (email);
    setRequestSent (true);
  };
 
  if (requestSent) {
    return <Navigate to='/' />
  }

  return (
    <div className='resetPassword'>
      <h1 className='resetPassword__title'>Request Password Reset:</h1>
      <form className='resetPassword__form' onSubmit={e => onSubmit(e)}>
        <div className='resetPassword__form__group'>
          <input
            className='resetPassword__form__input'
            type='email'
            placeholder='Email *'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        
        <Button className='resetPassword__button__primary' type='submit'>Reset Password</Button>
      </form>

    </div>
  )
};

export default connect (null, { reset_password }) (ResetPassword);