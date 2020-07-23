import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { toast } from 'react-toastify';
import DefaultLayout from '../pages/_layouts/default';
import AuthLayout from '../pages/_layouts/auth';
import DashLayout from '../pages/_layouts/dash';

import api from '../services/api';

import { store } from '../store';

import { signOut } from '../store/modules/auth/actions';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isSignin,
  isDash,
  ...rest
}) {
  const dispatch = useDispatch();

  const { signed } = store.getState().auth;
  if (!signed && isPrivate) {
    return <Redirect to="/signin" />;
  }

  async function tokenCheck() {
    try {
      await api.get('/users');
    } catch (err) {
      toast.error(`${err.response.data.erro}`);
      dispatch(signOut());
    }
  }

  if (signed && isPrivate) {
    tokenCheck();
  }

  let Layout = DefaultLayout;
  if (isSignin) {
    Layout = AuthLayout;
  }
  if (isDash) {
    Layout = DashLayout;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

// RouteWrapper.propTypes = {
//  isPrivate: PropTypes.bool,
//  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
// }

// RouteWrapper.defaultProps = {
//  isPrivate: false,
// }
