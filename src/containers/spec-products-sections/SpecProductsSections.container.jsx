import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetSpecProductsBySection, onUpdateFilterSection } from '../spec-products/SpecProducts.actions';
import { onHideSpecProductsItemsSuccess } from '../spec-products-items/SpecProductsItems.actions';
import { setFilters } from '../products-list/ProductsList.actions';
import useSpecProductsPanelLayout from '../../components/layouts/SpecProductsPanelLayout.hook';
import { useDidUpdateEffect } from '../../helpers/custom-hooks.helper';
import Breadcrumbs from '../../components/basics/Breadcrumbs';
import {
	Root,
	Body,
	Header,
	Item,
	ItemIcon,
	ItemText,
	Loading,
} from './SpecProductsSections.styles';

/**
 * The SpecProductsSections' container.
 */
const SpecProductsSections = () => {
	const { section: selectedSectionID } = useSelector(
		(state) => state.specProducts.filters,
	);
	const { collection: sections, show } = useSelector(
		(state) => state.specProductsSections,
	);
	const { isSelectedAll } = useSelector((state) => state.productsList);

	const dispatch = useDispatch();
	const handleSectionClick = (sectionID) => () => {
		dispatch(setFilters({ section: [sectionID] }));
		dispatch(onGetSpecProductsBySection({ section: sectionID }));
	};

	useSpecProductsPanelLayout(show);
	useDidUpdateEffect(() => {
		if (isSelectedAll) {
			dispatch(onUpdateFilterSection({ section: '', item: '', subitem: ''}))
			dispatch(onHideSpecProductsItemsSuccess());
		}
	}, [isSelectedAll]);

	return (
		<Root>
			<Header>
				<Breadcrumbs items={[{ label: 'Secciones' }]} />
			</Header>
			{sections.length === 0 && <Loading>Cargando...</Loading>}
			{sections.length > 0 && (
				<Body>
					{sections.map((section) => (
						<Item key={section.id} onClick={handleSectionClick(section.id)}>
							<ItemIcon
								active={section.id === selectedSectionID}
								icon={section.eng_name}
								iconHover={`${section.eng_name}_active`}
							/>
							<ItemText active={section.id === selectedSectionID}>
								{section.code}. {section.name}
							</ItemText>
						</Item>
					))}
				</Body>
			)}
		</Root>
	);
};

export default SpecProductsSections;
