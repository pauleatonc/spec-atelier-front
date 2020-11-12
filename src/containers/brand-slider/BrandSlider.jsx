import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SlideImages from '../../components/slide-images/index';
import { getBrands } from './BrandSlider.actions';

const BrandSlider = () => {
  const dispatch = useDispatch();
  const { brands = [] } = useSelector(state => state.brandsSlider);
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  return (
    <SlideImages images={brands} />
  )
};

export default BrandSlider;