import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/image/Image';
import { Container, Content } from './ClientGallery.styles';

const names = ['one', 'two', 'three', 'four', 'five'];

const ClientGallery = ({ images }) => {
  const imgs = images.map((img, i) => ({ ...img, name: names[i] }));
  return (
    <Container>
      {imgs.map((img) => (
        <Content key={img.id} name={img.name}>
          <Image
            src={img.url}
            height={img.name === 'three' ? '240px' : '140px'}
            width="100%"
            objectFit="cover"
          />
        </Content>
      ))}
    </Container>
  );
};

ClientGallery.propTypes = {
  images: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

ClientGallery.defaultProps = {
  images: [],
};

export default ClientGallery;
