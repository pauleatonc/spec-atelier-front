import moment from 'moment';

export const formatDate = date => {
  const tempDate = moment(date);
  return tempDate.isValid() ? tempDate.format('DD-MM-YYYY') : '';
};

export const mapToSelector = data => ({
  ...data,
  label: data.name || data.label || '',
  value: data.id || data.value || data.name,
});
