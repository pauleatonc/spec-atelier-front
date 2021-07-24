import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../../../components/SpecComponents';
import { COLOR_GREEN_UNDERLINE } from '../../../../config/constants/styled-vars';

const CurrentInputTable = ({
	value,
	type,
	disabled,
	tableInputType,
	...restProps
}) => {
	const [currentValue, setCurrentValue] = useState(value);
	const onChangeCurrentValue = ({ target: { value: inputValue } }) =>
		setCurrentValue(inputValue);
	const handleSubmitQuantity = ({ target: { value: inputValue } }) => {
		// TODO: Add endpoint call
		console.log(inputValue);
	};
	return (
		<Input
			type="underline"
			inputType="number"
			width="58px"
			value={currentValue}
			onChange={onChangeCurrentValue}
			colorUnderline={COLOR_GREEN_UNDERLINE}
			onBlur={handleSubmitQuantity}
			{...restProps}
		/>
	);
};

CurrentInputTable.defaultProps = {
	value: '',
	type: 'number',
	disabled: false,
};
CurrentInputTable.propTypes = {
	value: PropTypes.string,
	type: PropTypes.oneOf(['number', 'underline', 'form']),
	tableInputType: PropTypes.oneOf(['subtotal', 'quantity']).isRequired,
	disabled: PropTypes.bool,
};

export default CurrentInputTable;
