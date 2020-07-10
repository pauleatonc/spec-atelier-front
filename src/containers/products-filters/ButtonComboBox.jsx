import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useComboBox } from '../../components/inputs/Inputs.hooks';
import ComboBox from '../../components/inputs/ComboBox';
import { Button } from '../../components/SpecComponents';
import { Container, Content } from './ButtonComboBox.styles';
import { mapToSelector } from '../../helpers/helpers';

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  currentOptions: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onChange: PropTypes.func,
};

const defaultProps = {
  options: [],
  currentOptions: [],
  children: null,
  onChange: () => {},
};

const ButtonComboBox = ({ options, currentOptions, name, children, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const submitCallback = value => onChange({ name, value });
  
  const { values, set, onSubmit } = useComboBox({ initialValue: currentOptions, submitCallback });
  
  const onClickOusite = callback => {
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
  };

  useEffect(() => {
    if (!currentOptions.length && values.length) {
      set([]);
    }
  }, [currentOptions]);
    
  const innerRef = onClickOusite(() => setIsOpen(false));

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
};

ButtonComboBox.propTypes = propTypes;
ButtonComboBox.defaultProps = defaultProps;

export default ButtonComboBox;