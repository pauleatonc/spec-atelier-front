import React from 'react';
import { Image } from '../SpecComponents'

const ImageDragAndDrop = ({ src, onDrop, onDelete, name }) => {
  
  return (
    <Image src={src}>
      <button>eliminar</button>
      <button>editar</button>
    </Image>
  );
};

export default ImageDragAndDrop;