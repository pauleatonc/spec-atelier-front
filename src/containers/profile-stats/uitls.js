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
		},
		{
			Header: 'Marca',
			accessor: 'brand_name',
			canSort: true,
		},
		{
			Header: 'Actualización',
			accessor: 'updated_at',
			canSort: true,
		},
		{
			Header: 'Descargas DWG',
			accessor: 'dwg_downloads',
			canSort: true,
		},
		{
			Header: 'Descargas BIM',
			accessor: 'bim_downloads',
			canSort: true,
		},
		{
			Header: 'Descargas PDF',
			accessor: 'pdf_downloads',
			canSort: true,
		},
		{
			Header: 'Número de especifiaciones',
			accessor: 'projects_count',
			canSort: true,
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
		},
		{
			Header: 'Creación',
			accessor: 'created_at',
			canSort: true,
		},
		{
			Header: 'Actualización',
			accessor: 'updated_at',
			canSort: true,
		},
		{
			Header: 'Tipo',
			accessor: 'project_type',
			canSort: true,
		},
		{
			Header: 'Ubicación',
			accessor: 'city',
			canSort: true,
		},
		{
			Header: 'Arquitecto',
			accessor: 'user_name',
			canSort: true,
		},
		{
			Header: 'Contacto',
			accessor: 'user_email',
			canSort: true,
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
