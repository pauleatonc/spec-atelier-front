import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowLeftSource from '../../assets/images/icons/arrow-left.svg';

export const Root = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 11px;
`;

export const Item = styled.section`
  align-items: center;
  color: ${({ selected = false }) => selected ? '#3FBFAD' : '#757575'};
  cursor: ${({ isLink = false }) => isLink ? 'pointer' : 'default'};
  display: inline-flex;
  height: 100%;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 0 12px;
  position: relative;

  &:hover {
    text-decoration: ${({ isLink = false }) => isLink ? 'underline' : 'initial'};
  }
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
  background-color: #3FBFAD;
  bottom: -1px;
  height: 2px;
  left: 0;
  position: absolute;
  width: 100%;
`;

export const ArrowLeft = styled.span`
  background-image: url('${arrowLeftSource}');
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  height: 18px;
  width: 18px;
`;
