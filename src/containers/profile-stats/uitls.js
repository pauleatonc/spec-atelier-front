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

export const LIMIT_OPTIONS = ['10', '20', '30', '40', '50'];

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
		},
		{
			Header: 'Nombre de producto',
			accessor: 'name',
		},
		{
			Header: 'Marca',
			accessor: 'brand_name',
		},
		{
			Header: 'Actualización',
			accessor: 'updated_at',
		},
		{
			Header: 'Descargas DWG',
			accessor: 'dwg_downloads',
		},
		{
			Header: 'Descargas BIM',
			accessor: 'bim_downloads',
		},
		{
			Header: 'Descargas PDF',
			accessor: 'pdf_downloads',
		},
		{
			Header: 'Número de especifiaciones',
			accessor: 'projects_count',
		},
	],
	PROJECTS: [
		{
			Header: 'ID',
			accessor: 'id',
		},
		{
			Header: 'Nombre del proyecto',
			accessor: 'name',
		},
		{
			Header: 'Creación',
			accessor: 'created_at',
		},
		{
			Header: 'Actualización',
			accessor: 'updated_at',
		},
		{
			Header: 'Tipo',
			accessor: 'project_type',
		},
		{
			Header: 'Ubicación',
			accessor: 'city',
		},
		{
			Header: 'Arquitecto',
			accessor: 'user_name',
		},
		{
			Header: 'Contacto',
			accessor: 'user_email',
		},
	],
};

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
