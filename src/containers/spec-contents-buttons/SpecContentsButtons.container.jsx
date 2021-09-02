import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddIcon, ContentButton } from './SpecContentsButtons.styles';
import { changeOption } from './SpecContentsButtons.actions';
import specAddSource from '../../assets/images/icons/ic-page.svg';
import specAddSourceW from '../../assets/images/icons/ic-table.svg';
import specAddSourceSelected from '../../assets/images/icons/ic-page-selected.svg';
import specAddSourceWSelected from '../../assets/images/icons/ic-table-selected.svg';

const SpecContentButtons = () => {
	const dispatch = useDispatch();
	const { dataSection } = useSelector((state) => state);
	const { option } = dataSection;
	const handdleShowTable = (opt) => dispatch(changeOption(opt));

	return (
		<ContentButton isTypeTable={option === 'T'}>
			<AddIcon
				alt="Listar archivo"
				src={option === 'F' ? specAddSourceSelected : specAddSource}
				onClick={() => handdleShowTable('F')}
			/>
			<AddIcon
				alt="Listar tabla"
				src={option === 'T' ? specAddSourceWSelected : specAddSourceW}
				onClick={() => handdleShowTable('T')}
			/>
		</ContentButton>
	);
};

export default SpecContentButtons;
