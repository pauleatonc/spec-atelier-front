import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	COLOR_WHITE,
	COLOR_PRIMARY,
	COLOR_SECONDARY,
	COLOR_SILVER_CHALICE,
} from '../../config/constants/styled-vars';

const BaseButton = styled.button`
	align-items: center;
	color: ${COLOR_WHITE};
	cursor: pointer;
	border-radius: 18px;
	display: inline-flex;
	font-family: Lato;
	font-size: ${({ size = 'md' }) => (size === 'md' ? '16px' : '12px')};
	font-weight: bold;
	height: ${({ size = 'md' }) => (size === 'md' ? '34px' : '21px')};
	justify-content: center;
	line-height: 1;
	margin: ${({ margin = 'initial' }) => margin};
	min-width: 107px;
	padding: ${({ padding = '0 19px' }) => padding};
	width: ${({ width = 'initial' }) => width};

	&:active {
		outline: 0;
		transform: scale(0.98);
	}

	&:focus {
		outline: 0;
	}

	&:disabled,
	&[disabled] {
		cursor: not-allowed;
		opacity: 0.5;
		user-select: none;
	}
`;

BaseButton.defaultProps = {
	inverse: false,
	margin: 'initial',
	size: 'md',
};
BaseButton.propTypes = {
	inverse: PropTypes.bool,
	margin: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'md']),
	width: PropTypes.string.isRequired,
	padding: PropTypes.string,
};

export const PrimaryButton = styled(BaseButton)`
	background-color: ${({ inverse }) => (inverse ? COLOR_WHITE : COLOR_PRIMARY)};
	border: 1px solid ${COLOR_PRIMARY};
	color: ${({ inverse }) => (inverse ? COLOR_PRIMARY : COLOR_WHITE)};
`;

export const SecondaryButton = styled(BaseButton)`
	background-color: ${({ inverse }) =>
		inverse ? COLOR_WHITE : COLOR_SECONDARY};
	border: 1px solid ${COLOR_SECONDARY};
	color: ${({ inverse }) => (inverse ? COLOR_SECONDARY : COLOR_WHITE)};
`;

export const DefaultButton = styled(BaseButton)`
	background-color: transparent;
	border: 1px solid rgba(33, 33, 33, 0.23);
	color: rgba(33, 33, 33, 0.45);
`;

export const GrayButton = styled(BaseButton)`
	background-color: rgba(33, 33, 33, 0.25);
	border: 1px solid rgba(33, 33, 33, 0.25);
	color: #fff;
`;

export const CancelButton = styled(BaseButton)`
	background-color: transparent;
	border: 1px solid transparent;
	color: #31cbb6;
`;

export const CancelSecondaryButton = styled(BaseButton)`
	background-color: transparent;
	border: 1px solid transparent;
	color: ${COLOR_SECONDARY};
`;
export const CancelNotificationButton = styled(BaseButton)`
	background-color: transparent;
	border: 2px solid ${COLOR_SILVER_CHALICE};
	color: ${COLOR_SILVER_CHALICE};
`;
