import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../SpecComponents';
import { LOGO_SMALL_WHITE, LOGO_CCHC, LOGO_CENTRO_INNOVACION, LOGO_CORFO } from '../../assets/Images';
import { Container, Content, LeftContent, RightContent, Menu, ImageContainer } from './Footer.styles';

const Footer = () => (
  <Container>
    <Content>
      <LeftContent>
        <Menu>
          <div className="footer__inner__menu__container__logo">
            <img
              alt=""
              className="footer__inner__menu__container__logo__content"
              src={LOGO_SMALL_WHITE}
            />
          </div>
          {/* <Link className="footer__inner__menu__container__link" to="/us">
            Nosotros
					</Link> */}
          <Link className="footer__inner__menu__container__link" to="/products">
            Productos
          </Link>
          <Link className="footer__inner__menu__container__link" to="/collaborators">
            Marcas
          </Link>
        </Menu>
        <ImageContainer>
          <Image src={LOGO_CCHC} width="120px" height="64px" />
          <Image src={LOGO_CENTRO_INNOVACION} width="164px" height="56px" />
          <Image src={LOGO_CORFO} width="168px" height="64px" />
        </ImageContainer>
      </LeftContent>
      <RightContent>
        <div className="footer__inner__info__container">
          <div className="footer__inner__info__container__contacts">
            <h3 className="footer__inner__info__container__contacts__title">
              Contáctanos
            </h3>
            <p className="footer__inner__info__container__contacts__contact">
              <i className="far fa-envelope footer__inner__info__container__contacts__contact__icon" />
              <span className="footer__inner__info__container__contacts__contact__text">
                <a href="mailto:contacto@specatelier.com">
                  contacto@specatelier.com
                </a>
              </span>
            </p>
            {/*   <p className="footer__inner__info__container__contacts__contact">
              <i className="fab fa-whatsapp footer__inner__info__container__contacts__contact__icon" />
              <span className="footer__inner__info__container__contacts__contact__text">
                <a
                  href="tel:+56987654321"
                  onClick={() =>
                    navigator.userAgent.match(
                      /Android|iPhone|iPad|iPod|Mobile/i,
                    ) != null
                  }
                >
                  +569 8765 4321
								</a>
              </span>
            </p> */}
          </div>
          <div className="footer__inner__info__container__social_network">
            <h3 className="footer__inner__info__container__social_network__title">
              Síguenos en
            </h3>
            <a href="https://www.instagram.com/specatelier/" className="footer__inner__info__container__social_network__link">
              <i className="fab fa-instagram footer__inner__info__container__social_network__link__icon" />
            </a>
            <a href="https://www.linkedin.com/company/specatelier" className="footer__inner__info__container__social_network__link">
              <i className="fab fa-linkedin footer__inner__info__container__social_network__link__icon" />
            </a>
          </div>
        </div>
        <div className="footer__inner__info__container">
          <p className="footer__inner__info__container__copyright">
            <span className="footer__inner__info__container__copyright__text">
              Copyright &copy; 2020 Walla Group SPA.
            </span>{' '}
            <span className="footer__inner__info__container__copyright__text">
              Todos los derechos reservados.
            </span>
          </p>
        </div>
      </RightContent>
    </Content>
  </Container>
);

export default Footer;
