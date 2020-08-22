import React from 'react';
import Image from './Image';
import { Buttons, Button } from './ImageDragAndDrop.styles';

const ImageDragAndDrop = ({ img, onDrop, onDelete, onEdit, name, height, width }) => {
  const onClickDelete = () => onDelete(img);
  const onClickEdit = () => onEdit(img);
  return (
    <Image src={img.src} type="cover" width="100%" height="100%">
      <Buttons>
        <Button type="button" onClick={onClickDelete}>
          <i className="fas fa-trash" />
        </Button>
        {/* <Button type="button" onClick={onClickEdit}>
          <i className="fas fa-pen" />
        </Button> */}
      </Buttons>
    </Image>
  );
};

export default ImageDragAndDrop;