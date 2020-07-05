import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAttachSpecProduct, onDetachSpecProduct } from '../spec-document/SpecDocument.actions';
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
  const { blocks: selectedProducts } = useSelector(state => state.specDocument);
  const { nextPage, collection: products = [], loading, show, total } = useSelector(state => state.specProducts);
  const dispatch = useDispatch();
  const [keywordValue, setKeywordValue] = useState('');
  const [sortValue, setSortValue] = useState({});
  const handleKeywordChange = event => {
    setKeywordValue(event.target.value);
    dispatch(onGetSpecProductsByKeyword({ keyword: event.target.value }));
  };
  const handleSortChange = option => {
    setSortValue(option);
    dispatch(onGetSpecProductsBySort({ sort: option.value }));
  };
  const handleCardClick = productID => () => {
    const hasProduct = selectedProducts.find(selectedProduct => selectedProduct.id === productID);

    if (hasProduct) {
      return dispatch(onDetachSpecProduct(productID));
    }
    
    return dispatch(onAttachSpecProduct(productID));
  };
  const handleLoadMoreClick = () => {
    dispatch(onGetSpecProductsByPage());
  };
  const handleSeeMoreClick = selectedProduct => event => {
    event.stopPropagation();
    dispatch(getProduct(selectedProduct));
  }
  const { values: brandsValues, set: setBrandsValues, onSubmit: onBrandsSubmit } =
    useComboBox({ initialValue: [], submitCallback: values => dispatch(onGetSpecProductsByFilters({ key: 'brand', value: values })) });
  const handleBrandsSubmit = close => event => {
    close();
    onBrandsSubmit(event);
  };
  const { values: projectTypeValues, set: setProjectTypeValues, onSubmit: onProjectTypeSubmit } =
    useComboBox({ initialValue: [], submitCallback: values => dispatch(onGetSpecProductsByFilters({ key: 'project_type', value: values })) });
  const handleProjectTypeSubmit = close => event => {
    close();
    onProjectTypeSubmit(event);
  };
  const { values: roomTypeValues, set: setRoomTypeValues, onSubmit: onRoomTypeSubmit } =
    useComboBox({ initialValue: [], submitCallback: values => dispatch(onGetSpecProductsByFilters({ key: 'room_type', value: values })) });
  const handleRoomTypeSubmit = close => event => {
    close();
    onRoomTypeSubmit(event);
  };
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

  return (
    <Root>
      <Header>
        <HeaderSearch>
          <SearchBar justifyContent="center" maxWidth="432px" placeholder="Buscar" value={keywordValue} onChange={handleKeywordChange} />
        </HeaderSearch>
        <HeaderFilters>
          <Tag selected={allFilterIsSelected} onClick={handleFilterAll}>Todos</Tag>
          <ToggleMenu anchor={<Tag selected={brandsValues.length > 0}>Marcas</Tag>} width="291px">
            {onClose => (
              <ComboBox
                optionAll
                submit
                options={brands.map(brand => ({ label: brand.name || '', value: brand.id }))}
                placeholder="Selecciona"
                type="list"
                values={brandsValues}
                variant="secondary"
                onSubmit={handleBrandsSubmit(onClose)}
              />
            )}
          </ToggleMenu>
          <ToggleMenu anchor={<Tag selected={projectTypeValues.length > 0}>Tipo de proyecto</Tag>} width="291px">
            {onClose => (
              <ComboBox
                optionAll
                submit
                options={projectTypes.map(projectType => ({ label: projectType.name || '', value: projectType.id }))}
                placeholder="Selecciona"
                type="list"
                values={projectTypeValues}
                variant="secondary"
                onSubmit={handleProjectTypeSubmit(onClose)}
              />
            )}  
          </ToggleMenu>
          <Tag disabled selected={false}>Mis especificaciones</Tag>
          <ToggleMenu anchor={<Tag selected={roomTypeValues.length > 0}>Recintos</Tag>} width="291px">
            {onClose => (
              <ComboBox
                optionAll
                submit
                options={roomTypes.map(roomType => ({ label: roomType.name || '', value: roomType.id }))}
                placeholder="Selecciona"
                type="list"
                values={roomTypeValues}
                variant="secondary"
                onSubmit={handleRoomTypeSubmit(onClose)}
              />
            )}
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
            const selected = selectedProducts.find(selectedProduct => selectedProduct.id === product.id);

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
