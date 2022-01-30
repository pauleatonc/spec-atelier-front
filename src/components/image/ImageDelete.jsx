import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import { Buttons, Button } from './ImageDelete.styles';

const propTypes = {
  img: PropTypes.oneOfType([
    PropTypes.instanceOf(window.File),
    PropTypes.object,
  ]),
  onDelete: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
  hideDelete: PropTypes.bool,
};

const defaultProps = {
  width: '100%',
  height: '100%',
  onDelete: () => undefined,
  img: { src: '' },
  hideDelete: false,
};

const ImageDelete = ({ img, onDelete, height, width, hideDelete }) => {
  const onClickDelete = () => onDelete(img);
  return (
    <Image src={img.src} containerWidth={width} containerHeight={height} objectFit="contain">
      {!hideDelete && (
        <Buttons>
          <Button type="button" onClick={onClickDelete}>
            <i className="fas fa-trash" />
          </Button>
        </Buttons>
      )}
    </Image>
  );
};

ImageDelete.propTypes = propTypes;
ImageDelete.defaultProps = defaultProps;

export default ImageDelete;