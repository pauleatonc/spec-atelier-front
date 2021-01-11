import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetProductsByFiltersAll,
  getSections,
  getItems,
  setSelectedAll,
  getProductsByFilter,
  cleanStoreProductList,
} from '../profile-products/ProductsList.actions';
import { Button } from '../../components/SpecComponents';
import { Container, Content, Text } from './ProductsFilters.styles';
import { getBrands } from '../brands-list/BrandsList.actions';
import { getAppData } from '../../config/store/app-store/app.actions';
import ButtonComboBox from './ButtonComboBox';
import { mapToSelector } from '../../helpers/helpers';

/**
 * The ProductsFilters's container.
 */
const ProfileProductsFilters = () => {
  const { project_types: projectTypes, room_types: roomTypes } = useSelector(
    (state) => state.app,
  );
  const { loaded } = useSelector((state) => state.app);
  const { isSelectedAll, filters, sections, items } = useSelector(
    (state) => state.profileProductsList,
  );
  const { brands } = useSelector((state) => state.brandsList);
  const [roomTypesOptions, setRoomTypesOptions] = useState([]);
  const dispatch = useDispatch();

  const handleFilterAll = () => dispatch(onGetProductsByFiltersAll());
  const submitCallback = ({ name, value }) => {
    if (name === 'project_type') {
      const filteredRoomTypes = (value.length
        ? roomTypes.filter((rt) =>
            rt.project_types.some((rpt) =>
              value.some((val) => val.value === rpt.id),
            ),
          )
        : roomTypes
      ).map(mapToSelector);

      const selectedRoomTypes = filters.room_type.filter((rt) =>
        rt.project_types.some((rpt) =>
          value.some((val) => val.value === rpt.id),
        ),
      );

      setRoomTypesOptions(filteredRoomTypes);
      dispatch(
        getProductsByFilter({
          ...filters,
          room_type: selectedRoomTypes,
          [name]: value,
        }),
      );
    } else if (name === 'section') {
      dispatch(getItems({ section: value }));
      dispatch(getProductsByFilter({ ...filters, [name]: value }));
    } else if (name === 'brand') {
      dispatch(getSections({ ...filters, brand: value }));
      dispatch(getItems({ ...filters, brand: value }));
      dispatch(getProductsByFilter({ ...filters, [name]: value }));
    } else {
      dispatch(getProductsByFilter({ ...filters, [name]: value }));
    }
  };

  useEffect(() => {
    if (!loaded) dispatch(getAppData());
    dispatch(getBrands());
    dispatch(getSections());
    dispatch(getItems());
    setRoomTypesOptions(roomTypes.map(mapToSelector));
    return () => dispatch(cleanStoreProductList());
  }, []);

  useEffect(() => {
    if (roomTypes) setRoomTypesOptions(roomTypes.map(mapToSelector));
  }, [roomTypes]);

  useEffect(() => {
    const {
      section = [],
      room_type = [],
      project_type = [],
      item = [],
      brand = [],
      sort = '',
      keyword = '',
    } = filters;
    if (
      !keyword &&
      !section.length &&
      !room_type.length &&
      !project_type.length &&
      !item.length &&
      !brand.length &&
      !sort
    ) {
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
          variant="secondary"
          options={sections}
          name="section"
          onChange={submitCallback}
          currentOptions={filters.section}
          submit
        >
          <Text>Sección</Text>
        </ButtonComboBox>
        <ButtonComboBox
          variant="secondary"
          options={items}
          name="item"
          onChange={submitCallback}
          currentOptions={filters.item}
          submit
        >
          <Text>Partidas</Text>
        </ButtonComboBox>
        <ButtonComboBox
          variant="secondary"
          options={projectTypes}
          name="project_type"
          onChange={submitCallback}
          isGrey={!isSelectedAll}
          currentOptions={filters.project_type}
          submit
        >
          <Text>Tipo de proyecto</Text>
        </ButtonComboBox>
        <Button
          inverse
          variant={filters.most_used ? 'secondary' : 'default'}
          name="most_used"
          onClick={() =>
            submitCallback({ name: 'most_used', value: !filters.most_used })
          }
        >
          <Text>Mas usados</Text>
        </Button>
        <ButtonComboBox
          variant="secondary"
          options={roomTypesOptions}
          name="room_type"
          onChange={submitCallback}
          currentOptions={filters.room_type}
          submit
        >
          <Text>Recintos</Text>
        </ButtonComboBox>
        <ButtonComboBox
          variant="secondary"
          options={brands}
          name="brand"
          onChange={submitCallback}
          currentOptions={filters.brand}
          submit
        >
          <Text>Marcas</Text>
        </ButtonComboBox>
      </Content>
    </Container>
  );
};

export default ProfileProductsFilters;
