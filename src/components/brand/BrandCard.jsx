import React from 'react';
import PropTypes from 'prop-types';
import {
  Name,
  Quantity,
  Description,
  ButtonContainer,
  ImageBrand,
  CardImg,
  Country,
} from './BrandCard.styles';

import {
  Card,
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
    logo,
    products_count,
    description,
    country,
  } = brand;

  const onSelectBrand = () => onClickBrand(brand);
  const onSelectContact = () => onClickContact(brand);

  return (
    <Card>
      <CardImg onClick={onSelectBrand} >
        <ImageBrand src={logo} />
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
