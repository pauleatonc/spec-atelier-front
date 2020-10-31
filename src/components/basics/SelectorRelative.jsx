import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Option, Section } from './SelectorRelative.styles';
import { mapToSelector } from '../../helpers/helpers';

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    name: PropTypes.string,
  })),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const defaultProps = {
  options: [],
  children: null,
  onChange: () => { },
};

const SelectorRelative = ({ options, name, onChange, renderInput, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onChangeOption = value => () => {
    onChange(value);
    toggle();
  }

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

  const innerRef = onClickOusite(() => {
    if (!isOpen) return
    setIsOpen(false);
  });


  return (
    <Container isOpen={isOpen} ref={innerRef} width={width}>
      <Section onClick={toggle}>
        {renderInput}
      </Section>
      <Content isOpen={isOpen} width={width}>
        {options.map(option => (
          <Option key={option.id} onClick={onChangeOption(option)} value={option.id}>{option.label}</Option>
        ))}
      </Content>
    </Container>
  );
};

SelectorRelative.propTypes = propTypes;
SelectorRelative.defaultProps = defaultProps;

export default SelectorRelative;