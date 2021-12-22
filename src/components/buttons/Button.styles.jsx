import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  WHITE,
  PRIMARY,
  SECONDARY,
} from '../../config/constants/styled-vars';

const BaseButton = styled.button`
  align-items: center;
  color: ${WHITE};
  cursor: pointer;
  border-radius: 18px;
  display: inline-flex;
  font-family: Lato;
  font-size: ${({ size = 'md' }) => size === 'md' ? '16px' : '12px'};
  font-weight: bold;
  height: ${({ size = 'md' }) => size === 'md' ? '34px' : '21px'};
  justify-content: center;
  line-height: 1;
  margin: ${({ margin = 'initial' }) => margin};
  min-width: 107px;
  padding: ${({ padding = '0 19px'}) => padding };
  width: ${({ width = 'initial' }) => width};

  &:active {
    outline: 0;
    transform: scale(.98);
  }

  &:focus {
    outline: 0;
  }

  &:disabled, &[disabled] {
    cursor: not-allowed;
    opacity: 0.8;
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
  padding: PropTypes.string
};

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ inverse }) => inverse ? WHITE : PRIMARY};
  border: 1px solid ${PRIMARY};
  color: ${({ inverse }) => inverse ? PRIMARY : WHITE};
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: ${({ inverse }) => inverse ? WHITE : SECONDARY};
  border: 1px solid ${SECONDARY};
  color: ${({ inverse }) => inverse ? SECONDARY : WHITE};
`;

export const DefaultButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid rgba(33, 33, 33, 0.23);
  color: rgba(33, 33, 33, 0.45);
`;

export const GrayButton = styled(BaseButton)`
  background-color: rgba(33, 33, 33, 0.25);
  border: 1px solid rgba(33, 33, 33, 0.25);
  color: #FFF;
`;

export const CancelButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid transparent;
  color: #31CBB6;
`;

export const CancelSecondaryButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${SECONDARY};
`;
