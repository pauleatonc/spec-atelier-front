import React from 'react';

import {
  ClientContainer,
  Header,
  Icon,
  Country,
  CountryIcon,
  CountryName,
  Description,
  Buttons,
  LinksContainer,
  LinkText,
  ImageClient,
} from './ClientInfo.styles';

import {
  Button,
  ButtonLink,
  ButtonSocialMedia,
} from '../SpecComponents';

const ClientInfo = ({ onClickContact, client }) => {

  if (!client) return <ClientContainer />;
  const addressToQuery = client?.address.replace(/\s+/g, '-') || '';
  return (
    <ClientContainer>
      <Header>
        <ImageClient src={client.logo} />
        <Country >
          <CountryIcon country={client.country}/>
          <CountryName>
            {client.country}
          </CountryName>
        </Country>
      </Header>
      <Description dangerouslySetInnerHTML={{ __html: client.description }} />
      <Buttons>
        <Button onClick={onClickContact} variant="secondary">
          Contactar
        </Button>
        <LinksContainer>
          <ButtonLink type="web">
            <LinkText target="_blank" href={client.web}>{client.web}</LinkText>
          </ButtonLink>
          <ButtonLink type="address">
            <LinkText target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${addressToQuery}`}>{client.address}</LinkText>
          </ButtonLink>
          <ButtonLink type="phone">
            <LinkText target="_blank" href={`tel:${client.phone}`}>{client.phone}</LinkText>
          </ButtonLink>
        </LinksContainer>
      </Buttons>
      <LinksContainer>
        {client.social_media.map(sm => (
          <ButtonSocialMedia key={sm.name} type={sm.name} target="_blank" to={sm.url} />
        ))}
      </LinksContainer>
    </ClientContainer>
  )
};

export default ClientInfo;
