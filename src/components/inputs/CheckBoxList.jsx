import React from 'react';
import { Option, OptionCheckboxIcon, OptionText } from './CheckBoxList.styles';
import { CHECKBOX_OFF_SOURCE, CHECKBOX_ON_SOURCE } from '../../assets/Images';

const CheckBoxList = ({ options, onItemClick, values }) => (
  <>
    {options.map(({ key, text }) => {
      return (
        <Option key={key} onClick={() => onItemClick(key)}>
          <OptionCheckboxIcon
            src={values[key] ? CHECKBOX_ON_SOURCE : CHECKBOX_OFF_SOURCE}
          />
          <OptionText>{text}</OptionText>
        </Option>
      );
    })}
  </>
);

export default CheckBoxList;
