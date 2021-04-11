import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSections,
	getItems,
	getBrands,
	setFilters,
} from '../products-list/ProductsList.actions';
import { Button } from '../../components/SpecComponents';
import { Container, Content, Text } from './ProductsFilters.styles';
import { getAppData } from '../../config/store/app-store/app.actions';
import ButtonComboBox from './ButtonComboBox';
import { mapToSelector } from '../../helpers/helpers';
import { useDidUpdateEffect } from '../../helpers/custom-hooks.helper';

/**
 * The ProductsFilters's container.
 */
const ProductsFilters = ({ initialFilters, filters, onFilterAll }) => {
	const { project_types: projectTypes, room_types: roomTypes } = useSelector(
		(state) => state.app,
	);
	const { loaded } = useSelector((state) => state.app);
	const { isSelectedAll, sections, items, brands } = useSelector(
		(state) => state.productsList,
	);

	const [roomTypesOptions, setRoomTypesOptions] = useState([]);
	const dispatch = useDispatch();

	const submitCallback = ({ name, value }) => {
		if (name === 'project_type') {
			const filteredRoomTypes = (value.length
				? roomTypes.filter((rt) =>
						rt.project_types.some((rpt) =>
							value.some((val) => val.value === rpt.id),
						),
				  )
				: roomTypes
			).map(mapToSelector);

			const selectedRoomTypes = filters.room_type.filter((rt) =>
				rt.project_types.some((rpt) =>
					value.some((val) => val.value === rpt.id),
				),
			);

			setRoomTypesOptions(filteredRoomTypes);
			dispatch(
				setFilters({
					...filters,
					room_type: selectedRoomTypes,
					page: 0,
					[name]: value,
				}),
			);
		} else {
			dispatch(setFilters({ ...filters, [name]: value, page: 0 }));
		}
	};

	useEffect(() => {
		if (!loaded) dispatch(getAppData());
		dispatch(getBrands(initialFilters));
		dispatch(getSections(initialFilters));
		dispatch(getItems(initialFilters));
		setRoomTypesOptions(roomTypes.map(mapToSelector));
	}, []);

	useDidUpdateEffect(() => {
		if (roomTypes) setRoomTypesOptions(roomTypes.map(mapToSelector));
	}, [roomTypes]);

	return (
		<Container>
			<Content>
				<Button
					selected={isSelectedAll}
					onClick={onFilterAll}
					variant={isSelectedAll ? 'secondary' : 'default'}
					inverse
				>
					<Text>Todos</Text>
				</Button>
				<ButtonComboBox
					variant="secondary"
					options={sections}
					name="section"
					onChange={submitCallback}
					currentOptions={filters.section}
					submit
				>
					<Text>Sección</Text>
				</ButtonComboBox>
				<ButtonComboBox
					variant="secondary"
					options={items}
					name="item"
					onChange={submitCallback}
					currentOptions={filters.item}
					submit
				>
					<Text>Partidas</Text>
				</ButtonComboBox>
				<ButtonComboBox
					variant="secondary"
					options={projectTypes}
					name="project_type"
					onChange={submitCallback}
					isGrey={!isSelectedAll}
					currentOptions={filters.project_type}
					submit
				>
					<Text>Tipo de proyecto</Text>
				</ButtonComboBox>
				<Button
					inverse
					variant={filters.most_used ? 'secondary' : 'default'}
					name="most_used"
					onClick={() =>
						submitCallback({ name: 'most_used', value: !filters.most_used })
					}
				>
					<Text>Mas usados</Text>
				</Button>
				<ButtonComboBox
					variant="secondary"
					options={roomTypesOptions}
					name="room_type"
					onChange={submitCallback}
					currentOptions={filters.room_type}
					submit
				>
					<Text>Recintos</Text>
				</ButtonComboBox>
				<ButtonComboBox
					variant="secondary"
					options={brands}
					name="brand"
					onChange={submitCallback}
					currentOptions={filters.brand}
					submit
				>
					<Text>Marcas</Text>
				</ButtonComboBox>
			</Content>
		</Container>
	);
};

export default ProductsFilters;
