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
	customOnBlur,
	row,
	...restProps
}) => {
	const [currentValue, setCurrentValue] = useState(value);
	const [body, setBody] = useState([]);
	const onChangeCurrentValue = ({ target: { value: inputValue} }) => {
		setCurrentValue(inputValue)
	};
	const handleSubmit = ({ target: { value: inputValue} }) => {
		// TODO: Add endpoint call

		// switch (tableInputType) {
		// 	case 'quantity':
		// 		setBody(body => [
		// 		{
		// 			id: enlacer,
		// 			quantity: currentValueQ,
		// 			price_user: currentValueS
		// 		}])
		// 		break;
		// 	case 'subtotal':
		// 		setBody(body => [
		// 		{
		// 			id: enlacer,
		// 			quantity: currentValueQ,
		// 			price_user: currentValueS
		// 		}])
		// 		break;
		// 	default:
		// 		break;
		// }
	};

	return (
		<Input
			type="underline"
			inputType="number"
			width="58px"
			value={currentValue}
			onChange={onChangeCurrentValue}
			colorUnderline={COLOR_GREEN_UNDERLINE}
			onBlur={handleSubmit}
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
	customOnBlur: PropTypes.func,
	row: PropTypes.any
};

export default CurrentInputTable;
