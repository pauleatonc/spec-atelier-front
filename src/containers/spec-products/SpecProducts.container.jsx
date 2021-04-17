import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEscapeKey } from '../../modules/hooks';
import {
	onAttachSpecProduct,
	onDetachSpecProduct,
} from '../spec-document/SpecDocument.actions';
import { onHideSpecProducts } from './SpecProducts.actions';
import ProductListContainer from '../products-list/ProductsList.container';

import { Overlay, Root, Body } from './SpecProducts.styles';
import CreateProduct from '../../components/product/CreateProduct';
import { onShowSpecCreateProductFromItemSuccess } from '../spec-create-product/SpecCreateProduct.actions';

/**
 * The SpecProductsList's container.
 */
const SpecProductsList = () => {
	const { id: specID } = useParams();
	const selectedProducts =
		useSelector((state) =>
			state.specDocument.blocks?.filter((block) => block.type === 'Product'),
		) || [];
	const { collection: products = [], show, filters } = useSelector(
		(state) => state.specProducts,
	);
	const dispatch = useDispatch();

	const handleHideSpecProducts = () => dispatch(onHideSpecProducts());

	const handleCardClick = (productID) => (event) => {
		event.stopPropagation();
		const hasProduct = selectedProducts.find(
			(selectedProduct) => selectedProduct?.element.id === productID,
		);
		const currentProduct = products.find((p) => p.id === productID);
		if (hasProduct) {
			return dispatch(onDetachSpecProduct({ productID, specID }));
		}
		return dispatch(
			onAttachSpecProduct({
				productID,
				specID,
				systemID: currentProduct?.systems[0]?.id,
			}),
		);
	};

	const handleCreateProduct = () => {
		dispatch(
			onShowSpecCreateProductFromItemSuccess({
				itemID: filters.item,
				sectionID: filters.section,
			}),
		);
	};

	useEscapeKey(show, () => dispatch(onHideSpecProducts()));

	return (
		<>
			<Overlay onClick={handleHideSpecProducts} />
			<Root>
				<Body>
					<ProductListContainer
						extraFilters={{ limit: 20 }}
						filterOptionsKey="spec"
						canAdd
						selectedProducts={selectedProducts}
						withoutPadding
						customEmpty
						emptyListComponent={CreateProduct}
						onActionCard={handleCardClick}
						onClickCreate={handleCreateProduct}
					/>
				</Body>
			</Root>
		</>
	);
};

export default SpecProductsList;
