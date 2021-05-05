import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import CheckBoxList from '../../components/inputs/CheckBoxList';
import { useDidUpdateEffect } from '../../helpers/custom-hooks.helper';

import {
	onSetLocalConfig,
	onEditConfig,
	onUpdateProductConfig,
} from './SpecAdmin.actions';
import {
	Root,
	PanelTitle,
	TextConfig,
	TextConfigTitle,
	TextConfigDesc,
	TextConfigList,
} from './SpecAdmin.styles';
/**
 * The SpecAdmin' container.
 */
const SpecAdmin = () => {
	const { show, initialConfig, localConfig } = useSelector(
		(state) => state.specAdmin,
	);
	const { config } = useSelector((state) => state.specDocument.project);
	const { id: specID } = useParams();
	const options = [
		{ key: 'default', text: 'Predeterminado' },
		{ key: 'short_desc', text: 'Descripción corta' },
		{ key: 'long_desc', text: 'Descriptción larga' },
		{ key: 'reference', text: 'Referencia' },
		{ key: 'brand', text: 'Marca' },
	];

	const calculatedOptions = {
		default: (newValue) => {
			return {
				...options.reduce(
					(acum, option) => ({ ...acum, [option.key]: newValue }),
					{},
				),
				default: newValue,
				short_desc: false,
			};
		},
		short_desc: (newValue) => ({
			short_desc: newValue,
			long_desc: false,
			default: false
		}),
		long_desc: (newValue) => ({
			short_desc: false,
			long_desc: newValue,
			default: false
		}),
	};

	const dispatch = useDispatch();

	const handleItemClick = (key) => {
		const newConfig = calculatedOptions[key]?.(!localConfig[key]) || {
			[key]: !localConfig[key],
			default: false,
		};
		dispatch(onEditConfig(newConfig));
	};

	useDidUpdateEffect(() => {
		dispatch(onSetLocalConfig(config?.visible_attrs?.product));
	}, [config]);

	useDidUpdateEffect(() => {
		if (!initialConfig) {
			dispatch(
				onUpdateProductConfig(specID, {
					visible_attrs: {
						product: localConfig,
					},
				}),
			);
		}
	}, [localConfig]);

	return (
		<Root show={show}>
			<PanelTitle>Administrar especificación</PanelTitle>
			<TextConfig>
				<TextConfigTitle>Configurar textos</TextConfigTitle>
				<TextConfigDesc>
					Elige los textos que quieres mostrar en la especificación:
				</TextConfigDesc>
				<TextConfigList>
					<CheckBoxList
						options={options}
						onItemClick={handleItemClick}
						values={localConfig}
					/>
				</TextConfigList>
			</TextConfig>
		</Root>
	);
};

export default SpecAdmin;
