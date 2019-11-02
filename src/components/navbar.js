import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
	<nav className="navbar">
		<div className="navbar__inner">
			<div className="navbar__inner__logo">
				<img src="" alt="" />
			</div>

			<ul className="navbar__inner__section">
				<li className="navbar__inner__section__item">
					<Link to="/productos" className="navbar__inner__section__item__link">
						Productos
					</Link>
				</li>
				<li className="navbar__inner__section__item">
					<Link to="/marcas" className="navbar__inner__section__item__link">
						Marcas
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default NavBar;
