import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { BLACK } from 'config/constants/styled-vars';
import { Root, Content } from './Dropdown.styles';

/** The Dropdown' component */
const Dropdown = (props) => {
  const {
    anchorRef,
    boxShadow,
    children,
    maxHeight,
    offset,
    open,
    origin,
    width,
    onClick,
    onClose,
  } = props;
  const contentRef = useRef(undefined);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const calcPosition = useCallback((anchorBounds, contentBounds) => {
    let positionX = (anchorBounds?.x || 0) + offset.x;
    let positionY =
      (anchorBounds?.y || 0) + (anchorBounds?.height || 0) + offset.y;

    if (origin.x === 'right') {
      positionX =
        (anchorBounds?.x || 0) +
        (anchorBounds?.height || 0) -
        (contentBounds?.width || 0) -
        offset.x;
    }

    if (origin.y === 'top') {
      positionY = (anchorBounds?.y || 0) + offset.y;
    }

    return { x: positionX, y: positionY };
  }, []);
  const handleContentClick = (event) => {
    event.stopPropagation();

    onClick(event);
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const anchorBounds = anchorRef?.getBoundingClientRect();
    const contentBounds = contentRef?.current?.getBoundingClientRect();
    const position = calcPosition(anchorBounds, contentBounds);

    setTranslateX(position.x);
    setTranslateY(position.y);
    setShowContent(true);
  }, [open]);

  return (
    <Root open={open} onClick={onClose}>
      {open && (
        <Content
          boxShadow={boxShadow}
          maxHeight={maxHeight}
          ref={contentRef}
          show={showContent}
          translateX={translateX}
          translateY={translateY}
          width={width}
          onClick={handleContentClick}
        >
          {children}
        </Content>
      )}
    </Root>
  );
};

Dropdown.defaultProps = {
  anchorRef: undefined,
  boxShadow: `0 1px 3px 0 rgba(${BLACK}, 0.2), 0 2px 1px -1px rgba(${BLACK}, 0.12), 0 1px 1px 0 rgba(${BLACK}, 0.14)`,
  maxHeight: 'initial',
  offset: { x: 0, y: 0 },
  origin: { x: 'left', y: 'bottom' },
  width: 'initial',
  onClick: () => undefined,
};
Dropdown.propTypes = {
  anchorRef: PropTypes.shape({ current: PropTypes.element }),
  boxShadow: PropTypes.string,
  children: PropTypes.node.isRequired,
  maxHeight: PropTypes.string,
  offset: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  open: PropTypes.bool.isRequired,
  origin: PropTypes.shape({
    x: PropTypes.oneOf(['left', 'right']),
    y: PropTypes.oneOf(['bottom', 'top']),
  }),
  width: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

export default Dropdown;
