import React, { Fragment } from 'react';
import './LoginHeader.css'
import { Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import SortIcon from '@mui/icons-material/Sort';
import Alert from './Alert';

function LoginHeader({ logout, isAuthenticated }) {
  const guestLinks = () => (
    <Fragment>
      <div className='loginHeader__right'>
        <Link className='loginHeader__loginButton' to='/login'><Button>Login</Button></Link>
        <Link className='loginHeader__signupButton' to='/signup'><Button>Sign up</Button></Link>
      </div>
      <div className='loginHeader__max__right'>
      <IconButton><SortIcon className='loginHeader__sortIcon' /></IconButton>
      </div>
    </Fragment>
  );

  const authLinks = () => (
    <a className='loginHeader__logoutButton' href='#!' onClick={logout}><Button>Logout</Button></a>
  );

  return (
    <div className='loginHeader'>
        <div className='loginHeader__left'>
        <Link className='logo' to='/'>Prosperity</Link>
        </div>
        {isAuthenticated ? authLinks() : guestLinks()}
        <Alert />
    </div>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout }) (LoginHeader);
