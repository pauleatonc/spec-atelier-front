import React from 'react';

import { Container, ImageProfile } from './styles';

const IconUser = ({ user, size, fontSize, zIndex, horizontalList }) => {
	return (
		<Container
			size={size}
			fontSize={fontSize}
			zIndex={zIndex}
			horizontalList={horizontalList}
		>
			{user.profile_image ? (
				<ImageProfile src={user.profile_image} alt="Profile image" />
			) : (
				user.name.charAt(0)
			)}
		</Container>
	);
};

export default IconUser;
