import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onShowSpecSectionsListSuccess } from '../spec-sections-list/SpecSectionsList.actions';
import { onShowSpecItemsListSuccess } from '../spec-items-list/SpecItemsList.actions';
import Breadcrumbs from '../../components/basics/Breadcrumbs';
import { Root, Header, Body } from './SpecSelectedProducts.styles'

/**
 * The SpecSelectedProducts' container.
 */
const SpecSelectedProducts = () => {
  const { show } = useSelector(state => state.specSelectedProducts);
  const dispatch = useDispatch();
  const handleShowSectionsListClick = () => dispatch(onShowSpecSectionsListSuccess());
  const handleShowItemsListClick = () => dispatch(onShowSpecItemsListSuccess());

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

export default SpecSelectedProducts;
