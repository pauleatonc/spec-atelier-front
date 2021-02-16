import { useState } from 'react';

/*
 * The Autocomplete custom's hook.
 */
export const useAutocomplete = (
	initialValue = {},
	callback = () => undefined,
) => {
	const [value, setValue] = useState(initialValue);
	const handleChange = (option) => {
		setValue(option);
		callback(option);
	};

	return { value, set: setValue, onChange: handleChange };
};

/**
 * The ComboBox custom's hook.
 */
export const useComboBox = ({
	initialValue = [],
	changeCallback = () => undefined,
	submitCallback = () => undefined,
}) => {
	const [values, setValues] = useState(initialValue);
	const handleChange = (options) => {
		setValues(options);
		changeCallback(options);
	};
	const handleSubmit = (options) => {
		console.log(options);
		setValues(options);
		submitCallback(options);
	};

	return {
		values,
		set: setValues,
		onChange: handleChange,
		onSubmit: handleSubmit,
	};
};

/**
 * The Input custom's hook.
 */
export const useInput = (initialValue = '', type = 'text') => {
	const [value, setValue] = useState(initialValue);
	const handleChange = (event) => {
		if (
			type === 'currency' &&
			event.target.value !== '' &&
			!/^[0-9]+$/.test(event.target.value)
		) {
			return;
		}

		setValue(event.target.value);
	};

	return { type, value, set: setValue, onChange: handleChange };
};

/**
 * The MultiSelect custom's hook.
 */
export const useMultiSelect = (
	initialValue = [],
	callback = () => undefined,
) => {
	const [values, setValues] = useState(initialValue);
	const handleChange = (options) => {
		setValues(options);
		callback(options);
	};

	return { values, set: setValues, onChange: handleChange };
};

/**
 * The Select custom's hook.
 */
export const useSelect = (initialValue = {}, callback = () => undefined) => {
	const [value, setValue] = useState(initialValue);
	const handleChange = (option) => {
		setValue(option);
		callback(option);
	};

	return { value, set: setValue, onChange: handleChange };
};

/**
 * The Textarea custom's hook.
 */
export const useTextarea = (initialValue = '') => {
	const [value, setValue] = useState(initialValue);
	const handleChange = (event) => setValue(event.target.value);

	return { value, set: setValue, onChange: handleChange };
};
