import React, { useEffect } from 'react';
import LoginHeader from '../components/LoginHeader';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
      checkAuthenticated();
      load_user();
  }, []);

  return (
      <div>
          <LoginHeader />
          {children}
      </div>
  );
};

export default connect(null, { checkAuthenticated, load_user }) (Layout);