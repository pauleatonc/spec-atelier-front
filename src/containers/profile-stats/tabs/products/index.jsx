import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onGetStats } from '../../ProfileStats.actions';
import { COLUMNS } from './constants';
import TableStats from '../../components/profileTableStats';
import { Button } from '../../../../components/SpecComponents';
import { VARIANTS_BUTTON } from '../../../../config/constants/button-variants';

import { COLUMNS as COLUMNS_PROJECTS } from '../projects/constants';

const ProductsStats = () => {
	const {
		products: { filters, list, loading, total, next_page },
		projectsByProduct: { list: subList },
	} = useSelector((state) => state.profileStats);
	const dispatch = useDispatch();

	const handlePaginateStats = (direction) =>
		dispatch(
			onGetStats({
				...filters,
				page: direction === 'next' ? filters.page + 1 : filters.page - 1,
			}),
		);

	const hangleToggleRow = (row) => {
		row.toggleRowExpanded();
		if (!row.isExpanded)
			dispatch(
				onGetStats(
					{
						...filters,
						page: 0,
						limit: 0,
						stat: 'project_stats',
						product: row.original.id,
					},
					true,
				),
			);
	};

	const columns = useMemo(
		() => [
			...COLUMNS,
			{
				id: 'expander',
				Header: () => null,
				Cell: ({ row }) => {
					return !!row?.original?.projects_count ? (
						<Button
							{...row.getToggleRowExpandedProps()}
							variant={VARIANTS_BUTTON.CANCEL}
							onClick={() => hangleToggleRow(row)}
						>
							{row.isExpanded ? 'Ocultar' : 'Ver proyectos'}
						</Button>
					) : null;
				},
			},
		],
		[],
	);

	const subColums = useMemo(() => COLUMNS_PROJECTS, []);

	const handleChangeLimit = (limit) =>
		dispatch(
			onGetStats({
				...filters,
				page: 0,
				limit,
			}),
		);

	useEffect(() => {
		if (!list.length)
			dispatch(
				onGetStats({
					...filters,
					stat: 'product_stats',
					page: 0,
					limit: 10,
				}),
			);
	}, []);

	return loading && !list.length ? (
		<h1>Loading...</h1>
	) : (
		<TableStats
			columns={columns}
			data={list}
			total={total}
			next_page={next_page}
			onPaginateStats={handlePaginateStats}
			loading={loading}
			onChangeLimit={handleChangeLimit}
			subColums={subColums}
			subData={subList}
			{...filters}
		/>
	);
};

export default ProductsStats;
