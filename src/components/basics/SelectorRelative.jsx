import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import IconUser from '../IconUser';
import ToolTip from '../tooltip/Tooltip';
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
  IconInfo,
} from './SelectorRelative.styles';

export const getDetailsText = (option) => {
  let detail = '';
  if (option.count) detail = detail.concat(' ', `(${option.count})`);
  if (option.date) detail = detail.concat(' - ', `${option.date}`);
  return detail;
};

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
  onChange: () => {},
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
  backgroundPuertoRico,
  showIconInfo,
  position,
  disabledSelected,
  itemSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onChangeOption = (value) => () => {
    const isDisabledOption = disabledSelected && value.id === itemSelected.id;
    if (!isDisabledOption) {
      onChange(value);
      toggle();
    }
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
        showIconInfo={showIconInfo}
      >
        {options.map((option) => (
          <ContentOption
            key={option.id}
            backgroundPuertoRico={backgroundPuertoRico}
            disabled={disabledSelected && itemSelected.id === option.id}
          >
            <Option
              value={option.id}
              onClick={onChangeOption(option)}
              hoverPrimaryColor={hoverPrimaryColor}
            >
              {Object.keys(option).includes('profile_image') ? (
                <ContentUser>
                  <IconUser user={option} size="28" />
                  <NameSection>{`${option.name} ${getDetailsText(
                    option,
                  )}`}</NameSection>
                </ContentUser>
              ) : (
                <OptionNameSection>
                  {option.label || option.name}
                </OptionNameSection>
              )}
              {showIconInfo && option?.tooltip && (
                <ToolTip content={option.tooltip} position={position}>
                  <IconInfo className="fas fa-info-circle" />
                </ToolTip>
              )}
            </Option>
          </ContentOption>
        ))}
        {!options.length && <NoOptions>No hay Opciones Disponibles</NoOptions>}
      </Content>
    </Container>
  );
};

SelectorRelative.propTypes = propTypes;
SelectorRelative.defaultProps = defaultProps;

export default SelectorRelative;
