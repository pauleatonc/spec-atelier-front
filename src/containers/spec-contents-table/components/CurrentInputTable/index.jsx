import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { COLOR_GREEN_UNDERLINE } from '../../../../config/constants/styled-vars';

import { TableInput } from './styles';

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
	const [prevValueP, setPrevValueP] = useState(0);
	const [prevValueQ, setPrevValueQ] = useState(0);
	const onChangeCurrentValue = ({
		target: {
			value: inputValue,
			validity: { valid },
		},
	}) => {
		if (valid) setCurrentValue(inputValue);
	};
	const handleBlur = ({ target: { value: inputValue } }) => {
		if (tableInputType === 'price_user') {
			if (prevValueP !== parseInt(inputValue, 10)) {
				onBlurInput(tableInputType, inputValue, row.id);
				setPrevValueP(parseInt(inputValue, 10));
			}
		} else if (prevValueQ !== parseInt(inputValue, 10)) {
			onBlurInput(tableInputType, inputValue, row.id);
			setPrevValueQ(parseInt(inputValue, 10));
		}
	};

	return (
		<TableInput
			type="text"
			pattern="[0-9]*"
			value={currentValue}
			onChange={onChangeCurrentValue}
			colorUnderline={COLOR_GREEN_UNDERLINE}
			onBlur={handleBlur}
			{...restProps}
		/>
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
