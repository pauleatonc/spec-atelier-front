import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../containers/auth/auth.actions';
import {
  ProfileButton,
  ProfileOptions,
  OptionsContent,
  Option,
  Separator,
} from './NavProfile.styles';

const NavProfile = () => {
  const [showOptions, setShowOtions] = useState(false);
  const togglOptions = () => setShowOtions(!showOptions);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logoutAction());
  return (
    <>
      <ProfileButton
        type="button"
        onClick={togglOptions}
        onKeyPress={togglOptions}
        isOpen={showOptions}
      >
        <i className="fas fa-user-circle" />
      </ProfileButton>
      <ProfileOptions show={showOptions}>
        <OptionsContent>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <Option>
              Perfil
            </Option>
          </Link>
          <Separator />
          <Option onClick={onLogout}>
            Cerrar sesión
					</Option>
        </OptionsContent>
      </ProfileOptions>
    </>
  );
};

export default NavProfile;
