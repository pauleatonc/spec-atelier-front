import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getLocalStorage } from 'helpers/localstorage.helper';
import { logoutAction } from 'actions/login.action';
import FULL_LOGO from 'assets/images/full_logo.png';

const handleShowLateralMenu = () => {
  const menu = document.querySelector('.lateral_menu');
  menu.classList.toggle('show');
};

const NavBarTopMobile = (props) => {
  const { logoutMethod } = props;

  return (
    <ul className="navbar__inner__section--mobile">
      <button
        type="button"
        className="navbar__inner__section--mobile__button"
        onClick={handleShowLateralMenu}
      >
        <i className="fas fa-bars navbar__inner__section--mobile__button__icon" />
      </button>
      <nav className="lateral_menu">
        <div className="lateral_menu__inner">
          <img src={FULL_LOGO} alt="logo specAtelier" />
          <div className="lateral_menu__inner__content">
            {!!getLocalStorage('token') && (
              <li className="lateral_menu__inner__content__item">
                <Link
                  to="/projects"
                  className="lateral_menu__inner__content__item__link"
                  data-view="projects"
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
              >
                Productos
              </Link>
            </li>
            <li className="lateral_menu__inner__content__item">
              <Link
                to="/clients"
                className="lateral_menu__inner__content__item__link"
                data-view="clients"
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
                  >
                    Regístrate
                  </Link>
                </li>
                <li className="navbar__inner__section__item">
                  <Link
                    to="/login"
                    className="navbar__inner__section__item__link button--login"
                    data-view="login"
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
  logoutMethod: PropTypes.func.isRequired,
};

export default connect(
  (state) => state,
  (dispatch) => ({
    logoutMethod: logoutAction(dispatch),
  }),
)(NavBarTopMobile);
