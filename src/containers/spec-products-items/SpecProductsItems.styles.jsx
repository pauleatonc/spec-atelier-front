import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_PRIMARY } from '../../config/constants/styled-vars';

export const Root = styled.div`
  background-color: #FFF;
  height: 100%;
  left: 0;
  padding: 0 23px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export const Header = styled.section`
  height: 46px;
  padding: 10px 0 0;
  width: 100%;
`;

export const Body = styled.section`
  height: calc(100% - 46px);
  overflow-y: auto;
  padding: 32px 12px 15px;
  width: 100%;
`;

export const Loading = styled.div`
  align-items: center;
  color: #212121;
  display: flex;
  font-family: Lato;
  font-size: 16px;
  height: calc(100% - 46px);
  justify-content: center;
  width: 100%;
`;

export const Item = styled.p`
  color: ${({ active }) => active ? COLOR_PRIMARY : '#212121'};
  cursor: pointer;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0 0 15px;

  &:hover {
    color: #3FBFAD;
  }
`;

Item.defaultProps = {
  active: false,
};

Item.propTypes = {
  active: PropTypes.bool,
};
