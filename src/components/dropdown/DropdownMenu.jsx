import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Root, Content } from './DropdownMenu.styles';

/**
 * The DropdownMenu's component.
 */
const DropdownMenu = props => {
  const { anchorRef, children, offset, open, origin, width, onClick, onClose } = props;
  const contentRef = useRef(undefined);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const calcPosition = useCallback(() => {
    const anchorBounds = anchorRef?.getBoundingClientRect();
    const contentBounds = contentRef?.current?.getBoundingClientRect();
    let positionX = (anchorBounds?.x || 0) + offset.x;
    let positionY = (anchorBounds?.y || 0) + (anchorBounds?.height || 0) + offset.y;
        
    if (origin.x === 'right') {
      positionX = (anchorBounds?.x || 0) + (anchorBounds?.height || 0) - (contentBounds?.width || 0) - offset.x;
    }

    if (origin.y === 'top') {
      positionY = (anchorBounds?.y || 0) + offset.y;
    }

    return { x: positionX, y: positionY };
  }, [open]);
  const handleContentClick = event => {
    event.stopPropagation();

    onClick(event);
  };

  useEffect(() => {
    const position = calcPosition();

    setTranslateX(position.x);
    setTranslateY(position.y);
  }, [open]);

  return (
    <Root open={open} onClick={onClose}>
      <Content
        ref={contentRef}
        translateX={translateX}
        translateY={translateY}
        width={width}
        onClick={handleContentClick}
      >
        {children}
      </Content>
    </Root>
  );
};

DropdownMenu.defaultProps = {
  anchorRef: undefined,
  offset: { x: 0, y: 0 },
  origin: { x: 'left', y: 'bottom' },
  width: 'initial',
  onClick: () => undefined,
};
DropdownMenu.propTypes = {
  anchorRef: PropTypes.shape({ current: PropTypes.element }),
  children: PropTypes.node.isRequired,
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

export default DropdownMenu;
