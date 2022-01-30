import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { BLACK, CARIBBEAN_GREEN } from '../../../../config/constants/styled-vars'

const defaultMaskOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 100, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
}

const defaultMaskOptions2 = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 100, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
}

const CurrentInputStyles = {
  'borderStyle': 'none',
	'outline': 'none',
	'width': '58px',
  'borderBottom': `solid 1px rgba(${BLACK}, 0.28)`,
	'fontFamily': 'Lato',
	'fontSize': '13px',
	'caretColor': `${CARIBBEAN_GREEN}`,
  '&:active': {
    'borderBottom': `1px solid ${CARIBBEAN_GREEN} !important`,
  },
	'&:focus': {
		'borderBottom': `1px solid ${CARIBBEAN_GREEN} !important`,
	}
}

const CurrencyInput = ({ maskOptions, ...inputProps }) => {

  const currencyMask2 = createNumberMask({
    ...defaultMaskOptions2,
    ...maskOptions,
  })

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  })
  

  return <MaskedInput style={CurrentInputStyles} mask={inputProps.typeInput === "quantity" ? currencyMask2 : currencyMask} {...inputProps} />
}

CurrencyInput.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {},
}

CurrencyInput.propTypes = {
  inputmode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.boolean,
    thousandsSeparatorSymbol: PropTypes.string,
    allowDecimal: PropTypes.boolean,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    requireDecimal: PropTypes.boolean,
    allowNegative: PropTypes.boolean,
    allowLeadingZeroes: PropTypes.boolean,
    integerLimit: PropTypes.number,
  }),
  typeInput: PropTypes.string
}

export default CurrencyInput
