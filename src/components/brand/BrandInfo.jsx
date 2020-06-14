import React from 'react';

import {
  BrandContainer,
  Header,
  Icon,
  Country,
  CountryIcon,
  CountryName,
  Description,
  Buttons,
  LinksContainer,
  LinkText,
} from './brandInfo.styles';

import {
  Button,
  ButtonLink,
  ButtonSocialMedia,
} from '../SpecComponents';

const BrandInfo = ({ onClickContact, brand }) => {

  if (!brand) return <BrandContainer />;
  const addressToQuery = brand?.address.replace(/\s+/g, '-') || ''; 
  return (
    <BrandContainer>
      <Header>
        <Icon />
        <Country >
          <CountryIcon />
          <CountryName>
            {brand.country}
          </CountryName>
        </Country>
      </Header>
      <Description dangerouslySetInnerHTML={{ __html: brand.description }} />
      <Buttons>
        <Button onClick={onClickContact} variant="secondary">
          Contactar
        </Button>
        <LinksContainer>
          <ButtonLink type="web">
            <LinkText target="_blank" href={brand.web}>{brand.web}</LinkText>
          </ButtonLink>
          <ButtonLink type="address">
            <LinkText target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${addressToQuery}`}>{brand.address}</LinkText>
          </ButtonLink>
          <ButtonLink type="phone">
            <LinkText target="_blank" href={`tel:${brand.phone}`}>{brand.phone}</LinkText>
          </ButtonLink>
        </LinksContainer>
      </Buttons>
      <LinksContainer>
        {brand.social_media.map(sm => (
          <ButtonSocialMedia key={sm.name} type={sm.name} target="_blank" to={sm.url} />
        ))}
      </LinksContainer>
    </BrandContainer>
  )
};

export default BrandInfo;