import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useComboBox } from '../../components/inputs/Inputs.hooks';
import ComboBox from '../../components/inputs/ComboBox';
import { Button } from '../../components/SpecComponents';

import {
  getProductsByFilter,
} from '../products-list/ProductsList.actions';
import { Container, Content } from './ButtonComboBox.styles';

const useOuterClick = callback => {
  const innerRef = useRef();
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {

    const handleClick = e => {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return innerRef;
}

const mapToSelector = ({ name = '', id }) => ({ id, label: name || '', value: id || name });

const ButtonComboBox = ({ options = [], name, children }) => {
  const { isSelectedAll, filters } = useSelector(state => state.productsList);
  const dispatch = useDispatch();
  const submitCallback = val => dispatch(getProductsByFilter({ ...filters, [name]: val }));
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const innerRef = useOuterClick(() => setIsOpen(false));

  const { values, set, onSubmit } = useComboBox({ initialValue: [], submitCallback });

  useEffect(() => {
    if (isSelectedAll) {
      set([]);
    }
  }, [isSelectedAll]);

  return (
    <Container isOpen={isOpen} ref={innerRef}>
      <Button
        inverse
        selected={values.length}
        variant={values.length ? 'secondary' : 'default'}
        onClick={toggle}
      >
        {children}
      </Button>
      <Content isOpen={isOpen}>
        <ComboBox
          options={options.map(mapToSelector)}
          placeholder="Selecciona"
          type="underline"
          values={values}
          onChange={onSubmit}
          optionAll
        />
      </Content>
    </Container>
  );
}

export default ButtonComboBox;