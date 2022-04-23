import React from 'react';
import Slider from 'react-slick';
import { DATA } from './constants';
import WALTER_SENTENCE from './images/walter_sentence.png';
import JOIN_UP from './images/join_up.png';
import BUILDING_AND_INNVOVATING from './images/building_and_innovating.png';
import {
  Container,
  Section,
  Icon,
  InfoContainer,
  Title,
  TextDescription,
  BannerSliderContainer,
  BannerSlider,
  TextSlider,
} from './styles';

const WhoWeUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    lazyLoad: true,
  };
  return (
    <Container>
      <BannerSliderContainer>
        <Slider {...settings}>
          <BannerSlider>
            <img
              className="container__images_content__image"
              src={JOIN_UP}
              alt="join up"
            />
            <TextSlider>
              ¡No lo pienses más, se uno de nuestros proveedores!
            </TextSlider>
          </BannerSlider>
          <BannerSlider>
            <img
              className="container__images_content__image"
              src={BUILDING_AND_INNVOVATING}
              alt="building and innovating"
            />
            <TextSlider>
              Seguimos desarrollando nuevas funcionalidades para construir la
              mejor herramienta para tus especificaciones.
            </TextSlider>
          </BannerSlider>
          <BannerSlider>
            <img
              className="container__images_content__image"
              src={WALTER_SENTENCE}
              alt="walter sentence"
            />
            <TextSlider>
              Dedica más tiempo a la arquitectura, y nosotros te ayudamos con
              las especificaciones.
            </TextSlider>
          </BannerSlider>
        </Slider>
      </BannerSliderContainer>
      {DATA.map((section) => (
        <Section key={section.title}>
          <Icon src={section.icon} alt={section.title} />
          <InfoContainer>
            <Title>{section.title}</Title>
            <TextDescription subtitle>{section.descent}</TextDescription>
            <TextDescription>{section.description}</TextDescription>
          </InfoContainer>
        </Section>
      ))}
    </Container>
  );
};

export default WhoWeUs;
