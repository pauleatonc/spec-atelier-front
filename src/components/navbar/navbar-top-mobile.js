/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import { presenterAction, logoutAction } from '@Actions';
import FULL_LOGO from '@Assets/images/full_logo.png';

const handleShowLateralMenu = () => {
	const menu = document.querySelector('.lateral_menu');
	menu.classList.toggle('show');
};

const NavBarTopMobile = props => {
	const { presenterMethod, logoutMethod } = props;

	return (
		<ul className="navbar__inner__section--mobile">
			<button
				className="navbar__inner__section--mobile__button"
				onClick={handleShowLateralMenu}
			>
				<i className="fas fa-bars navbar__inner__section--mobile__button__icon" />
			</button>

			<nav className="lateral_menu">
				<div className="lateral_menu__inner">
					<img className="" src={FULL_LOGO} atl="spectaelier" />
					<div className="lateral_menu__inner__content">
						{!!getLocalStorage('token') && (
							<li className="lateral_menu__inner__content__item">
								<Link
									to="/projects"
									className="lateral_menu__inner__content__item__link"
									data-view="projects"
									onClick={() => presenterMethod('app')}
								>
									Proyectos
								</Link>
							</li>
						)}
						<li className="lateral_menu__inner__content__item">
							<Link
								to="/products"
								className="lateral_menu__inner__content__item__link"
								data-view="products"
								onClick={() => presenterMethod('app')}
							>
								Productos
							</Link>
						</li>
						<li className="lateral_menu__inner__content__item">
							<Link
								to="/brands"
								className="lateral_menu__inner__content__item__link"
								data-view="brands"
								onClick={() => presenterMethod('app')}
							>
								Marcas
							</Link>
						</li>

						{!getLocalStorage('token') ? (
							<>
								<li className="navbar__inner__section__item">
									<Link
										to="/registration"
										className="navbar__inner__section__item__link button--registration"
										data-view="registration"
										onClick={() => presenterMethod('app')}
									>
										Regístrate
									</Link>
								</li>
								<li className="navbar__inner__section__item">
									<Link
										to="/login"
										className="navbar__inner__section__item__link button--login"
										data-view="login"
										onClick={() => presenterMethod('app')}
									>
										<i className="fas fa-user-circle" />
										Iniciar sesión
									</Link>
								</li>
							</>
						) : (
							<>
								<li className="lateral_menu__inner__content__item separation" />

								<li className="lateral_menu__inner__content__item">
									<Link
										to="/profile"
										className="lateral_menu__inner__content__item__link"
									>
										Perfil
									</Link>
								</li>

								<li
									className="lateral_menu__inner__content__item"
									onClick={logoutMethod}
								>
									Cerrar sesión
								</li>
							</>
						)}
					</div>
				</div>
			</nav>
		</ul>
	);
};

NavBarTopMobile.propTypes = {
	presenterMethod: PropTypes.func.isRequired,
	logoutMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		presenterMethod: presenterAction(dispatch),
		logoutMethod: logoutAction(dispatch),
	}),
)(NavBarTopMobile);
