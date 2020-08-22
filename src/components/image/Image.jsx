import React, { useEffect , useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Container, Img, Content } from './Image.styles';
import noPhoto from '../../assets/images/icons/no-photo.svg';

const Image = props => {
  const { src, children, type, width, height } = props;
  const [displayedImg, setDisplayedImg] = useState(src || noPhoto);
  const imgRef = useRef(null);
  const onError = () => {
    imgRef.current.src = noPhoto;
  };
  useEffect(() => {
    setDisplayedImg(src);
  }, [src]);
  return (
    <Container width={width} height={height}>
      <Img src={displayedImg} onError={onError} type={type} ref={imgRef} />
      {children && <Content>{children}</Content>}
    </Container>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  children: PropTypes.element,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  src: '',
  children: null,
  type: 'cover',
  width: 'auto',
  height: 'auto',
}

export default Image;