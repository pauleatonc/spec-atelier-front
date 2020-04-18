import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onShowSectionsListSuccess } from '../spec-sections-list/SpecSectionsList.actions';
import { onGetProductsByItem } from '../spec-products-list/SpecProductsList.actions';
import Breadcrumbs from '../../components/basics/Breadcrumbs';
import { Root, Header, Body, Item } from './SpecItemsList.styles';

/**
 * The SpecItemsList's container.
 */
const SpecItemsList = () => {
  const { collection: items, show } = useSelector(state => state.specItemsList);
  const dispatch = useDispatch();
  const handleShowSectionsListClick = () => dispatch(onShowSectionsListSuccess());
  const handleItemClick = itemID => () => dispatch(onGetProductsByItem({ itemID })); 

  if (!show) {
    return null;
  }

  return (
    <Root>
      <Header>
        <Breadcrumbs items={[{ label: 'Sección', onClick: handleShowSectionsListClick }, { label: 'Partidas' }]} />
      </Header>
      <Body>
        {items.map(item => <Item key={item.id} onClick={handleItemClick(item.id)}>{item.name}</Item>)}
      </Body>
    </Root>
  )
};

export default SpecItemsList;
