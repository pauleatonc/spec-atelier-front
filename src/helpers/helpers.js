import moment from 'moment';

export const formatDate = date => {
  const tempDate = moment(date);
  return tempDate.isValid() ? tempDate.format('DD-MM-YYYY') : '';
};