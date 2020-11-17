import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  InfoContainer,
  Icon,
  Name,
  Size,
  Buttons,
  Button,
  Delete,
  Edit,
  Text,
} from './FileItem.styles';

const FileItem = ({ src, onClickDelete, type }) => {
  const [hover, setHover] = useState(false);

  const getType = (name = '') => {
    if (name.includes('.pdf')) return 'pdf';
    if (name.includes('.dwg')) return 'dwg';
    if (name.includes('.rvt')) return 'rtv';
    return type || 'doc';
  };
  const [currentType, setCurrentType] = useState(getType(src));

  useEffect(() => {
    setCurrentType(getType(src));
  }, [src]);

  return (
    <Container onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)}>
      {src ? (
        <>
          <Icon type={currentType} />
          <InfoContainer>
            <Name>
              {file.name}
            </Name>
            <Size>
              {file.size}
            </Size>
          </InfoContainer>
          <Button type="button" onClick={onClickDelete}>
            <i className="fas fa-trash" />
          </Button>
        </>
      ) : (
        <>
          <InfoContainer>
            <Text>Agregar {type?.toUpperCase() || 'Archivo'}</Text>
          </InfoContainer>
        </>
      )} 
    </Container >
  );
};

FileItem.propTypes = {
  // file: ,
};

FileItem.defaultProps = {
  // file: 'pdf',
};

export default FileItem;