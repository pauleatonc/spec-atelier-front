import moment from 'moment';

export const formatDate = date => {
  const tempDate = moment(date);
  return tempDate.isValid() ? tempDate.format('DD-MM-YYYY') : '';
};

export const mapToSelector = ({ name = '', id }) => ({ id, label: name || '', value: id || name });
