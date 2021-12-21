import moment from 'moment';

export const formatDate = (date, format = 'DD-MM-YYYY') => {
	const tempDate = moment(date);
	return tempDate.isValid() ? tempDate.format(format) : '';
};

export const mapToSelector = (data) => ({
	...data,
	label: data.name || data.label || '',
	value: data.id || data.value || data.name,
});
