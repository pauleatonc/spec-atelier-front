import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClickAwayListener from 'react-click-away-listener';
import { logoutAction } from '../../../containers/auth/auth.actions';
import {
	ProfileButton,
	ProfileOptions,
	OptionsContent,
	Option,
	Separator,
	ProfilePictureContainer,
	ProfilePictureImage,
	ProfileInfo,
	ContainerNameUser,
	InfoUserName,
} from './NavProfile.styles';

const NavProfile = () => {
	const [showOptions, setShowOptions] = useState(false);
	const { user } = useSelector((state) => state.profile);
	const toggleOptions = () => setShowOptions(!showOptions);
	const dispatch = useDispatch();
	const onLogout = () => dispatch(logoutAction());
	return (
		<>
      <ProfileButton
        type="button"
        onClick={toggleOptions}
        onKeyPress={toggleOptions}
        isOpen={showOptions}
      >
				<ProfilePictureContainer>
					{user?.profile_image?.urls ? (
						<ProfilePictureImage
							src={user?.profile_image?.urls.original}
							alt="profile icon"
						/>
					) : (
						<i className="fas fa-user-circle" />
					)}
				</ProfilePictureContainer>
			</ProfileButton>
      <ClickAwayListener onClickAway={showOptions ? toggleOptions : () => {} }>
        <ProfileOptions show={showOptions}>
          <OptionsContent>
            {user.first_name && user.email && (
              <>
                <ProfileInfo>
                  <ProfilePictureContainer>
                    {user?.profile_image?.urls ? (
                      <ProfilePictureImage
                        src={user?.profile_image?.urls.original}
                        alt="profile icon"
                      />
                    ) : (
                      <i className="fas fa-user-circle" />
                    )}
                  </ProfilePictureContainer>
                  <ContainerNameUser>
                    <InfoUserName>{`${user.first_name} ${user.last_name}`}</InfoUserName>
                    <InfoUserName gray>{user.email}</InfoUserName>
                  </ContainerNameUser>
                </ProfileInfo>
                <Separator />
              </>
            )}
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <Option>Perfil</Option>
            </Link>
            <Separator />
            {(user?.superadmin_role || user?.impersonated) && (
              <Link to="/act-as-another-user" style={{ textDecoration: 'none' }}>
                <Option>Suplantar Usuario</Option>
              </Link>
            )}
            <Separator />
            <Option onClick={onLogout}>Cerrar sesión</Option>
          </OptionsContent>
        </ProfileOptions>
      </ClickAwayListener>
		</>
	);
};

export default NavProfile;
