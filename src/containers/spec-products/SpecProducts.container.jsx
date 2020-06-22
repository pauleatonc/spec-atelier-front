import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import { onGetSpecProductsByFilters, onGetSpecProductsByPage, onGetSpecProductsBySearch } from './SpecProducts.actions';
import { getProduct } from '../spec-modal-product/SpecModalProduct.actions';
import SearchBar from '../../components/filters/SearchBar';
import Tag from '../../components/filters/Tag';
import Button from '../../components/buttons/Button';
import ProductCard from '../../components/cards/ProductCard';
import { Root, Header, HeaderSearch, HeaderFilters, Body, Total, Cards, LoadMore, Loading } from './SpecProducts.styles';

const filters = [
  { label: 'Todos', tag: 'all' },
  { label: 'Marcas', tag: 'brands' },
  { label: 'Tipo de proyecto', tag: 'projects_types' },
  { label: 'Mis especificaciones', tag: 'my_specifications' },
  { label: 'Creado por usuarios', tag: 'created_by_users' },
  { label: 'Recintos', tag: 'enclosures' },
];

/**
 * The SpecProductsList's container.
 */
const SpecProductsList = () => {
  const { selectedItemID } = useSelector(state => state.specProductsItems);
  const { nextPage, collection: products = [], loading, show, total } = useSelector(state => state.specProducts);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [selectedFilters] = useState(['all']);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleSearchChange = event => {
    setSearch(event.target.value);
    dispatch(onGetSpecProductsBySearch({ search: event.target.value }));
  };
  const handleFiltersClick = () => () => {
    // TODO: handle filters tags.
    dispatch(onGetSpecProductsByFilters({}));
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

  return (
    <Root>
      <Header>
        <HeaderSearch>
          <SearchBar justifyContent="center" maxWidth="432px" placeholder="Buscar" value={search} onChange={handleSearchChange} />
        </HeaderSearch>
        <HeaderFilters>
          {filters.map(filter => {
            // TODO: handle filters tags
            // const selected = selectedFilters.find(selectedFilter => selectedFilter === filter.tag);

            return (
              <Tag
                selected
                key={`products-by-item__filter--${filter.tag}`}
                onClick={handleFiltersClick(filter.tag)}
              >
                {filter.label}
              </Tag>
            );
          })}
        </HeaderFilters>
      </Header>
      <Body>
        <Total>{loading ? 'Cargando...' : `${products.length} de ${total} producto(s)`}</Total>
        <Cards>
          {products.map(product => {
            const selected = selectedProducts.find(selectedProduct => selectedProduct === product.id);

            return (
              <ProductCard
                canAdd
                category={`Sistema constructivo: ${product.system.name}`}
                description={product.short_desc}
                key={`product-card-${selectedItemID}-${product.id}`}
                photo={product.images[0]?.urls?.thumb}
                reference={product.reference}
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
