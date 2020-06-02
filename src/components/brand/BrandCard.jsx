import React from 'react';
import PropTypes from 'prop-types';
import {
  Name,
  Quantity,
  Description,
  ButtonContainer,
} from './BrandCard.styles';

import {
  Card,
  CardImg,
  TitleContainer,
  Line,
  DescriptionContainer,
} from '../card/Card';

import {
  Button,
} from '../SpecComponents';

const BrandCard = ({
  brand,
  onClickBrand,
  onClickContact,
}) => {
  const {
    name,
    image,
    products_count,
  } = brand;

  const onSelectBrand = () => onClickBrand(brand);
  const onSelectContact = () => onClickContact(brand);

  return (
    <Card>
      <CardImg img={image} onClick={onSelectBrand} />
      <TitleContainer>
        <Name>{name}</Name>
        <Quantity>Products ({products_count})</Quantity>
      </TitleContainer>
      <Line />
      <DescriptionContainer>
        <Description>
          1a10 Design is a study and author design brand of the architect Felipe Arriagada, which starts at the end of 2013 in Santiago, Chile, where he develops furniture products and architectural and interior design projects.
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

BrandCard.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string,
  }),
};

BrandCard.defaultProps = {
  brand: {
    name: '',
  },
};

export default BrandCard;
