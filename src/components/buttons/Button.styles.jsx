import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  WHITE,
  PRIMARY,
  SECONDARY,
  MINE_SHAFT_RGB,
  TURQUOISE,
  SILVER_CHALICE,
  WHITE_OPACITY,
  SILVER_CHALICE_OPACITY,
  DOVE_GRAY,
} from '../../config/constants/styled-vars';

const BaseButton = styled.button`
  align-items: center;
  color: ${WHITE};
  cursor: pointer;
  border-radius: 19.5px;
  display: inline-flex;
  font-size: ${({ fontSize = '16px' }) => fontSize};
  font-weight: bold;
  height: ${({ height = '34px' }) => height};
  justify-content: center;
  line-height: 1;
  margin: ${({ margin = 'initial' }) => margin};
  min-width: 100px;
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
    opacity: 0.8;
    user-select: none;
  }
`;

BaseButton.defaultProps = {
  inverse: false,
  margin: 'initial',
  fontSize: '16px',
  height: '34px',
};
BaseButton.propTypes = {
  inverse: PropTypes.bool,
  margin: PropTypes.string,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string.isRequired,
};

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ inverse }) => (inverse ? WHITE : PRIMARY)};
  border: 1px solid ${PRIMARY};
  color: ${({ inverse }) => (inverse ? PRIMARY : WHITE)};
  &:hover {
    color: ${({ inverse }) => (inverse ? PRIMARY : WHITE_OPACITY)};
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: ${({ inverse }) => (inverse ? WHITE : SECONDARY)};
  border: 1px solid ${SECONDARY};
  color: ${({ inverse }) => (inverse ? SECONDARY : WHITE)};
`;

export const DefaultButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid rgba(${MINE_SHAFT_RGB}, 0.23);
  color: rgba(${MINE_SHAFT_RGB}, 0.45);
`;

export const GrayButton = styled(BaseButton)`
  background-color: ${({ inverse }) => (inverse ? WHITE : SILVER_CHALICE)};
  border: 2px solid ${SILVER_CHALICE};
  color: ${({ inverse }) => (inverse ? SILVER_CHALICE : WHITE)};
  &:hover {
    background-color: ${({ inverse }) =>
      inverse ? SILVER_CHALICE_OPACITY : WHITE};
    color: ${SILVER_CHALICE};
  }
  &:active {
    border: 2px solid ${DOVE_GRAY};
    color: ${DOVE_GRAY};
  }
`;

export const CancelButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${TURQUOISE};
`;

export const CancelSecondaryButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${SECONDARY};
`;
export const CancelNotificationButton = styled(BaseButton)`
  background-color: transparent;
  border: 2px solid ${SILVER_CHALICE};
  color: ${SILVER_CHALICE};
`;
