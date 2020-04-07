import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetProductsByItem } from '@Actions/project-specification.actions';
import { getProduct, toggleModalProduct } from '@Actions/product.actions';
import Breadcrumbs from '@Components/basics/breadcrumbs';
import SearchBar from '@Components/filters/search-bar';
import Tag from '@Components/filters/tag';
import SnackBar from '@Components/basics/snack-bar';
import ProductCard from '@Components/cards/product-card';
import LoadButton from '@Components/buttons/load-button';

/**
 * The Products' component.
 */
const Products = () => {
  const dispatch = useDispatch();
  const {
    productsBreadcrumbsLabels: breadcrumbsLabels,
    productsFilters: filters,
    productsNextPage: nextPage,
    productsCollection: products = [],
    productsTotal: total,
    selectedSectionItemID,
  } = useSelector(state => state.projectSpecification);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedFilters, setSelectedFilters] = useState(['all']);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleSearchChange = event => {
    setSearch(event.target.value);
    dispatch(onGetProductsByItem({ search: event.target.value, filters: selectedFilters }));
  };
  const handleFilterClick = currentFilterTag => () => {
    const hasFilterTag = selectedFilters.find(filterTag => filterTag === currentFilterTag);
    let updatedFilters = [].concat(selectedFilters);

    if (currentFilterTag === 'all') {
      updatedFilters = ['all'];
    } else if (hasFilterTag) {
      updatedFilters = updatedFilters.filter(filterTag => filterTag !== currentFilterTag);
    } else {
      updatedFilters = updatedFilters
        .filter(filterTag => filterTag !== 'all')
        .concat(currentFilterTag);
    }

    if (updatedFilters.length === 0) {
      updatedFilters.push('all');
    }

    setSelectedFilters(updatedFilters);
    dispatch(onGetProductsByItem({ search, filters: updatedFilters }));
  };
  const handleCardClick = currentProductID => () => {
    const hasProduct = selectedProducts.find(productID => productID === currentProductID);
    let updatedProducts = [].concat(selectedProducts);

    if (hasProduct) {
      updatedProducts = updatedProducts.filter(productID => productID !== currentProductID);
    } else {
      updatedProducts = updatedProducts.concat(currentProductID);
      setShowSnackBar(true);
    }

    setSelectedProducts(updatedProducts);
  };
  const handleLoadMoreClick = () => {
    dispatch(onGetProductsByItem({ search, filters: selectedFilters }));
  };
  const handleSeeMoreClick = selectedProduct => () => {
    dispatch(getProduct(selectedProduct));
    dispatch(toggleModalProduct(true));
  };

  useEffect(() => {
    setSearch('');
    setSelectedFilters(['all']);
    setSelectedProducts([]);
    dispatch(onGetProductsByItem());
  }, [selectedSectionItemID]);

  useEffect(() => {
    if (!showSnackBar) {
      return;
    }

    setTimeout(() => setShowSnackBar(false), 2000);
  }, [showSnackBar]);

  return (
    <div className="products-by-item">
      {showSnackBar && <SnackBar message="Añadiste productos a una sección" />}
      <section className="products-by-item__breadcrumbs">
        <Breadcrumbs labels={breadcrumbsLabels} />
      </section>
      <section className="products-by-item__search">
        <SearchBar placeholder="Buscar" value={search} onChange={handleSearchChange} />
      </section>
      <section className="products-by-item__filters">
        {filters.map(filter => {
          const selected = selectedFilters.find(selectedFilter => selectedFilter === filter.tag);

          return (
            <Tag
              key={`products-by-item__filter--${filter.tag}`}
              selected={Boolean(selected)}
              onClick={handleFilterClick(filter.tag)}
            >
              {filter.label}
            </Tag>
          );
        })}
      </section>
      <section className="products-by-item__list">
        <section className="products-by-item__list--total">
          {`${total} producto(s)`}
        </section>
        <section className="products-by-item__list--cards">
          {products.map(product => {
            const selected = selectedProducts.find(selectedProduct => selectedProduct === product.id);

            return (
              <ProductCard
                category={`Sistema constructivo: ${product.system.name}`}
                description={product.short_desc}
                key={`product-card-${product.id}`}
                photo={product.images[0]}
                reference={product.reference}
                selected={Boolean(selected)}
                title={product.name}
                onClickCard={handleCardClick(product.id)}
                onClickSeeMore={handleSeeMoreClick(product)}
              />
            );
          })}
        </section>
      </section>
      {nextPage !== null && (
        <section className="products-by-item__load-more">
          <LoadButton onClick={handleLoadMoreClick}>
            Ver más
          </LoadButton>
        </section>
      )}
    </div>
  );
};

export default Products;