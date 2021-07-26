import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../../../components/SpecComponents';
import { COLOR_GREEN_UNDERLINE } from '../../../../config/constants/styled-vars';

const CurrentInputTable = ({
	value,
	type,
	disabled,
	tableInputType,
	enlacer,
	...restProps
}) => {
	const [currentValue, setCurrentValue] = useState(value);
	const [currentValueQ, setCurrentValueQ] = useState(value);
	const [currentValueS, setCurrentValueS] = useState(value);
	const [body, setBody] = useState([]);
	const onChangeCurrentValue = ({ target: { value: inputValue} }) => {
		setCurrentValue(inputValue)
		switch (tableInputType) {
			case 'quantity':
				setCurrentValueQ(parseInt(inputValue))
				break;
			case 'subtotal':
				setCurrentValueS(parseInt(inputValue))
				break;
			default:
				break;
		}
		// tableInputType === 'quantity' && setCurrentValueQ(parseInt(inputValue))
		// tableInputType === 'subtotal' && setCurrentValueS(parseInt(inputValue))
	};
	const handleSubmitQuantity = ({ target: { value: inputValue} }) => {
		// TODO: Add endpoint call
		switch (tableInputType) {
			case 'quantity':
				setBody(body => [...body,
				{
					id: enlacer,
					quantity: currentValueQ,
					price_user: currentValueS
				}])
				break;
			case 'subtotal':
				setBody(body => [...body,
				{
					id: enlacer,
					quantity: currentValueQ,
					price_user: currentValueS
				}])
				break;
			default:
				break;
		}
	};
	console.log(body);
	return (
		<Input
			type="underline"
			inputType="number"
			width="18px"
			value={currentValue}
			onChange={onChangeCurrentValue}
			colorUnderline={COLOR_GREEN_UNDERLINE}
			onBlur={handleSubmitQuantity}
			enlacer="0"
			{...restProps}
		/>
	);
};

CurrentInputTable.defaultProps = {
	value: 0,
	type: 'number',
	disabled: false,
	enlacer: 0
};
CurrentInputTable.propTypes = {
	value: PropTypes.number,
	type: PropTypes.oneOf(['number', 'underline', 'form']),
	tableInputType: PropTypes.oneOf(['subtotal', 'quantity']).isRequired,
	disabled: PropTypes.bool,
	enlacer: PropTypes.number,
};

export default CurrentInputTable;
