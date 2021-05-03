import React from 'react';

import Button from '../../buttons/Button';
import { VARIANTS_BUTTON } from '../../../config/constants/button-variants';

import {
	Container,
	InfoContainer,
	TextBanner,
	Titlebanner,
	VideoBanner,
	ContainerButtonBanner,
} from './styles';

const Header = () => (
	<Container>
		<InfoContainer>
			<TextBanner mBottom="20px">
				<Titlebanner>¿Qué es Spec Atelier?</Titlebanner>
			</TextBanner>
			<TextBanner mBottom="30px">
				Somos una plataforma de generación y gestión digital para la
				especificación de proyectos de construcción.
			</TextBanner>
			<ContainerButtonBanner>
				<Button
					variant={VARIANTS_BUTTON.PRIMARY}
					width="130"
					onClick={() => {}}
				>
					Únete
				</Button>
			</ContainerButtonBanner>
		</InfoContainer>
		<VideoBanner
			title="spec atelier video"
			frameBorder="0"
			scrolling="no"
			marginHeight="0"
			marginWidth="0"
			width="676.4"
			height="380"
			type="text/html"
			src="https://www.youtube.com/embed/Amj4jiTCY7w?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
		/>
	</Container>
);

export default Header;
