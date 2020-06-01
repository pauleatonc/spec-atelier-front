import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  COLOR_WHITE,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
} from '../../config/constants/styled-vars';

const BaseButton = styled.button`
  align-items: center;
  color: ${COLOR_WHITE};
  cursor: pointer;
  border-radius: 18px;
  display: inline-flex;
  font-family: Lato;
  height: 34px;
  justify-content: center;
  min-width: 107px;
  padding: 0 19px;
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

BaseButton.propTypes = {
  width: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
};

BaseButton.defaultProps = {
  inverse: false,
};

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ inverse }) => inverse ? COLOR_WHITE : COLOR_PRIMARY};
  border: 1px solid ${({ inverse }) => inverse ? COLOR_PRIMARY : COLOR_WHITE};
  color: ${({ inverse }) => inverse ? COLOR_PRIMARY : COLOR_WHITE};
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: ${({ inverse }) => inverse ? COLOR_WHITE : COLOR_SECONDARY};
  border: 1px solid ${({ inverse }) => inverse ? COLOR_SECONDARY : COLOR_WHITE};
  color: ${({ inverse }) => inverse ? COLOR_SECONDARY : COLOR_WHITE};
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
`;

export const DefaultButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid rgba(33, 33, 33, 0.23);
  color: rgba(33, 33, 33, 0.45);
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 1px;
`;

export const GrayButton = styled(BaseButton)`
  background-color: rgba(33, 33, 33, 0.25);
  border: 1px solid rgba(33, 33, 33, 0.25);
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.71;
  letter-spacing: 1px;
`;

export const CancelButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid transparent;
  color: #31CBB6;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
`;
