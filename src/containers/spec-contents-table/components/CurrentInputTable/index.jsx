import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CurrencyInput from './CurrencyInput'

const CurrentInputTable = ({
  value,
  type,
  disabled,
  tableInputType,
  enlacer,
  onBlurInput,
  row,
  ...restProps
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [prevValueP, setPrevValueP] = useState(value);
  const [prevValueQ, setPrevValueQ] = useState(value);
  const onChangeCurrentValue = ({
    target: {
      value: inputValue,
      validity: { valid },
    },
  }) => {
    if (valid) setCurrentValue(inputValue);
  };

  const handleBlur = ({ target: { value: inputValue } }) => {
    let formattedValue = inputValue.replace('$', '');
    formattedValue = formattedValue.replaceAll('.', '');
    if (tableInputType === 'price_user') {
      if (Number(formattedValue) <= 99)
        setCurrentValue(100);
      if (Number(formattedValue) > 99 && prevValueP !== parseInt(formattedValue, 10)) {
        onBlurInput(tableInputType, formattedValue, row);
        setPrevValueP(parseInt(formattedValue, 10));
      }
    } else if (tableInputType === 'quantity') {
      if (Number(formattedValue) <= 0)
        setCurrentValue(1);
      if (Number(formattedValue) > 0 && prevValueQ !== parseInt(formattedValue, 10)) {
        onBlurInput(tableInputType, formattedValue, row);
        setPrevValueQ(parseInt(formattedValue, 10));
      }
    }
  };
  return (
    <>
      {tableInputType === "quantity" ?
        <CurrencyInput
          type="text"
          value={currentValue}
          onChange={onChangeCurrentValue}
          onBlur={handleBlur}
          {...restProps}
        />
        :
        <CurrencyInput
          placeholder="$0"
          type="text"
          value={currentValue}
          onChange={onChangeCurrentValue}
          onBlur={handleBlur}
          {...restProps}
        />}
    </>
  );
};

CurrentInputTable.defaultProps = {
  type: 'number',
};
CurrentInputTable.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['number', 'underline', 'form']),
  tableInputType: PropTypes.oneOf(['price_user', 'quantity']).isRequired,
  onBlurInput: PropTypes.func.isRequired,
};

export default CurrentInputTable;
