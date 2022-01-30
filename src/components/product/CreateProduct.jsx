import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Content,
	InfoContainer,
	Title,
	Text,
	ButtonContainer,
	IconContainer,
} from './CreateProduct.styles';
import { Button, Image } from '../SpecComponents';
import { ICON_CREATE_PRODUCT } from '../../assets/Images';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

const CreateProduct = ({ onClickCreate }) => (
	<Container>
		<Content>
			<IconContainer>
				<Image src={ICON_CREATE_PRODUCT} height="108px" width="108px" />
			</IconContainer>
			<InfoContainer>
				<Title>¡Vaya, aún no tienes productos en esta partida!</Title>
				<Text>Comienza creando uno para usar en tus específicaciones.</Text>
			</InfoContainer>
			<ButtonContainer>
				<Button onClick={onClickCreate} variant={VARIANTS_BUTTON.PRIMARY}>
					<i className="fa fa-plus" style={{ marginRight: '8px' }} /> Crear
					producto
				</Button>
			</ButtonContainer>
		</Content>
	</Container>
);

CreateProduct.propTypes = {
	onClickCreate: PropTypes.func.isRequired,
};

export default CreateProduct;
