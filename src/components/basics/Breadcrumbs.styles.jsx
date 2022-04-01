import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ARROW_LEFT_SOURCE } from '../../assets/Images';
import {
  BOULDER,
  MEDIA_QUERY_SMALL,
  PUERTO_RICO,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
  align-items: center;
  display: flex;
  height: ${({ customHeight }) =>
    customHeight ? `${customHeight}px` : '100%'};
  width: ${({ customWidth }) => (customWidth ? `${customWidth}%` : 'auto')};
  justify-content: ${({ justifyCenter }) =>
    justifyCenter ? 'center' : 'start'};
`;

export const Item = styled.section`
  align-items: center;
  color: ${({ selected = false }) => (selected ? PUERTO_RICO : BOULDER)};
  cursor: ${({ isLink = false }) => (isLink ? 'pointer' : 'default')};
  display: inline-flex;
  height: 100%;
  padding: 0 4px;
  position: relative;
  &:hover {
    text-decoration: ${({ isLink = false }) =>
      isLink ? 'underline' : 'initial'};
  }
  ${MEDIA_QUERY_SMALL} {
    margin: 0 5px;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const ItemText = styled.p`
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100px;
`;

Item.defaultProps = {
  isLink: false,
  selected: false,
};
Item.propTypes = {
  isLink: PropTypes.bool,
  selected: PropTypes.bool,
};

export const Underline = styled.div`
  background-color: ${PUERTO_RICO};
  bottom: -1px;
  height: 2px;
  left: 0;
  position: absolute;
  width: 100%;
`;

export const ArrowLeft = styled.span`
  background-image: url('${ARROW_LEFT_SOURCE}');
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  height: 18px;
  width: 18px;
`;
