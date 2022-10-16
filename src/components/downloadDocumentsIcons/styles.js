import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  BIM_ACTIVE_SOURCE,
  BIM_SOURCE,
  DWG_ACTIVE_SOURCE,
  DWG_ICON,
  TECH_ACTIVE_SOURCE,
  TECH_ICON,
} from '../../assets/Images';

const icons = {
  dwg: `url('${DWG_ICON}')`,
  dwg_active: `url('${DWG_ACTIVE_SOURCE}')`,
  bim: `url('${BIM_SOURCE}')`,
  bim_active: `url('${BIM_ACTIVE_SOURCE}')`,
  tech: `url('${TECH_ICON}')`,
  tech_active: `url('${TECH_ACTIVE_SOURCE}')`,
};

export const Icons = styled.section`
  display: flex;
  align-items: center;
  margin-left: ${({ isDetail }) => (isDetail ? '26px' : '0px')};
`;

export const Icon = styled.span`
  width: 28px;
  height: 28px;
  margin: auto;
  background-position: center center;
  background-repeat: no-repeat;
  display: ${({ active }) => (active ? 'block' : 'none')};
  cursor: pointer;
  background-image: ${({ type }) => icons[type]};
  &:hover {
    background-image: ${({ active, type }) =>
      active && icons[`${type}_active`]};
  }
`;

Icon.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.oneOf(['dwg', 'bim', 'tech']),
};

Icon.defaultProps = {
  active: false,
  type: 'dwg',
};
