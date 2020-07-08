import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useComboBox } from '../../components/inputs/Inputs.hooks';
import ToggleMenu from '../../components/menus/ToggleMenu';
import ComboBox from '../../components/inputs/ComboBox';
import { Button } from '../../components/SpecComponents';

import {
  getProductsByFilter,
} from '../products-list/ProductsList.actions';

const mapToSelector = ({ name = '', id }) => ({ id, label: name || '', value: id || name });

const ButtonComboBox = ({ options, name, children, absolute }) => {
  const { isSelectedAll, filters } = useSelector(state => state.productsList);
  const dispatch = useDispatch();
  const submitCallback = val => dispatch(getProductsByFilter({ ...filters, [name]: val }));

  const { values, set, onSubmit } = useComboBox({ initialValue: [], submitCallback });

  useEffect(() => {
    if (isSelectedAll) {
      set([]);
    }
  }, [isSelectedAll]);

  return (
    <ToggleMenu
      absolute={absolute}
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
    >{() => (
      <ComboBox
        options={options.map(mapToSelector)}
        placeholder="Selecciona"
        type="underline"
        values={values}
        onChange={onSubmit}
        optionAll
        absolute
      />
    )}
    </ToggleMenu>
  );
}

export default ButtonComboBox;