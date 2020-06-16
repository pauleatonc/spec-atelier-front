import React from 'react';
import { Container, Img, Content } from './Image.styles';

export const Image = props => {
  const { src, children } = props;
  return (
    <Container>
      <Img src={src} />
      {children && <Content>{children}</Content>}
    </Container>
  );
}

export default Image;