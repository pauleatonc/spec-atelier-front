import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEscapeKey } from '../../modules/hooks';
import { onAttachSpecProduct, onDetachSpecProduct } from '../spec-document/SpecDocument.actions';
import {
  onGetSpecProductsByFilters,
  onGetSpecProductsByFiltersAll,
  onGetSpecProductsByPage,
  onGetSpecProductsByKeyword,
  onGetSpecProductsBySort,
  onHideSpecProducts,
  getMySpecifications,
  getRoomTypes,
  onGetSpecProductsProjectType,
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
import { Overlay, Root, Header, HeaderSearch, HeaderFilters, Body, BodyHeader, Sort, Total, Cards, LoadMore, Loading } from './SpecProducts.styles';
import { mapToSelector } from '../../helpers/helpers';
import CreateProduct from '../../components/product/CreateProduct';
import { onShowSpecCreateProductFromItemSuccess } from '../spec-create-product/SpecCreateProduct.actions';

/**
 * The SpecProductsList's container.
 */
const SpecProductsList = () => {
  const { id: specID } = useParams();
  const { project_types: projectTypes } = useSelector(state => state.app);
  const { brands } = useSelector(state => state.brandsList);
  const selectedProducts = useSelector(state => state.specDocument.blocks?.filter(block => block.type === 'Product')) || [];
  const {
    nextPage,
    collection: products = [],
    loading,
    show,
    total,
    filters,
    specifications = [],
    room_types: roomTypes = [],
  } = useSelector(state => state.specProducts);
  const dispatch = useDispatch();

  const [keywordValue, setKeywordValue] = useState('');
  const [sortValue, setSortValue] = useState({});
  const [roomTypesOptions, setRoomTypesOptions] = useState(roomTypes);

  const handleHideSpecProducts = () => dispatch(onHideSpecProducts());
  const handleKeywordChange = event => {
    setKeywordValue(event.target.value);
    dispatch(onGetSpecProductsByKeyword({ keyword: event.target.value }));
  };

  const handleSortChange = option => {
    setSortValue(option);
    dispatch(onGetSpecProductsBySort({ sort: option.value }));
  };

  const handleCardClick = productID => event => {
    event.stopPropagation();
    const hasProduct = selectedProducts.find(selectedProduct => selectedProduct?.element.id === productID);
    const currentProduct = products.find(p => p.id === productID);
    if (hasProduct) {
      return dispatch(onDetachSpecProduct({ productID, specID }));
    }
    return dispatch(onAttachSpecProduct({ productID, specID, systemID: currentProduct?.systems[0]?.id }));
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

  const { values: projectTypeValues, set: setProjectTypeValues, onSubmit: onProjectTypeSubmit } =
    useComboBox({ initialValue: [], submitCallback: values => dispatch(onGetSpecProductsByFilters({ key: 'project_type', value: values })) });

  const { values: roomTypeValues, set: setRoomTypeValues, onSubmit: onRoomTypeSubmit } =
    useComboBox({ initialValue: [], submitCallback: values => dispatch(onGetSpecProductsByFilters({ key: 'room_type', value: values })) });

  const { values: specValues, set: setSpecValues, onSubmit: onSpecSubmit } =
    useComboBox({ initialValue: [], submitCallback: values => dispatch(onGetSpecProductsByFilters({ key: 'specification', value: values })) });

  const handleBrandsSubmit = close => event => {
    close();
    onBrandsSubmit(event);
  };

  const handleSpecSubmit = close => event => {
    close();
    onSpecSubmit(event);
  };

  const handleProjectTypeSubmit = close => event => {
    const filteredRoomTypes = roomTypes
      .filter(rt => rt.project_types.some(rpt => event.some(spt => spt.value === rpt.id)))
      .map(mapToSelector);
    console.log('even', event);
    dispatch(getRoomTypes({ project_types: event.map(({ value }) => value) }));
    onProjectTypeSubmit(event);
    setRoomTypesOptions(filteredRoomTypes);
    close();
  };

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

  const handleCreateProduct = () => {
    dispatch(onShowSpecCreateProductFromItemSuccess({ itemID: filters.item, sectionID: filters.section }));
  };

  const allFilterIsSelected = brandsValues.length === 0 && projectTypeValues.length === 0 && roomTypeValues.length === 0;

  useEscapeKey(show, () => dispatch(onHideSpecProducts()));
  useEffect(() => {
    if (show) {
      dispatch(getMySpecifications());
      dispatch(getRoomTypes({}));
      return;
    }

    setBrandsValues([]);
    setProjectTypeValues([]);
    setRoomTypeValues([]);
    setSortValue({});
    setSpecValues([]);
  }, [show]);

  useEffect(() => {
    setRoomTypesOptions(roomTypes);
  }, [roomTypes]);


  return (
    <>
      <Overlay onClick={handleHideSpecProducts} />
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
                  options={brands.filter(({ products_count }) => products_count).map(brand => ({ label: brand.name || '', value: brand.id }))}
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
            <ToggleMenu anchor={<Tag selected={!!specValues.length}>Mis especificaciones</Tag>} width="291px">
              {onClose => (
                <ComboBox
                  optionAll
                  submit
                  options={specifications.map(s => ({ label: s.name || '', value: s.id }))}
                  placeholder="Selecciona"
                  type="list"
                  values={specValues}
                  variant="secondary"
                  onSubmit={handleSpecSubmit(onClose)}
                />
              )}
            </ToggleMenu>
            <ToggleMenu anchor={<Tag selected={roomTypeValues.length > 0}>Recintos</Tag>} width="291px">
              {onClose => (
                <ComboBox
                  optionAll
                  submit
                  options={roomTypesOptions.map(rt => ({ label: rt.name || '', value: rt.id }))}
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
            {!!products.length && !loading && (
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
          {!!products.length &&
            <Cards>
              {products.map(product => {
                const selected = selectedProducts.find(selectedProduct => selectedProduct?.element.original_product_id === product.id);

                return (
                  <ProductCard
                    canAdd
                    category={product.system?.name || ''}
                    description={product.short_desc || ''}
                    key={`product-card-${product.id}`}
                    photo={product.images[0]?.urls?.small}
                    reference={product.reference || ''}
                    selected={Boolean(selected)}
                    title={product?.name}
                    onClickCard={handleCardClick(product.id)}
                    onClickSeeMore={handleSeeMoreClick(product)}
                  />
                );
              })}
            </Cards>
          }
          {!products.length && !loading && <CreateProduct onClickCreate={handleCreateProduct} />}
          {!!products.length && nextPage !== null && (
            <LoadMore>
              {loading && <Loading>Cargando...</Loading>}
              {!loading && <Button variant="gray" onClick={handleLoadMoreClick}>Ver más</Button>}
            </LoadMore>
          )}
        </Body>
      </Root>
    </>
  );
};

export default SpecProductsList;
