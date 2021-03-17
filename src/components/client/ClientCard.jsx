import React from 'react';
import PropTypes from 'prop-types';
import {
  Name,
  Quantity,
  Description,
  ButtonContainer,
  ImageClient,
  CardImg,
  Country,
} from './ClientCard.styles';

import {
  Card,
  TitleContainer,
  Line,
  DescriptionContainer,
} from '../card/Card';

import {
  Button,
} from '../SpecComponents';

const ClientCard = ({
  client,
  onClickClient,
  onClickContact,
}) => {
  const {
    name,
    logo,
    products_count,
    description,
    country,
  } = client;

  const onSelectClient = () => onClickClient(client);
  const onSelectContact = () => onClickContact(client);

  return (
    <Card>
      <CardImg onClick={onSelectClient} >
        <ImageClient src={logo} />
        <Country>{country}</Country>
      </CardImg>
      <TitleContainer>
        <Name>{name}</Name>
        <Quantity>Products ({products_count})</Quantity>
      </TitleContainer>
      <Line />
      <DescriptionContainer>
        <Description>
         {description}
        </Description>
      </DescriptionContainer>
      <ButtonContainer>
        <Button variant="secondary" onClick={onSelectContact}>
          Contactar
        </Button>
      </ButtonContainer>
    </Card>
  );
};

ClientCard.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string,
  }),
};

ClientCard.defaultProps = {
  client: {
    name: '',
  },
};

export default ClientCard;
