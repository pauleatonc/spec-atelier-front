import styled from 'styled-components';
import { ICON_CHILE } from 'assets/Images';
import {
  MINE_SHAFT,
  SILVER,
  MEDIA_QUERY_MEDIUM,
  MEDIA_QUERY_SMALL,
} from 'config/constants/styled-vars';

const icons = {
  Chile: ICON_CHILE,
  España: '',
};

export const ClientContainer = styled.div`
  border-radius: 5px;
  border: 1px solid ${SILVER};
  padding: 28px 28px 12px 28px;
  width: 100%;
  ${MEDIA_QUERY_MEDIUM} {
    padding: 20px 20px 12px 20px;
  }
  ${MEDIA_QUERY_SMALL} {
    padding: 12px 12px 12px 12px;
  }
  height: 538px;
`;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const Icon = styled.div`
  height: 94px;
  width: 54px;
  margin: 8px 0;
`;

export const Country = styled.section`
  display: flex;
  align-items: center;
`;

export const CountryIcon = styled.div`
  background: url(${({ country }) => icons[country]});
  background-repeat: no-repeat;
  background-size: cover;
  height: 24px;
  width: 24px;
  margin: 2px 4px;
`;

export const CountryName = styled.div`
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  margin: 2px 4px;
`;

export const Description = styled.div`
  min-height: 260px;
  font-family: Lato;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  padding: 40px 0 16px;
  max-height: 300px;
  overflow-y: scroll;
`;

export const Buttons = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
`;

export const LinkText = styled.a`
  max-width: 140px;
  min-width: 110px;
  flex: 1;
  overflow: hidden;
  ${MEDIA_QUERY_MEDIUM} {
    min-width: 80px;
  }
  ${MEDIA_QUERY_SMALL} {
    min-width: 60px;
  }
`;

export const ImageClient = styled.img`
  max-height: 85px;
  max-width: 200px;
`;
