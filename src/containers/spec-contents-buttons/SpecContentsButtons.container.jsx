import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddIcon, ContentButton } from './SpecContentsButtons.styles';
import { changeOption } from './SpecContentsButtons.actions';
import specAddSource from '../../assets/images/icons/ic-page.svg';
import specAddSourceW from '../../assets/images/icons/ic-table.svg';
import specAddSourceSelected from '../../assets/images/icons/ic-page-selected.svg';
import specAddSourceWSelected from '../../assets/images/icons/ic-table-selected.svg';
import {
	ESPEC_DOCUMENT,
	SPEC_TABLE
  } from '../../config/constants/button-variants';

const SpecContentButtons = () => {
	const dispatch = useDispatch();
	const { dataSection } = useSelector((state) => state);
	const { option } = dataSection;
	const handdleShowTable = (opt) => dispatch(changeOption(opt));

	return (
		<ContentButton isTypeTable={option === 'T'}>
			<AddIcon
				alt="Listar archivo"
				src={option === ESPEC_DOCUMENT ? specAddSourceSelected : specAddSource}
				onClick={() => handdleShowTable(ESPEC_DOCUMENT)}
			/>
			<AddIcon
				alt="Listar tabla"
				src={option === SPEC_TABLE ? specAddSourceWSelected : specAddSourceW}
				onClick={() => handdleShowTable(SPEC_TABLE)}
			/>
		</ContentButton>
	);
};

export default SpecContentButtons;
