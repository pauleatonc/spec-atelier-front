import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onShowSpecProductsSectionsSuccess } from '../spec-products-sections/SpecProductsSections.actions';
import { onGetProductsItems } from './SpecProductsItems.actions';
import { onShowSpecProductsSuccess } from '../spec-products/SpecProducts.actions';
import Breadcrumbs from '../../components/basics/Breadcrumbs';
import { Root, Header, Body, Loading, Item } from './SpecProductsItems.styles';

/**
 * The SpecProductsItems' container.
 */
const SpecProductsItems = () => {
  const { selectedSectionID } = useSelector(state => state.specProductsSections);
  const { collection: items, show } = useSelector(state => state.specProductsItems);
  const dispatch = useDispatch();
  const handleShowSections = () => dispatch(onShowSpecProductsSectionsSuccess());
  const handleItemClick = itemID => () => dispatch(onShowSpecProductsSuccess({ itemID }));

  useEffect(() => {
    if (!selectedSectionID || !show) {
      return;
    }

    dispatch(onGetProductsItems({ sectionID: selectedSectionID }));
  }, [selectedSectionID, show]);

  if (!show) {
    return null;
  }

  return (
    <Root>
      <Header>
        <Breadcrumbs items={[{ label: 'Sección', onClick: handleShowSections }, { label: 'Partidas' }]} />
      </Header>
      {items.length === 0 && <Loading>Cargando...</Loading>}
      {items.length > 0 && (
        <Body>
          {items.map(item => <Item key={item.id} onClick={handleItemClick(item.id)}>{item.name}</Item>)}
        </Body>
      )}
    </Root>
  )
};

export default SpecProductsItems;
