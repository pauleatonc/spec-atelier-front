import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetSpecProductsByItem,
  onUpdateFilterSection,
  onUpdateFilterSubitem,
} from '../spec-products/SpecProducts.actions';
import { setFilters } from '../products-list/ProductsList.actions';
import { onHideSpecProductsItemsSuccess } from './SpecProductsItems.actions';
import Breadcrumbs from '../../components/basics/Breadcrumbs';
import Collapsible from '../../components/basics/Collapsible';
import CloseButton from '../../components/buttons/CloseButton';
import { Header } from '../spec-products-sections/SpecProductsSections.styles';
import {
  Root,
  Body,
  Loading,
  Item,
  ArrowIcon,
  Divisor,
} from './SpecProductsItems.styles';
import { ARROW_DOWN_SOURCE, ARROW_UP_ACIVE_SOURCE } from '../../assets/Images';
import { MAX_SCREEN_SMALL_NAV_JS } from '../../config/constants/styled-vars';

/** The SpecProductsItems' container */
const SpecProductsItems = ({
  setShowFilters,
  setSelectedItem,
  selectedSection,
  selectedItem,
}) => {
  const { item: selectedItemID, subitem: selectedSubitemID } = useSelector(
    (state) => state.specProducts.filters,
  );
  const { collection: items, show } = useSelector(
    (state) => state.specProductsItems,
  );
  const dispatch = useDispatch();

  const handleCloseSpecItems = () => {
    setShowFilters(false);
    dispatch(onHideSpecProductsItemsSuccess());
  };

  const handleShowSections = () => {
    dispatch(setFilters({ section: [], item: [], subitem: [] }));
    dispatch(onUpdateFilterSection({ section: '', item: '', subitem: '' }));
    dispatch(onHideSpecProductsItemsSuccess());
  };

  const handleItemClick = (item) => () => {
    if (item) {
      dispatch(setFilters({ item: [item.id], subitem: [] }));
      dispatch(onGetSpecProductsByItem({ item: item.id, subitem: '' }));
      if (
        !item.subitems.length &&
        window.matchMedia(MAX_SCREEN_SMALL_NAV_JS).matches
      ) {
        setSelectedItem(item.name);
        handleCloseSpecItems();
      }
    }
  };

  const handleSubitemClick = (subitem) => {
    dispatch(onUpdateFilterSubitem({ subitem: subitem.id }));
    dispatch(setFilters({ subitem: [subitem.id] }));
    if (window.matchMedia(MAX_SCREEN_SMALL_NAV_JS).matches) {
      setSelectedItem(subitem.name);
      handleCloseSpecItems();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <Root>
      <Header>
        <Breadcrumbs
          items={[
            {
              label:
                (window.matchMedia(MAX_SCREEN_SMALL_NAV_JS).matches &&
                  selectedSection) ||
                'Secciones',
              onClick: handleShowSections,
            },
            {
              label:
                (window.matchMedia(MAX_SCREEN_SMALL_NAV_JS).matches &&
                  selectedItem) ||
                'Partidas',
            },
          ]}
        />
        <CloseButton onClick={handleCloseSpecItems} />
      </Header>
      {items.length === 0 && <Loading>Cargando...</Loading>}
      {items.length > 0 && (
        <Body>
          {items.map((item) => (
            <Fragment key={item.id}>
              <Item
                active={item.id === selectedItemID}
                onClick={handleItemClick(item)}
              >
                <span>
                  {item.code}. {item.name}
                </span>
                {!!item.subitems.length && (
                  <ArrowIcon
                    src={
                      item.id === selectedItemID
                        ? ARROW_UP_ACIVE_SOURCE
                        : ARROW_DOWN_SOURCE
                    }
                  />
                )}
              </Item>
              <Collapsible
                show={selectedItemID === item.id && item.subitems.length}
              >
                {item.subitems.map((subitem) => (
                  <Item
                    active={subitem.id === selectedSubitemID}
                    key={subitem.id}
                    padding="0 0 0 25px"
                    onClick={() => handleSubitemClick(subitem)}
                  >
                    <span>{subitem.name}</span>
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
