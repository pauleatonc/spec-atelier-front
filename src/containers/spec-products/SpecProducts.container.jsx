import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEscapeKey } from 'modules/hooks';
import { onShowSpecCreateProductFromItemSuccess } from 'containers/spec-create-product/SpecCreateProduct.actions';
import {
  onAttachSpecProduct,
  onDetachSpecProduct,
} from 'containers/spec-document/SpecDocument.actions';
import ProductsListContainer from 'containers/products-list/ProductsList.container';
import CreateProduct from 'components/product/CreateProduct';
import {
  onHideSpecProducts,
  onShowAttachModal,
  onHideAttachModal,
} from './SpecProducts.actions';
import SpecModalAttachProduct from './SpecModalAttachProduct.container';
import { Root, Body } from './SpecProducts.styles';

/** The SpecProductsList's container */
const SpecProductsList = () => {
  const { id: specID } = useParams();
  const dispatch = useDispatch();

  const selectedProducts =
    useSelector((state) =>
      state.specDocument.blocks?.filter((block) => block.type === 'Product'),
    ) || [];

  const { show, filters, showAttachModal, productToAttach } = useSelector(
    (state) => state.specProducts,
  );

  const handleAttachSpecProduct = (selectedItems, product) => {
    dispatch(onHideAttachModal());
    const item = selectedItems.map(({ id }) => id);
    const section = [];
    selectedItems.forEach(({ section_id }) => {
      if (!section.includes(section_id)) {
        section.push(section_id);
      }
    });
    dispatch(
      onAttachSpecProduct({
        productID: product.id,
        specID,
        systemID: product?.systems[0]?.id,
        item,
        section,
      }),
    );
  };

  const handleDetachSpecProduct = (product, items) => {
    dispatch(onHideAttachModal());
    dispatch(onDetachSpecProduct({ product, specID, items }));
  };

  const handleCardClick = (product) => (event) => {
    event.stopPropagation();
    const { id: productID, items } = product;
    const hasProduct = selectedProducts.find(
      (selectedProduct) =>
        selectedProduct?.element.original_product_id === productID,
    );

    if (items.length > 1) dispatch(onShowAttachModal({ product }));
    else if (hasProduct) handleDetachSpecProduct(product, items);
    else handleAttachSpecProduct(items, product);
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
      <Root>
        <Body>
          {show && (
            <ProductsListContainer
              isSpec
              extraFilters={{ limit: 20, project_spec: specID }}
              filterOptionsKey="spec"
              canAdd
              selectedProducts={selectedProducts}
              withoutPadding
              customEmpty
              emptyListComponent={CreateProduct}
              onActionCard={handleCardClick}
              onClickCreate={handleCreateProduct}
              viewKey="spec_products"
            />
          )}
        </Body>
      </Root>
      <SpecModalAttachProduct
        showAttachModal={showAttachModal}
        product={productToAttach}
        onClose={() => dispatch(onHideAttachModal())}
        onAttach={handleAttachSpecProduct}
        onDetach={handleDetachSpecProduct}
      />
    </>
  );
};

export default SpecProductsList;
