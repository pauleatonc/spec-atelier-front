import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDwg from '../../assets/images/icons/dwg.svg';
import IconDwgActive from '../../assets/images/icons/dwg_active.svg';
import IconBim from '../../assets/images/icons/bim.svg';
import IconBimActive from '../../assets/images/icons/bim_active.svg';
import IconTech from '../../assets/images/icons/tech.svg';
import IconTechActive from '../../assets/images/icons/tech_active.svg';

const icons = {
	dwg: `url('${IconDwg}')`,
	dwg_active: `url('${IconDwgActive}')`,
	bim: `url('${IconBim}')`,
	bim_active: `url('${IconBimActive}')`,
	tech: `url('${IconTech}')`,
	tech_active: `url('${IconTechActive}')`,
};

export const Icons = styled.section`
	display: flex;
	align-items: center;
	margin: 8px auto;
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
