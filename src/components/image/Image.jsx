import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { NO_PHOTO } from 'assets/Images';
import { Container, Img, Content } from './Image.styles';

const Image = (props) => {
  const {
    src,
    children,
    type,
    width,
    height,
    maxWidth,
    maxHeight,
    objectFit,
    containerHeight,
    containerWidth,
  } = props;
  const [displayedImg, setDisplayedImg] = useState(src || NO_PHOTO);
  const imgRef = useRef(null);
  const onError = () => {
    imgRef.current.src = NO_PHOTO;
  };

  useEffect(() => setDisplayedImg(src), [src]);

  return (
    <Container
      width={containerWidth || width}
      height={containerHeight || height}
    >
      <Img
        src={displayedImg}
        onError={onError}
        type={type}
        ref={imgRef}
        width={width}
        height={height}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        objectFit={objectFit}
      />
      {children && <Content>{children}</Content>}
    </Container>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  children: PropTypes.element,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  objectFit: PropTypes.string,
  containerWidth: PropTypes.string,
  containerHeight: PropTypes.string,
};

Image.defaultProps = {
  src: '',
  children: null,
  type: 'cover',
  width: '',
  height: '',
  maxWidth: '',
  maxHeight: '',
  objectFit: 'none',
  containerWidth: '',
  containerHeight: '',
};

export default Image;
