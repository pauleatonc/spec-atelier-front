import React from 'react';

import { Paginator, ArrowPaginator, SelectPaginator } from './styles';

import { LIMIT_OPTIONS, PAGINATOR_OPTIONS } from '../../uitls';

const ProfileTablePaginator = ({
	total,
	page,
	limit,
	nextPage,
	loading,
	onPaginateStats,
	onChangeLimit,
	isSubRows,
}) => {
	const currentItemsView = limit * (page + 1);

	const handleChangeLimit = ({ target: { value } }) => {
		if (parseInt(value) !== limit) onChangeLimit(value, isSubRows);
	};

	return (
		<Paginator isSubRows={isSubRows}>
			<span>Items por página:</span>
			<SelectPaginator
				onChange={handleChangeLimit}
				defaultValue={limit}
				disabled={loading || limit > total}
			>
				{LIMIT_OPTIONS.map((val) => {
					return (
						<option key={val} value={val}>
							{val}
						</option>
					);
				})}
			</SelectPaginator>
			<span>{`${
				limit > total || currentItemsView > total ? total : currentItemsView
			} de ${total}`}</span>
			<ArrowPaginator
				disabled={page === 0 || loading}
				onClick={() => onPaginateStats(PAGINATOR_OPTIONS.PREV, isSubRows)}
			>
				<i className="fas fa-angle-left"></i>
			</ArrowPaginator>
			<ArrowPaginator
				disabled={!nextPage || loading}
				onClick={() => onPaginateStats(PAGINATOR_OPTIONS.NEXT, isSubRows)}
			>
				<i className="fas fa-angle-right"></i>
			</ArrowPaginator>
		</Paginator>
	);
};

export default ProfileTablePaginator;
