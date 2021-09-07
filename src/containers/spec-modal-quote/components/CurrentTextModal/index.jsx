import React from 'react';
import PropTypes from 'prop-types';
import {
	Root,
	Label,
	Textarea as TextareaBase,
	CountCharacter,
} from './styles';

/**
 * The Textarea' component.
 */
const CurrentTextrModal = (props) => {
	const {
		label,
		placeholder,
		value,
		name,
		minHeightTextArea,
		maxlength,
	} = props;


	return (
		<Root>
			{label && <Label>{label}</Label>}
			<TextareaBase
				name={name}
				placeholder={placeholder}
				value={value}
				minHeightTextArea={minHeightTextArea}
			/>

			{maxlength && (
				<CountCharacter>{`${value.length}/${maxlength}`}</CountCharacter>
			)}
		</Root>
	);
};

CurrentTextrModal.defaultProps = {
	label: '',
	placeholder: '',
	minHeightTextArea: '152px',
};
CurrentTextrModal.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	minHeightTextArea: PropTypes.string,
};

export default CurrentTextrModal;