import React from 'react';

import { Paginator, ArrowPaginator, SelectPaginator } from './styles';

const ProfileTablePaginator = ({
	total,
	page,
	limit,
	next_page,
	loading,
	onPaginateStats,
	onChangeLimit,
}) => {
	const currentItemsView = limit * (page + 1);
	const optionsSelect = ['10', '20', '30', '40', '50'];

	const handleChangeLimit = ({ target: { value } }) => {
		if (parseInt(value) !== limit) onChangeLimit(value);
	};

	return (
		<Paginator>
			<span>Items por página:</span>
			<SelectPaginator
				onChange={handleChangeLimit}
				defaultValue={limit}
				disabled={loading}
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
				onClick={() => onPaginateStats('prev')}
			>
				<i className="fas fa-angle-left"></i>
			</ArrowPaginator>
			<ArrowPaginator
				disabled={!next_page || loading}
				onClick={() => onPaginateStats('next')}
			>
				<i className="fas fa-angle-right"></i>
			</ArrowPaginator>
		</Paginator>
	);
};

export default ProfileTablePaginator;
