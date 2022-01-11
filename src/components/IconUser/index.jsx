import React from 'react';

import { Container, ImageProfile, LetterNameUser } from './styles';

const IconUser = ({ user, size, fontSize, zIndex, horizontalList }) => {
	return (
		<Container
			size={size}
			fontSize={fontSize}
			zIndex={zIndex}
			horizontalList={horizontalList}
		>
			{user.profile_image ? (
				<ImageProfile
					src={
						user.profile_image?.urls?.small ||
						user.profile_image?.urls?.original
					}
					alt="Profile image"
					size={size}
				/>
			) : (
				<LetterNameUser fontSize={fontSize}>
					{user.name ? user.name.charAt(0) : user.email.charAt(0)}
				</LetterNameUser>
			)}
		</Container>
	);
};

export default IconUser;