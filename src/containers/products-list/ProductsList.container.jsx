import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container }  from './ProductsList.styles';
import { onGetProducts } from './ProductsList.actions';
import { getProduct } from '../spec-modal-product/SpecModalProduct.actions';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import ProductCard from '../../components/cards/ProductCard';

const ProductList = () => {
  const { products, error, loading, filters } = useSelector(state => state.productsList);
  const dispatch = useDispatch();
  const onClickProduct = selectedProduct => () => {
    dispatch(getProduct(selectedProduct));
  };

  useEffect(() => {
    if (!products.length) dispatch(onGetProducts(filters));
    // return () => dispatch(cleanProductList())
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!products.length) return null;

  return (
    <Container>
      {products.map(product => (
        <ProductCard
          key={product.id}
          category={`Sistema constructivo: ${product.system.name}`}
          description={product.short_desc}
          photo={product.images[0]?.urls?.thumb}
          reference={product.reference}
          title={product.name}
          onClickCard={onClickProduct(product)}
          onClickSeeMore={onClickProduct(product)}
        />
      ))}
    </Container>
  );
};

export default ProductList;