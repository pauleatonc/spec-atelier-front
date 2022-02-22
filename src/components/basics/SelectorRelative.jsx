import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import IconUser from '../IconUser';
import {
  Container,
  Content,
  Option,
  Section,
  NoOptions,
  ContentUser,
  NameSection,
  ContentOption,
  OptionNameSection,
} from './SelectorRelative.styles';

const propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
  right: PropTypes.bool,
};

const defaultProps = {
  options: [],
  onChange: () => { },
  right: false,
};

const SelectorRelative = ({
  options,
  onChange,
  renderInput,
  width,
  maxHeight,
  right,
  hoverPrimaryColor,
  backgroundPuertoRico
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onChangeOption = (value) => () => {
    onChange(value);
    toggle();
  };

  const onClickOusite = (callback) => {
    const innerRef = useRef();
    const callbackRef = useRef();

    useEffect(() => {
      callbackRef.current = callback;
    });

    useEffect(() => {
      const handleClick = (e) => {
        if (
          innerRef.current &&
          callbackRef.current &&
          !innerRef.current.contains(e.target)
        ) {
          callbackRef.current(e);
        }
      };
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }, []);

    return innerRef;
  };

  const innerRef = onClickOusite(() => {
    if (!isOpen) return;
    setIsOpen(false);
  });

  return (
    <Container isOpen={isOpen} ref={innerRef} width={width}>
      <Section onClick={toggle}>{renderInput}</Section>
      <Content
        isOpen={isOpen}
        width={width}
        maxHeight={maxHeight}
        right={right}
      >
        {
          (options.map(option => (
            <ContentOption key={option.id} backgroundPuertoRico={backgroundPuertoRico}>
              <Option value={option.id} onClick={onChangeOption(option)} hoverPrimaryColor={hoverPrimaryColor}>
                {Object.keys(option).includes('profile_image')
                  ?
                  <ContentUser>
                    <IconUser user={option} size='28' />
                    <NameSection>{option.name}</NameSection>
                  </ContentUser>
                  :
                  <OptionNameSection>
                    {option.label || option.name}
                  </OptionNameSection>
                }
              </Option>
            </ContentOption>
          )))
        }
        {!options.length && <NoOptions>No hay Opciones Disponibles</NoOptions>}
      </Content>
    </Container>
  );
};

SelectorRelative.propTypes = propTypes;
SelectorRelative.defaultProps = defaultProps;

export default SelectorRelative;
