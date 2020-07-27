import React, {useState} from 'react';
import { 
  Container, 
  InfoContainer, 
  Icon, 
  Name, 
  Size, 
  Buttons, 
  Delete, 
  Edit,
} from './FileItem.styles';

const FileItem = ({ file }) => {
  const [hover, setHover] = useState(false);
  return (
    <Container onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)}>
      <Icon />
      <InfoContainer>
        <Name>
          Archivo.pdf
        </Name>
        <Size>
          Size.pdf
        </Size>
      </InfoContainer>
      <Buttons show={hover}>
        <Delete />
        <Edit />
      </Buttons>
    </Container>
  );
};

export default FileItem;