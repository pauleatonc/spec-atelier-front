import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onShowSpecProductsSectionsSuccess } from '../spec-products-sections/SpecProductsSections.actions';
import { onShowSpecProductsItemsSuccess } from '../spec-products-items/SpecProductsItems.actions';
import Breadcrumbs from '../../components/basics/Breadcrumbs';
import { Root, Header, Body } from './SpecDocumentPreview.styles'

/**
 * The SpecDocumentPreview's container.
 */
const SpecDocumentPreview = () => {
  const { selectedSectionID } = useSelector(state => state.specProductsSections);
  const { show } = useSelector(state => state.specDocumentPreview);
  const dispatch = useDispatch();
  const handleShowSectionsListClick = () => dispatch(onShowSpecProductsSectionsSuccess());
  const handleShowItemsListClick = () => dispatch(onShowSpecProductsItemsSuccess({ selectedSectionID }));

  if (!show) {
    return null;
  }

  return (
    <Root>
      <Header>
        <Breadcrumbs
          items={[
            { label: 'Sección', onClick: handleShowSectionsListClick },
            { label: 'Partidas', onClick: handleShowItemsListClick },
            { label: 'Productos' },
          ]}
        />
      </Header>
      <Body>BODY</Body>
    </Root>
  )
};

export default SpecDocumentPreview;
