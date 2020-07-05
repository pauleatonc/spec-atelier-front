import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetProductsByFilters,
  onGetProductsByFiltersAll,
} from '../products-list/ProductsList.actions';
import { useComboBox } from '../../components/inputs/Inputs.hooks';
import ToggleMenu from '../../components/menus/ToggleMenu';
import ComboBox from '../../components/inputs/ComboBox';
import { Button } from '../../components/SpecComponents';
import { Container, Content, Text } from './ProductsFilters.styles';
import { getBrands } from '../brands-list/BrandsList.actions';
import { getAppData } from '../../config/store/app-store/app.actions';
import { onGetSpecProductsSections } from '../spec-products-sections/SpecProductsSections.actions';


const mapToSelector = ({ name = '', id }) => ({ id, label: name || '', value: id || name });

const ButtonComboBox = ({ options, name, children }) => {
  const { isSelectedAll, filters } = useSelector(state => state.productsList);
  const dispatch = useDispatch();
  const {
    values,
    set,
    onChange,
  } = useComboBox(options, value => dispatch(onGetProductsByFilters({ ...filters, [name]: value })));

  useEffect(() => {
    if (isSelectedAll) set([]);
  }, [isSelectedAll]);

  return (
    <ToggleMenu
      anchor={(
        <Button
          inverse
          selected={values.length}
          variant={values.length ? 'secondary' : 'default'}
          onClick={() => {}}
        >
          <Text>{children}</Text>
        </Button>
      )}
    >
      <ComboBox
        options={options.map(mapToSelector)}
        placeholder="Selecciona"
        type="underline"
        values={values}
        onChange={onChange}
      />
    </ToggleMenu>
  );
}

/**
 * The ProductsFilters's container.
 */
const ProductsFilters = () => {
  const {
    project_types: projectTypes,
    room_types: roomTypes,
    work_types: workTypes,
  } = useSelector(state => state.app);
  const { loaded } = useSelector(state => state.app);
  const { isSelectedAll } = useSelector(state => state.productsList);
  const { collection: sections } = useSelector(state => state.specProductsSections);
  const { brands } = useSelector(state => state.brandsList);
  const dispatch = useDispatch();

  const handleFilterAll = () => dispatch(onGetProductsByFiltersAll());

  useEffect(() => {
    if (!loaded) dispatch(getAppData());
    dispatch(getBrands());
    dispatch(onGetSpecProductsSections());
  }, []);

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
        >
          Sección
        </ButtonComboBox>
        <ButtonComboBox
          options={roomTypes} // items
          name="item"
        >
          Partidas
        </ButtonComboBox>
        <ButtonComboBox
          options={projectTypes}
          name="project_type"
        >
          Tipo de proyecto
        </ButtonComboBox>
        <ButtonComboBox
          options={[]}
          name="most_used"
        >
          Mas usados
        </ButtonComboBox>
        <ButtonComboBox
          options={roomTypes}
          name="room_type"
        >
          Recintos
        </ButtonComboBox>
        <ButtonComboBox
          options={brands}
          name="brand"
        >
          Marcas
        </ButtonComboBox>
      </Content>
    </Container>
  );
};

export default ProductsFilters;
