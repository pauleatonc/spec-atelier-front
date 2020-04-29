import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import NavbarApp from '../../components/navbar/navbar-app/NavbarApp.container';
import NavbarLogin from '../../components/navbar/navbar-login/NavbarLogin.container';

const NavBar = ({ fixed }) => {
  const { isLogin } = useSelector(state => state.auth);
  return isLogin ? <NavbarApp /> : <NavbarLogin fixed={fixed} />;
};

NavBar.propTypes = {
  fixed: PropTypes.bool,
};

NavBar.defaultProps = {
  fixed: false,
};

export default NavBar;
