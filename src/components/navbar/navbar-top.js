/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LOGO from '@Assets/images/logo.png';
import LOGO_MOBILE from '@Assets/images/logo_footer.png';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import { presenterAction } from '@Actions';
import Dropdown from '../dropdown';

const handleShowLateralMenu = () => {
  const menu = document.querySelector('.lateral_menu');
  menu.classList.toggle('show');
}

const NavBar = props => {
	const { presenterMethod } = props;

	return (
		<nav className="navbar">
			<div className="navbar__inner">
				<div className="navbar__inner__logo-content">
					<Link to="/" data-view="home" onClick={() => presenterMethod('app')}>
						<img
							className="navbar__inner__logo-content__image"
							src={LOGO}
							alt="Logotipo de SpecAtelier"
						/>
						<img
							className="navbar__inner__logo-content__image__mobile"
							src={LOGO_MOBILE}
							alt="Logotipo de SpecAtelier"
						/>
					</Link>
				</div>

				<ul className="navbar__inner__section--mobile">
					<button
						className="navbar__inner__section--mobile__button"
						onClick={handleShowLateralMenu}
					>
						<i className="fas fa-bars navbar__inner__section--mobile__button__icon" />
					</button>

					<nav className="lateral_menu">
						<div className="lateral_menu__inner">
							{!!getLocalStorage('token') && (
								<li className="lateral_menu__inner__item">
									<Link
										to="/projects"
										className="lateral_menu__inner__item__link"
										data-view="projects"
										onClick={() => presenterMethod('app')}
									>
										Proyectos
									</Link>
								</li>
							)}
							<li className="lateral_menu__inner__item">
								<Link
									to="/products"
									className="lateral_menu__inner__item__link"
									data-view="products"
									onClick={() => presenterMethod('app')}
								>
									Productos
								</Link>
							</li>
							<li className="lateral_menu__inner__item">
								<Link
									to="/brands"
									className="lateral_menu__inner__item__link"
									data-view="brands"
									onClick={() => presenterMethod('app')}
								>
									Marcas
								</Link>
							</li>
							<br />
							<li className="lateral_menu__inner__item">
								<Link to="/profile" className="lateral_menu__inner__item__link">
									Perfil
								</Link>
							</li>

							<li className="lateral_menu__inner__item">Cerrar sesión</li>
						</div>
					</nav>
				</ul>

				<ul className="navbar__inner__section">
					<li className="navbar__inner__section__item">
						<Link
							to="/products"
							className="navbar__inner__section__item__link"
							data-view="products"
							onClick={() => presenterMethod('app')}
						>
							Productos
						</Link>
					</li>
					<li className="navbar__inner__section__item">
						<Link
							to="/brands"
							className="navbar__inner__section__item__link"
							data-view="brands"
							onClick={() => presenterMethod('app')}
						>
							Marcas
						</Link>
					</li>
					{!!getLocalStorage('token') && (
						<li className="navbar__inner__section__item">
							<Link
								to="/projects"
								className="navbar__inner__section__item__link"
								data-view="projects"
								onClick={() => presenterMethod('app')}
							>
								Proyectos
							</Link>
						</li>
					)}
					{!getLocalStorage('token') ? (
						<>
							<li className="navbar__inner__section__item">
								<Link
									to="/registration"
									className="navbar__inner__section__item__link button--registration"
									data-view="brands"
									onClick={() => presenterMethod('app')}
								>
									Regístrate
								</Link>
							</li>
							<li className="navbar__inner__section__item">
								<Link
									to="/login"
									className="navbar__inner__section__item__link button--login"
									data-view="brands"
									onClick={() => presenterMethod('app')}
								>
									<i className="fas fa-user-circle" />
									Iniciar sesión
								</Link>
							</li>
						</>
					) : (
						<Dropdown />
					)}
				</ul>
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	presenterMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		presenterMethod: presenterAction(dispatch),
	}),
)(NavBar);
