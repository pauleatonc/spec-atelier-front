/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LOGO from '@Assets/images/logo.png';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import removeClassToAllItems from '@Helpers/remove-class';
import LoginDropdown from '../buttons/login_dropdown';
import { presenterAction } from '@Actions';

const handleAddActiveClassAndCallMethod = (e, presenter, method) => {
	const element = e.target || e.srcElement;
	const links = document.querySelectorAll(
		'.navbar__inner__section__item__link',
	);

	removeClassToAllItems(links, 'current');
	element.classList.add('current');
	method(presenter);
};

const NavBar = props => {
	const { presenterMethod } = props;

	return (
		<nav className="navbar">
			<div className="navbar__inner">
				<div className="navbar__inner__logo-content">
					<Link
						to="/"
						onClick={e =>
							handleAddActiveClassAndCallMethod(e, 'app', presenterMethod)
						}
					>
						<img
							className="navbar__inner__logo-content__image"
							src={LOGO}
							alt="Logotipo de SpecAtelier"
						/>
					</Link>
				</div>

				<ul className="navbar__inner__section">
					<li className="navbar__inner__section__item">
						<Link
							to="/products"
							className="navbar__inner__section__item__link"
							onClick={e =>
								handleAddActiveClassAndCallMethod(e, 'app', presenterMethod)
							}
						>
							Productos
						</Link>
					</li>
					<li className="navbar__inner__section__item">
						<Link
							to="/brands"
							className="navbar__inner__section__item__link"
							onClick={e =>
								handleAddActiveClassAndCallMethod(e, 'app', presenterMethod)
							}
						>
							Marcas
						</Link>
					</li>
					{!!getLocalStorage && (
						<li className="navbar__inner__section__item">
							<Link
								to="/projects"
								className="navbar__inner__section__item__link"
								onClick={e =>
									handleAddActiveClassAndCallMethod(e, 'app', presenterMethod)
								}
							>
								Proyectos
							</Link>
						</li>
					)}
					<li className="navbar__inner__section__item">
						<LoginDropdown
							text="Iniciar sesión"
							customClass="navbar__inner__section__item__link"
						/>
					</li>
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
	dispath => ({
		presenterMethod: presenterAction(dispath),
	}),
)(NavBar);
