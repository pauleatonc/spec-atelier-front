import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../containers/auth/auth.actions';
import {
	ProfileButton,
	ProfileOptions,
	OptionsContent,
	Option,
	Separator,
	ProfilePictureContainer,
	ProfilePictureImage,
} from './NavProfile.styles';

const NavProfile = () => {
	const [showOptions, setShowOtions] = useState(false);
	const { user } = useSelector((state) => state.profile);
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
			<ProfileOptions show={showOptions}>
				<OptionsContent>
					<Link to="/profile" style={{ textDecoration: 'none' }}>
						<Option>Perfil</Option>
					</Link>
					<Separator />
					<Option onClick={onLogout}>Cerrar sesión</Option>
				</OptionsContent>
			</ProfileOptions>
		</>
	);
};

export default NavProfile;
