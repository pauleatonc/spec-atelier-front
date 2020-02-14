/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import { presenterAction } from '@Actions';

const handleShowLateralMenu = () => {
	const menu = document.querySelector('.lateral_menu');
	menu.classList.toggle('show');
};

const NavBarTopMobile = props => {
	const { presenterMethod } = props;

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
	);
};

NavBarTopMobile.propTypes = {
	presenterMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		presenterMethod: presenterAction(dispatch),
	}),
)(NavBarTopMobile);
