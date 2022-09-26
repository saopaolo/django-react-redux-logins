import React, { useState } from 'react';
import { Navigate, useMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { reset_password_confirm } from '../actions/auth';
import './ResetPasswordConfirm.css';

function ResetPasswordConfirm ({ reset_password_confirm }) {

  const match = useMatch('/password/reset/confirm/:uid/:token');

  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;

    reset_password_confirm (uid, token, new_password, re_new_password);
    setRequestSent (true);
  };
 
  if (requestSent) {
    return <Navigate to='/' />
  }

  return (
    <div className='resetPasswordConfirm'>
      <form className='resetPasswordConfirm__form' onSubmit={e => onSubmit(e)}>
        <div className='resetPasswordConfirm__form__group'>
            <input
              className='resetPasswordConfirm__form__input'
              type='password'
              placeholder='New Password *'
              name='new_password'
              value={new_password}
              onChange={e => onChange(e)}
              minLength='8'
              required
            />
          </div>
          <div className='resetPasswordConfirm__form__group'>
            <input
              className='resetPasswordConfirm__form__input'
              type='password'
              placeholder='Confirm New Password *'
              name='re_new_password'
              value={re_new_password}
              onChange={e => onChange(e)}
              minLength='8'
              required
            />
          </div>

        <Button className='resetPasswordConfirm__button__primary' type='submit'>Reset Password</Button>
      </form>

    </div>
  )
};

export default connect (null, { reset_password_confirm }) (ResetPasswordConfirm);