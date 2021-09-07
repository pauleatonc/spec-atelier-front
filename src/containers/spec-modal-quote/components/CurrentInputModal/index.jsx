import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { COLOR_GREEN_UNDERLINE } from '../../../../config/constants/styled-vars';

import { TableInput } from './styles';

const CurrentInputModal = ({
	value,
	type,
	disabled,
	tableInputType,
	...restProps
}) => {
	const [currentValue, setCurrentValue] = useState(value);
	const onChangeCurrentValue = ({
		target: {
			value: inputValue,
			validity: { valid },
		},
	}) => {
		if (valid) setCurrentValue(inputValue);
	};

	
	return (
		<TableInput
			type="text"
			value={currentValue}
			onChange={onChangeCurrentValue}
			colorUnderline={COLOR_GREEN_UNDERLINE}
			{...restProps}
		/>
	);
};

CurrentInputModal.defaultProps = {
	type: 'text',
};
CurrentInputModal.propTypes = {
	value: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'underline', 'form']),
	tableInputType: PropTypes.oneOf(['name', 'company', 'email']).isRequired
};

export default CurrentInputModal;
