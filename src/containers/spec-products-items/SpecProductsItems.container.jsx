import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import arrowDownSource from '../../assets/images/icons/arrow-down.svg';
import arrowUpActiveSource from '../../assets/images/icons/arrow-up-active.svg';
import {
	onGetSpecProductsByItem,
	onUpdateFilterSection,
	onUpdateFilterSubitem
} from '../spec-products/SpecProducts.actions';
import { setFilters } from '../products-list/ProductsList.actions';
import Breadcrumbs from '../../components/basics/Breadcrumbs';
import Collapsible from '../../components/basics/Collapsible';

import { onHideSpecProductsItemsSuccess } from './SpecProductsItems.actions';
import {
	Root,
	Header,
	Body,
	Loading,
	Item,
	ArrowIcon,
	Divisor
} from './SpecProductsItems.styles';

/**
 * The SpecProductsItems' container.
 */
const SpecProductsItems = () => {
	const { item: selectedItemID, subitem: selectedSubitemID } = useSelector(
		(state) => state.specProducts.filters,
	);
	const { collection: items, show } = useSelector(
		(state) => state.specProductsItems,
	);
	const dispatch = useDispatch();
	const handleShowSections = () => {
		dispatch(setFilters({ section: [], item: [], subitem: [] }));
		dispatch(onUpdateFilterSection({ section: '', item: '', subitem: '' }));
		dispatch(onHideSpecProductsItemsSuccess());
	};
	const handleItemClick = (item) => () => {
		if (item) {
			dispatch(setFilters({ item: [item], subitem: [] }));
			dispatch(onGetSpecProductsByItem({ item, subitem: '' }));
		}
	};

	const handleSubitemClick = (subitem) => {
		dispatch(onUpdateFilterSubitem({ subitem }));
		dispatch(setFilters({ subitem: [subitem] }));
	}

	if (!show) {
		return null;
	}

	return (
		<Root>
			<Header>
				<Breadcrumbs
					items={[
						{ label: 'Secciones', onClick: handleShowSections },
						{ label: 'Partidas' },
					]}
				/>
			</Header>
			{items.length === 0 && <Loading>Cargando...</Loading>}
			{items.length > 0 && (
				<Body>
					{items.map((item) => (
						<Fragment key={item.id}>
							<Item
								active={item.id === selectedItemID}
								onClick={handleItemClick(item.id)}
							>
								<span>
									{item.code}. {item.name}
								</span>
								{!!item.subitems.length && (
									<ArrowIcon
										src={
											item.id === selectedItemID
												? arrowUpActiveSource
												: arrowDownSource
										}
									/>
								)}
							</Item>
							<Collapsible show={selectedItemID === item.id && item.subitems.length}>
                  {item.subitems.map(subitem => (
                    <Item
											active={subitem.id === selectedSubitemID}
                      key={subitem.id}
                      padding="0 0 0 25px"
											onClick={() => handleSubitemClick(subitem.id)}
                    >
                      <span>
                        {subitem.name}
                      </span>
                    </Item>
                  ))}
									<Divisor />
                </Collapsible>
						</Fragment>
					))}
				</Body>
			)}
		</Root>
	);
};

export default SpecProductsItems;
