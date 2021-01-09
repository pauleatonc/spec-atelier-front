import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SliderImages from '../../components/slide-images';
import { getBrands } from './BrandsImageSlider.actions';

const BrandsImageSlider = () => {
  const { brands } = useSelector(state => state.brandsImageSlider);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  if (!brands || !brands.length) return null;
  return (
    <SliderImages images={brands} />
  );
};

export default BrandsImageSlider;