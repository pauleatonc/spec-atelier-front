import { formatDate } from '../../helpers/helpers';

const format = 'DD/MM/YYYY';

export const formatTableData = (data) => {
	return !!data.length
		? data.map((item) => ({
				...item,
				...(!!item.updated_at
					? { updated_at: formatDate(item.updated_at, format) }
					: {}),
				...(!!item.created_at
					? { created_at: formatDate(item.created_at, format) }
					: {}),
		  }))
		: [];
};
