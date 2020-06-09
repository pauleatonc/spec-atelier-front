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
} from '../SpecComponents';

const BrandInfo = ({ onClickContact, brand }) => {
  if (!brand) return <BrandContainer />;
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
          <ButtonLink type="web" target="_blank" to={brand.web}>
            <LinkText>{brand.web}</LinkText>
          </ButtonLink>
          <ButtonLink type="address" target="_blank" to={brand.address}>
            <LinkText>{brand.address}</LinkText>
          </ButtonLink>
          <ButtonLink type="phone" target="_blank" to="/">
            <LinkText><a href={`tel:${brand.phone}`}>{brand.phone}</a></LinkText>
          </ButtonLink>
        </LinksContainer>
      </Buttons>
      <LinksContainer>
        {brand.social_media.map(sm => (
          <ButtonLink key={sm.name} type={sm.name} target="_blank" to={sm.url} />
        ))}
      </LinksContainer>
    </BrandContainer>
  )
};

export default BrandInfo;