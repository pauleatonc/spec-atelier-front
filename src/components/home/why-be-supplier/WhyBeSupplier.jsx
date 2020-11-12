import React from 'react';
import { useHistory } from 'react-router';
import {
	Container,
	Content,
	InfoContainer,
	Title,
	Description,
	ButtonContainer,
} from './WhyBeSupplier.styles';
import Button from '../../buttons/Button';

const WhyBeSupplier = () => {
	const history = useHistory();
	return (
		<Container>
			<Content>
				<InfoContainer>
					<Title>
						¿Por qué ser proveedor?
				</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non erat
						tortor. In eu pulvinar ligula. Aenean leo purus, gravida id commodo
						quis, elementum quis erat. Nam lobortis efficitur felis.
				</Description>
					<ButtonContainer>
						<Button variant="primary" width="100%" onClick={() => history.push('/login')}>únete</Button>
					</ButtonContainer>
				</InfoContainer>
			</Content>
		</Container>
	);
};
export default WhyBeSupplier;
