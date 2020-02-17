/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import { presenterAction } from '@Actions';
import Dropdown from '../dropdown';

const NavbarTop = props => {
	const { presenterMethod } = props;

	return (
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
				<Dropdown />
			)}
		</ul>
	);
};

NavbarTop.propTypes = {
	presenterMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		presenterMethod: presenterAction(dispatch),
	}),
)(NavbarTop);
