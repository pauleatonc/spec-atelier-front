import React from 'react';

import { Paginator, ArrowPaginator, SelectPaginator } from './styles';

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
	const optionsSelect = ['10', '20', '30', '40', '50'];

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
				{optionsSelect.map((val) => {
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
				onClick={() => onPaginateStats('prev', isSubRows)}
			>
				<i className="fas fa-angle-left"></i>
			</ArrowPaginator>
			<ArrowPaginator
				disabled={!nextPage || loading}
				onClick={() => onPaginateStats('next', isSubRows)}
			>
				<i className="fas fa-angle-right"></i>
			</ArrowPaginator>
		</Paginator>
	);
};

export default ProfileTablePaginator;
