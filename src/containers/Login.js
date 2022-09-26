import React, { useState } from 'react';
import { Link, Navigate, useLocation  } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { login } from '../actions/auth';
import './Login.css';
import { Helmet } from 'react-helmet';

function Login({ login, isAuthenticated }) {

  const { state } = useLocation();
  const { from } = state || {};

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();

    login (email, password)
  };
 
  if (isAuthenticated) {
    return (
      <Navigate
        to={from.pathname || '/'}
        replace
        state={from.state}
      />
    );
  }

  return (
    <div className='login'>
      <Helmet>
        <title>Prosperity - Login</title>
        <meta
          name='description'
          content='login page'
        />
      </Helmet>
      <h1 className='login__title'>Login</h1>
      <p className='login__lead'>Login into your Account</p>
      <form className='login__form' onSubmit={e => onSubmit(e)}>
        <div className='login__form__group'>
          <input
            className='login__form__input'
            type='email'
            placeholder='Email *'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='login__form__group'>
          <input
            className='login__form__input'
            type='password'
            placeholder='Password *'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='8'
            required
          />
        </div>
        <Button className='login__button__main' type='submit'>Login</Button>
      </form>
      <p className='link__to__Signup'>
        Do not have an account? <Link to='/signup' className='login__link'>Register</Link>
      </p>
      <p className='link__to__resetPassword'>
        Forgot Password? <Link to='/reset-password' className='reset__password__link'>Reset Password</Link>
      </p>

    </div>
  )
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps, { login }) (Login);