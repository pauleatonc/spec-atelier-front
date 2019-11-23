import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
	<footer className="footer">
		<div className="footer__inner">
			<div className="footer__inner__info">
				<div className="footer__inner__info__description">
					<div className="footer__inner__info__description__inner">
						<h2 className="footer__inner__info__description__inner__title">
							Contáctanos
						</h2>
						<div className="footer__inner__info__description__inner__content">
							<p className="footer__inner__info__description__inner__content__data">
								contacto@specatelier.com
							</p>
							<p className="footer__inner__info__description__inner__content__data">
								+56 9 8765 4321
							</p>
						</div>
					</div>

					<div className="footer__inner__info__description__inner">
						<div className="footer__inner__info__description__inner__content">
							<p className="footer__inner__info__description__inner__content__data">
								Copyright &copy; 2019 Spec Atelier. Todos los derechos
								reservados.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__inner__social">
				<div className="footer__inner__social__menu">
					<Link className="footer__inner__social__menu__link" to="/">
						Inicio
					</Link>
					<Link className="footer__inner__social__menu__link" to="/products">
						Productos
					</Link>
					<Link className="footer__inner__social__menu__link" to="/brands">
						Marcas
					</Link>
					<Link className="footer__inner__social__menu__link" to="/us">
						Nosotros
					</Link>
				</div>

				<div className="footer__inner__social__networking">
					<h3 className="footer__inner__social__networking__title">
						Síguenos en redes sociales
					</h3>
					<a
						className="footer__inner__social__networking__link"
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="footer__inner__social__networking__link__icon fab fa-facebook-square" />
					</a>
					<a
						className="footer__inner__social__networking__link"
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="footer__inner__social__networking__link__icon fab fa-instagram" />
					</a>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
