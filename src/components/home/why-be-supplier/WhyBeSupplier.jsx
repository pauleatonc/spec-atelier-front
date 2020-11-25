import React from 'react';
import {
	Container,
	Content,
	InfoContainer,
	Title,
	Description,
	ButtonContainer,
} from './WhyBeSupplier.styles';
import Button from '../../buttons/Button';
import { useHistory } from 'react-router';

const WhyBeSupplier = () => {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <InfoContainer>
          <Title>
            ¿Quieres ser proveedor?
          </Title>
          <Description>
            Publica tus productos y soluciones costructivas en SpecAtelier
            para que nuestros usuario puedan especificarlas en sus proyectos.
            Aumenta la demanda con un solo click
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
