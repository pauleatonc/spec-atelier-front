import React, { Children, cloneElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { onHideSpecProducts, onUpdateFilterSection } from '../../containers/spec-products/SpecProducts.actions';
import { onShowSpecProductsItems, onHideSpecProductsItemsSuccess } from '../../containers/spec-products-items/SpecProductsItems.actions';
import { onShowAlertSuccess } from '../../containers/alert/Alert.actions';
import { setFilters } from '../../containers/products-list/ProductsList.actions';
import Context from './SpecProductsPanelLayout.context';
import Breadcrumbs from '../basics/Breadcrumbs';
import CloseButton from '../buttons/CloseButton';
import {
  Root,
  Filters,
  Panels,
  Title,
  Header,
  Overlay,
  ButtonBack,
} from './SpecProductsPanelLayout.styles';
import { ARROW_BACK } from '../../assets/Images';

/** The SpecProductsPanelLayout's component */
const SpecProductsPanelLayout = ({
  children,
  filtersPanels,
  showFilters,
  setShowFilters,
  selectedSection,
  selectedItem,
  setSelectedSection,
  setSelectedItem,
}) => {
  const { section } = useSelector((state) => state.specProducts.filters);
  const [show, setShow] = useState(false);
  const handleShow = (updatedValue) => setShow(updatedValue);
  const contextPayload = { show, onShow: handleShow };
  const dispatch = useDispatch();

  return (
    <Context.Provider value={contextPayload}>
      {show && <Overlay onClick={() => dispatch(onHideSpecProducts())} />}
      <Root show={show}>
        <Header>
          <ButtonBack role='button' onClick={() => dispatch(onHideSpecProducts())}>
            <img alt='arrow back' src={ARROW_BACK} />
          </ButtonBack>
          <Title>Productos</Title>
          <CloseButton
            onClick={() => dispatch(onHideSpecProducts())}
            hideInMobile
            widthChange
          />
          <Breadcrumbs
            justifyCenter
            customWidth={100}
            customHeight={55}
            items={[
              {
                label: selectedSection || 'Secciones',
                onClick: () => {
                  if (section) {
                    dispatch(setFilters({ section: [], item: [], subitem: [] }));
                    dispatch(
                      onUpdateFilterSection({
                        section: '',
                        item: '',
                        subitem: '',
                      }),
                    );
                    setSelectedSection('');
                    setSelectedItem('');
                    dispatch(onHideSpecProductsItemsSuccess());
                  }
                  setShowFilters(true);
                },
              },
              {
                label: selectedItem || 'Partidas',
                onClick: () => {
                  if (section) {
                    dispatch(onShowSpecProductsItems({ section }));
                    setShowFilters(true);
                  } else
                    dispatch(
                      onShowAlertSuccess({
                        message: 'Debes seleccionar una sección antes de seleccionar una partida',
                      }),
                    );
                },
              },
              { label: 'Productos' },
            ]}
          />
        </Header>
        <Panels>
          <Filters showFilters={showFilters}>
            {Children.map(filtersPanels, (child, index) =>
              cloneElement(child, { key: `filter-panel-${index}` }),
            )}
          </Filters>
          {children}
        </Panels>
      </Root>
    </Context.Provider>
  );
};

SpecProductsPanelLayout.propTypes = {children: PropTypes.node.isRequired};

export default SpecProductsPanelLayout;
