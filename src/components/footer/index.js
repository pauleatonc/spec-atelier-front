import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/images/logo_footer.png';

const Footer = () => (
	<footer className="footer">
		<div className="footer__inner">
			<div className="footer__inner__menu">
				<div className="footer__inner__menu__container">
					<div className="footer__inner__menu__container__logo">
						<img
							className="footer__inner__menu__container__logo__content"
							src={LOGO}
						/>
					</div>
					<Link className="footer__inner__menu__container__link" to="/us">
						Nosotros
					</Link>
					<Link className="footer__inner__menu__container__link" to="/products">
						Productos
					</Link>
					<Link className="footer__inner__menu__container__link" to="/brands">
						Marcas
					</Link>
				</div>
			</div>

			<div className="footer__inner__info">
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
						<p className="footer__inner__info__container__contacts__contact">
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
						</p>
					</div>
					<div className="footer__inner__info__container__social_network">
						<h3 className="footer__inner__info__container__social_network__title">
							Síguenos en
						</h3>
						<a className="footer__inner__info__container__social_network__link">
							<i className="fab fa-instagram footer__inner__info__container__social_network__link__icon" />
						</a>
					</div>
				</div>
				<div className="footer__inner__info__container">
					<p className="footer__inner__info__container__copyright">
						<span className="footer__inner__info__container__copyright__text">
							Copyright &copy; 2020 Spec Atelier.
						</span>{' '}
						<span className="footer__inner__info__container__copyright__text">
							Todos los derechos reservados.
						</span>
					</p>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
