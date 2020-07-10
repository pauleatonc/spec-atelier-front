import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetProductsByFiltersAll,
  getSections,
  getItems,
  setSelectedAll,
  getProductsByFilter,
} from '../products-list/ProductsList.actions';
import { Button } from '../../components/SpecComponents';
import { Container, Content, Text } from './ProductsFilters.styles';
import { getBrands } from '../brands-list/BrandsList.actions';
import { getAppData } from '../../config/store/app-store/app.actions';
import ButtonComboBox from './ButtonComboBox';

/**
 * The ProductsFilters's container.
 */
const ProductsFilters = () => {
  const {
    project_types: projectTypes,
    room_types: roomTypes,
  } = useSelector(state => state.app);
  const { loaded } = useSelector(state => state.app);
  const { isSelectedAll, filters, sections, items } = useSelector(state => state.productsList);
  const { brands } = useSelector(state => state.brandsList);
  const dispatch = useDispatch();

  const handleFilterAll = () => dispatch(onGetProductsByFiltersAll());
  const submitCallback = ({ name, value }) => dispatch(getProductsByFilter({ ...filters, [name]: value }));

  useEffect(() => {
    if (!loaded) dispatch(getAppData());
    dispatch(getBrands());
    dispatch(getSections());
    // TODO: NEED API
    // dispatch(getItems());
  }, []);

  useEffect(() => {
    const { section = [], room_type = [], project_type = [], item = [], brand = [], sort = '', keyword = '' } = filters;
    if (!keyword && !section.length && !room_type.length && !project_type.length && !item.length && !brand.length && !sort) {
      dispatch(setSelectedAll(true));
    }
  }, [filters]);

  return (
    <Container>
      <Content>
        <Button
          selected={isSelectedAll}
          onClick={handleFilterAll}
          variant={isSelectedAll ? 'secondary' : 'default'}
          inverse
        >
          <Text>Todos</Text>
        </Button>
        <ButtonComboBox
          options={sections}
          name="section"
          onChange={submitCallback}
          currentOptions={filters.section}
        >
         <Text>Sección</Text>
        </ButtonComboBox>
        <ButtonComboBox
          options={items} // items
          name="item"
          onChange={submitCallback}
          currentOptions={filters.item}
        >
          <Text>Partidas</Text>
        </ButtonComboBox>
        <ButtonComboBox
          options={projectTypes}
          name="project_type"
          onChange={submitCallback}
          isGrey={!isSelectedAll}
          currentOptions={filters.project_type}
        >
          <Text>Tipo de proyecto</Text>
        </ButtonComboBox>
        <ButtonComboBox
          options={[]}
          name="most_used"
          onChange={submitCallback}
          currentOptions={filters.most_used}
        >
          <Text>Mas usados</Text>
        </ButtonComboBox>
        <ButtonComboBox
          options={roomTypes}
          name="room_type"
          onChange={submitCallback}
          currentOptions={filters.room_type}
        >
          <Text>Recintos</Text>
        </ButtonComboBox>
        <ButtonComboBox
          options={brands}
          name="brand"
          onChange={submitCallback}
          currentOptions={filters.brand}
        >
          <Text>Marcas</Text>
        </ButtonComboBox>
      </Content>
    </Container>
  );
};

export default ProductsFilters;
