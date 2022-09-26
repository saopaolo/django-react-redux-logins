import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { signup } from '../actions/auth';
import './Signup.css';
import { Helmet } from 'react-helmet';
import { setAlert } from '../actions/alert';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';

function Signup({setAlert, signup, isAuthenticated }) {

  const [ strongpassword, setStrongpassword ] = useState('s');

  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    re_password: ''
  });

  const { name, email, password, re_password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();

    if (password !== re_password)
            setAlert('Passwords do not match', 'error');
    if (password === re_password) {
      signup (name, email, password, re_password);
      setAccountCreated(true);
    }
  };
 
  if (isAuthenticated) {
    return <Navigate to='/' />
  }
  if (accountCreated) {
    return <Navigate to='/login' />
  }

  return (
    <div className='login'>
      <Helmet>
        <title>Prosperity - Sign Up</title>
        <meta 
          name='description'
          content='sign up page'
        />
      </Helmet>
      <h1 className='signup__title'>Sign Up</h1>
      <p className='signup__lead'>Create your Account</p>
      <form className='signup__form' onSubmit={e => onSubmit(e)}>
        <div className='signup__form__group'>
          <input
            className='signup__form__input'
            type='text'
            placeholder='Name *'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='signup__form__group'>
          <input
            className='signup__form__input'
            type='email'
            placeholder='Email *'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='signup__form__group__password'>
          <input
            className='signup__form__input'
            type='password'
            placeholder='Password *'
            name='password'
            value={password}
            onChange={e => {onChange(e); setStrongpassword(e.target.value)}}
            minLength='8'
            required
          />
        </div>
        <PasswordStrengthMeter strongpassword={strongpassword} />
        <div className='signup__form__group'>
          <input
            className='signup__form__input'
            type='password'
            placeholder='Confirm Password *'
            name='re_password'
            value={re_password}
            onChange={e => onChange(e)}
            minLength='8'
            required
          />
        </div>
        <Button className='signup__button__main' type='submit'>Register</Button>
      </form>
      <p className='signup__authtext'>
        Already have an account? <Link to='/login' className='signup__link'>Login</Link>
      </p>

    </div>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps, { setAlert, signup }) (Signup);