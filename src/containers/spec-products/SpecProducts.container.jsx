import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import {
  onGetSpecProductsByFilters,
  onGetSpecProductsByFiltersAll,
  onGetSpecProductsByPage,
  onGetSpecProductsByKeyword,
  onGetSpecProductsBySort,
} from './SpecProducts.actions';
import { getProduct } from '../spec-modal-product/SpecModalProduct.actions';
import { useComboBox } from '../../components/inputs/Inputs.hooks';
import SearchBar from '../../components/filters/SearchBar';
import Tag from '../../components/filters/Tag';
import ToggleMenu from '../../components/menus/ToggleMenu';
import ComboBox from '../../components/inputs/ComboBox';
import DropdownMenu from '../../components/menus/DropdownMenu';
import Button from '../../components/buttons/Button';
import ProductCard from '../../components/cards/ProductCard';
import { Root, Header, HeaderSearch, HeaderFilters, Body, BodyHeader, Sort, Total, Cards, LoadMore, Loading } from './SpecProducts.styles';

/**
 * The SpecProductsList's container.
 */
const SpecProductsList = () => {
  const { project_types: projectTypes, room_types: roomTypes } = useSelector(state => state.app);
  const { brands } = useSelector(state => state.brandsList);
  const { nextPage, collection: products = [], loading, show, total } = useSelector(state => state.specProducts);
  const dispatch = useDispatch();
  const [keywordValue, setKeywordValue] = useState('');
  const [sortValue, setSortValue] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleKeywordChange = event => {
    setKeywordValue(event.target.value);
    dispatch(onGetSpecProductsByKeyword({ keyword: event.target.value }));
  };
  const handleSortChange = option => {
    setSortValue(option);
    dispatch(onGetSpecProductsBySort({ sort: option.value }));
  };
  const handleCardClick = currentProductID => () => {
    const hasProduct = selectedProducts.find(productID => productID === currentProductID);
    let updatedProducts = [].concat(selectedProducts);

    if (hasProduct) {
      updatedProducts = updatedProducts.filter(productID => productID !== currentProductID);
    } else {
      updatedProducts = updatedProducts.concat(currentProductID);
      dispatch(onShowAlertSuccess({ message: 'Añadiste productos a una sección' }));
    }

    setSelectedProducts(updatedProducts);
  };
  const handleLoadMoreClick = () => {
    dispatch(onGetSpecProductsByPage());
  };
  const handleSeeMoreClick = selectedProduct => event => {
    event.stopPropagation();
    dispatch(getProduct(selectedProduct));
  }
  const { values: brandsValues, set: setBrandsValues, onChange: handleBrandsChange } =
    useComboBox([], values => dispatch(onGetSpecProductsByFilters({ key: 'brand', value: values })));
  const { values: projectTypeValues, set: setProjectTypeValues, onChange: handleProjectTypeChange } =
    useComboBox([], values => dispatch(onGetSpecProductsByFilters({ key: 'project_type', value: values })));
  const { values: roomTypeValues, set: setRoomTypeValues, onChange: handleRoomTypeChange } =
    useComboBox([], values => dispatch(onGetSpecProductsByFilters({ key: 'room_type', value: values })));
  const handleFilterAll = () => {
    setBrandsValues([]);
    setProjectTypeValues([]);
    setRoomTypeValues([]);
    dispatch(onGetSpecProductsByFiltersAll());
  };
  const allFilterIsSelected = brandsValues.length === 0 && projectTypeValues.length === 0 && roomTypeValues.length === 0;


  useEffect(() => {
    if (show) {
      return;
    }

    setBrandsValues([]);
    setProjectTypeValues([]);
    setRoomTypeValues([]);
    setSortValue({});
  }, [show]);

  useEffect(() => {
    if (show) {
      return;
    }

    setSortValue({});
  }, [show]);

  return (
    <Root>
      <Header>
        <HeaderSearch>
          <SearchBar justifyContent="center" maxWidth="432px" placeholder="Buscar" value={keywordValue} onChange={handleKeywordChange} />
        </HeaderSearch>
        <HeaderFilters>
          <Tag selected={allFilterIsSelected} onClick={handleFilterAll}>Todos</Tag>
          <ToggleMenu anchor={<Tag selected={brandsValues.length > 0}>Marcas</Tag>} width="215px">
            <ComboBox
              options={brands.map(brand => ({ label: brand.name || '', value: brand.id }))}
              placeholder="Selecciona"
              type="underline"
              values={brandsValues}
              onChange={handleBrandsChange}
            />
          </ToggleMenu>
          <ToggleMenu anchor={<Tag selected={projectTypeValues.length > 0}>Tipo de proyecto</Tag>} width="215px">
            <ComboBox
              options={projectTypes.map(projectType => ({ label: projectType.name || '', value: projectType.id }))}
              placeholder="Selecciona"
              type="underline"
              values={projectTypeValues}
              onChange={handleProjectTypeChange}
            />
          </ToggleMenu>
          <Tag selected={false}>Mis especificaciones</Tag>
          <ToggleMenu anchor={<Tag selected={roomTypeValues.length > 0}>Recintos</Tag>} width="215px">
            <ComboBox
              options={roomTypes.map(roomType => ({ label: roomType.name || '', value: roomType.id }))}
              placeholder="Selecciona"
              type="underline"
              values={roomTypeValues}
              onChange={handleRoomTypeChange}
            />
          </ToggleMenu>
        </HeaderFilters>
      </Header>
      <Body>
        <BodyHeader>
          {loading && 'Cargando...'}
          {!loading && (
            <>
              <Sort>
                <DropdownMenu
                  options={[
                    { label: 'Nuevos', value: 'created_at' },
                    { label: 'Más usados', value: 'most_used' },
                  ]}
                  placeholder="Ordenar por"
                  value={sortValue}
                  width="179px"
                  onChange={handleSortChange}
                />
              </Sort>
              <Total>{`${products.length} de ${total} producto(s)`}</Total>
            </>
          )}
        </BodyHeader>
        <Cards>
          {products.map(product => {
            const selected = selectedProducts.find(selectedProduct => selectedProduct === product.id);

            return (
              <ProductCard
                canAdd
                category={`Sistema constructivo: ${product.system.name}`}
                description={product.short_desc || ''}
                key={`product-card-${product.id}`}
                photo={product.images[0]?.urls?.thumb}
                reference={product.reference || ''}
                selected={Boolean(selected)}
                title={product.name}
                onClickCard={handleCardClick(product.id)}
                onClickSeeMore={handleSeeMoreClick(product)}
              />
            );
          })}
        </Cards>
        {nextPage !== null && (
          <LoadMore>
            {loading && <Loading>Cargando...</Loading>}
            {!loading && <Button variant="gray" onClick={handleLoadMoreClick}>Ver más</Button>}
          </LoadMore>
        )}
      </Body>
    </Root>
  );
};

export default SpecProductsList;
