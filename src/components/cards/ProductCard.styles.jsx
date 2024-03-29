import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  BIM_ACTIVE_SOURCE,
  BIM_SOURCE,
  CERT_ACTIVE_SOURCE,
  CERT_SOURCE,
  CHECK_SOURCE,
  DWG_ACTIVE_SOURCE,
  DWG_ICON,
  PLUS_SOURCE,
  TECH_ACTIVE_SOURCE,
  TECH_ICON,
} from '../../assets/Images';
import {
  MINE_SHAFT,
  MEDIA_QUERY_SMALL,
  WHITE,
  CONCRETE,
  TURQUOISE,
  ALTO,
  JAVA,
  NOBEL,
  GALLERY,
  BOULDER,
  ALTO_OPACITY,
  MINE_SHAFT_RGB,
  BLACK,
} from '../../config/constants/styled-vars';

const hoverDefaultProps = {
  hover: false,
};

const hoverPropTypes = {
  hover: PropTypes.bool,
};

export const DotsIcon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 4px;
  user-select: none;
  visibility: hidden;
`;

export const Root = styled.div`
  background-color: ${({ selected = false }) => (selected ? CONCRETE : WHITE)};
  border: 1px solid
    ${({ hover = false, selected = false, isItemsUsed }) =>
      (hover && !selected) || isItemsUsed ? TURQUOISE : ALTO};
  border-radius: 9px;
  cursor: pointer;
  display: inline-grid;
  grid-template-rows: 146px 43px;
  height: 190px;
  margin: 0 0 16px;
  min-width: 300px;
  overflow: visible;
  position: relative;
  width: 100%;
  &:hover {
    box-shadow: rgba(${BLACK}, 0.1) 1px 1px 30px;
  }
  &:hover ${DotsIcon} {
    visibility: visible;
  }
  ${MEDIA_QUERY_SMALL} {
    margin-bottom: 13px;
  }
`;

Root.defaultProps = {
  ...hoverDefaultProps,
  selected: false,
};

Root.propTypes = {
  ...hoverPropTypes,
  selected: PropTypes.bool,
};

export const Content = styled.div`
  display: grid;
  grid-template-columns: 105px auto;
  overflow: hidden;
`;

export const Photo = styled.section`
  background-color: ${ALTO_OPACITY};
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 24px 15px 15px;
`;

const BaseDetails = styled.p`
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  margin: 0 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled(BaseDetails)`
  color: ${MINE_SHAFT};
  font-size: 11px;
  letter-spacing: 0.92px;
`;

export const Description = styled(BaseDetails)`
  color: rgba(${MINE_SHAFT_RGB}, 0.51);
  font-size: 10px;
  letter-spacing: 0.83px;
  -webkit-line-clamp: 3;
`;

export const Category = styled.p`
  color: ${MINE_SHAFT};
  font-size: 10px;
  letter-spacing: 0.83px;
  margin: auto 0 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Reference = styled.p`
  color: ${MINE_SHAFT};
  font-size: 10px;
  letter-spacing: 0.83px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Footer = styled.section`
  border-top: 1px solid ${ALTO};
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 22px 0 8px;
`;

export const Actions = styled.section`
  align-items: center;
  display: flex;
`;

const BaseIcon = styled.span`
  background-position: center center;
  background-repeat: no-repeat;
  display: block;
  height: 24px;
  width: 24px;
`;

export const DwgIcon = styled(BaseIcon)`
  background-image: url('${({ hover = false }) =>
    hover ? DWG_ACTIVE_SOURCE : DWG_ICON}');
`;

DwgIcon.defaultProps = hoverDefaultProps;
DwgIcon.propTypes = hoverPropTypes;

export const BimIcon = styled(BaseIcon)`
  background-image: url('${({ hover = false }) =>
    hover ? BIM_ACTIVE_SOURCE : BIM_SOURCE}');
`;

BimIcon.defaultProps = hoverDefaultProps;
BimIcon.propTypes = hoverPropTypes;

export const TechIcon = styled(BaseIcon)`
  background-image: url('${({ hover = false }) =>
    hover ? TECH_ACTIVE_SOURCE : TECH_ICON}');
`;

TechIcon.defaultProps = hoverDefaultProps;
TechIcon.propTypes = hoverPropTypes;

export const CertIcon = styled(BaseIcon)`
  background-image: url('${({ hover = false }) =>
    hover ? CERT_ACTIVE_SOURCE : CERT_SOURCE}');
`;

CertIcon.defaultProps = hoverDefaultProps;
CertIcon.propTypes = hoverPropTypes;

export const SeeMore = styled.section`
  align-items: center;
  color: ${({ hover = false }) => (hover ? JAVA : BOULDER)};
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  font-weight: bold;
  visibility: ${({ show = false }) => (show ? 'visible' : 'hidden')};
  &:hover {
    text-decoration: ${({ show = false }) => (show ? 'underline' : 'none')};
  }
`;

SeeMore.defaultTypes = {
  ...hoverDefaultProps,
  show: false,
};

SeeMore.propTypes = {
  ...hoverPropTypes,
  show: PropTypes.bool,
};

const BaseStates = styled.section`
  background-size: 15px 15px;
  height: 15px;
  margin: 11px 14px 0 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 15px;
`;

export const Add = styled(BaseStates)`
  background-image: url('${PLUS_SOURCE}');
`;

export const Check = styled(BaseStates)`
  background-image: url('${CHECK_SOURCE}');
`;

export const ActionsMenuItem = styled.section`
  background-color: transparent;
  border-bottom: 1px solid ${NOBEL};
  color: ${MINE_SHAFT};
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 14px 0px 16px 35px;
  width: 187px;
  &:hover {
    background-color: ${GALLERY};
  }
  &:last-child {
    border-bottom: 0;
  }
`;
