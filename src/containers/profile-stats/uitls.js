import { formatDate } from '../../helpers/helpers';

const format = 'DD/MM/YYYY';

export const PRODUCTS = 'products';
export const PROJECTS = 'projects';

export const STATS = {
	PRODUCTS: 'product_stats',
	PROJECTS: 'project_stats',
};

export const PAGINATOR_OPTIONS = {
	NEXT: 'next',
	PREV: 'prev',
};

export const SORT_ORDER_OPTIONS = {
	ASC: 'asc',
	DESC: 'desc',
};

export const LIMIT_OPTIONS = [10, 20, 30, 40, 50];

export const EXPANDED = {
	HIDE: 'Ocultar',
	VIEW_PROJECTS: 'Ver proyectos',
	VIEW_PRODUCTS: 'Ver productos',
};

export const COLUMNS = {
	PRODUCTS: [
		{
			Header: 'ID',
			accessor: 'id',
			canSort: false,
		},
		{
			Header: 'Nombre de producto',
			accessor: 'name',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Marca',
			accessor: 'brand_name',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Actualización',
			accessor: 'updated_at',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Descargas DWG',
			accessor: 'dwg_downloads',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Descargas BIM',
			accessor: 'bim_downloads',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Descargas PDF',
			accessor: 'pdf_downloads',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Número de especifiaciones',
			accessor: 'projects_count',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
	],
	PROJECTS: [
		{
			Header: 'ID',
			accessor: 'id',
			canSort: false,
		},
		{
			Header: 'Nombre del proyecto',
			accessor: 'name',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Creación',
			accessor: 'created_at',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Actualización',
			accessor: 'updated_at',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Tipo',
			accessor: 'project_type',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Ubicación',
			accessor: 'city',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Arquitecto',
			accessor: 'user_name',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
		{
			Header: 'Contacto',
			accessor: 'user_email',
			canSort: true,
			isSorted: false,
			isSortedDesc: false,
		},
	],
};

export const formatTableData = (data) => {
	return data.length
		? data.map((item) => ({
				...item,
				...(item.updated_at
					? { updated_at: formatDate(item.updated_at, format) }
					: {}),
				...(item.created_at
					? { created_at: formatDate(item.created_at, format) }
					: {}),
		  }))
		: [];
};
