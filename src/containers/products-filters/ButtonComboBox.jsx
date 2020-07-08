import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useComboBox } from '../../components/inputs/Inputs.hooks';
import ToggleMenu from '../../components/menus/ToggleMenu';
import ComboBox from '../../components/inputs/ComboBox';
import { Button } from '../../components/SpecComponents';

import {
  getProductsByFilter,
} from '../products-list/ProductsList.actions';
import { FooterContent } from './ButtonComboBox.styles';

const mapToSelector = ({ name = '', id }) => ({ id, label: name || '', value: id || name });

const ButtonComboBox = ({ options, name, children }) => {
  const { isSelectedAll, filters } = useSelector(state => state.productsList);
  const dispatch = useDispatch();
  const {
    values,
    set,
    onChange,
  } = useComboBox(options, value => dispatch(getProductsByFilter({ ...filters, [name]: value })));

  useEffect(() => {
    if (isSelectedAll) {
      set([]);
    }
  }, [isSelectedAll]);

  const clearOptions = () => dispatch(getProductsByFilter({ ...filters, [name]: [] }));

  const Footer = () => (
    <FooterContent>
      <Button onClick={clearOptions}>Borrar</Button>
    </FooterContent>
  );

  return (
    <ToggleMenu
      anchor={(
        <Button
          inverse
          selected={values.length}
          variant={values.length ? 'secondary' : 'default'}
          onClick={() => { }}
        >
          {children}
        </Button>
      )}
    >
      <ComboBox
        options={options.map(mapToSelector)}
        placeholder="Selecciona"
        type="underline"
        values={values}
        onChange={onChange}
        footer={<Footer />}
      />
    </ToggleMenu>
  );
}

export default ButtonComboBox;