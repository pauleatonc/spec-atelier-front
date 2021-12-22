import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { JAVA } from '../../../../config/constants/styled-vars';

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
		inputValue = inputValue.replace('$','');
		inputValue = inputValue.replaceAll('.','');
		if (tableInputType === 'price_user') {
			if(parseInt(inputValue) <= 99){
				setCurrentValue(100);
				inputValue = 100;
			}
			if (parseInt(inputValue) > 99 && prevValueP !== parseInt(inputValue, 10)) {
				onBlurInput(tableInputType, inputValue, row);
				setPrevValueP(parseInt(inputValue, 10));
			}
		} else if (tableInputType === 'quantity') {
			if(parseInt(inputValue) <= 0){
				setCurrentValue(1);
				inputValue = 1;
			}
			if (parseInt(inputValue) > 0 && prevValueQ !== parseInt(inputValue, 10)) {
				onBlurInput(tableInputType, inputValue, row);
				setPrevValueQ(parseInt(inputValue, 10));
			}
		}
	};
	return (
		<>
		{tableInputType === "quantity"?
		<CurrencyInput
			type="text"
			typeInput="quantity"
			value={currentValue}
			onChange={onChangeCurrentValue}
			colorUnderline={JAVA}
			onBlur={handleBlur}
			{...restProps}
		/>
		:
		<CurrencyInput 
			placeholder="$0" 
			type="text"
			typeInput="price"
			value={currentValue}
			onChange={onChangeCurrentValue}
			colorUnderline={JAVA}
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
	value: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['number', 'underline', 'form']),
	tableInputType: PropTypes.oneOf(['price_user', 'quantity']).isRequired,
	onBlurInput: PropTypes.func.isRequired,
};

export default CurrentInputTable;
