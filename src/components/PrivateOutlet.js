import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const PrivateOutlet = ({ isAuthenticated }) => {
  
  const location = useLocation();
  if (isAuthenticated === null) {
    return null;
  }
  return isAuthenticated
    ? <Outlet />
    : <Navigate to='/login' state={{ from: location }} replace />;
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateOutlet);