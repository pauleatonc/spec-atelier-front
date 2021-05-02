import React from 'react';

import checkboxOffSource from '../../assets/images/icons/checkbox-off.svg';
import checkboxOnSource from '../../assets/images/icons/checkbox-on.svg';

import { Option, OptionCheckboxIcon, OptionText } from './CheckBoxList.styles';

function CheckBoxList({ options, onItemClick, values }) {
	return (
		<>
			{options.map(({ key, text }) => {
				return (
					<Option key={key} onClick={() => onItemClick(key)}>
						<OptionCheckboxIcon
							src={values[key] ? checkboxOnSource : checkboxOffSource}
						/>
						<OptionText>{text}</OptionText>
					</Option>
				);
			})}
		</>
	);
}

export default CheckBoxList;
