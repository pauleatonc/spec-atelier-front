import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onGetStats } from '../../ProfileStats.actions';
import { COLUMNS } from './constants';
import TableStats from '../../components/profileTableStats';
import { Button } from '../../../../components/SpecComponents';
import { VARIANTS_BUTTON } from '../../../../config/constants/button-variants';

import { COLUMNS as COLUMNS_PRODUCST } from '../products/constants';

const ProjectsStats = () => {
	const {
		projects: { filters, list, loading, total, next_page },
		productsByProject: { list: subList },
	} = useSelector((state) => state.profileStats);
	const dispatch = useDispatch();

	/* 	const getProducts = (row) => {
		row.toggleRowExpanded();
		if (!row.isExpanded) {
			dispatch(
				onGetStats({
					...filters,
					stat: 'product_stats',
					product: row.original.id,
					page: 0,
					limit: 10,
				}),
			);
		}
	}; */

	const handlePaginateStats = (direction) =>
		dispatch(
			onGetStats({
				...filters,
				page: direction === 'next' ? filters.page + 1 : filters.page - 1,
			}),
		);

	const columns = useMemo(
		() => [
			...COLUMNS,
			{
				id: 'expander',
				Header: () => null,
				Cell: ({ row }) => {
					return (
						<Button
							{...row.getToggleRowExpandedProps()}
							variant={VARIANTS_BUTTON.CANCEL}
						>
							{row.isExpanded ? 'Ocultar' : 'Ver productos'}
						</Button>
					);
				},
			},
		],
		[],
	);

	const subColums = useMemo(() => COLUMNS_PRODUCST, []);

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
					stat: 'project_stats',
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

export default ProjectsStats;
