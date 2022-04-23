import React from 'react';
import { Link } from 'react-router-dom';
import { getLocalStorage } from 'helpers/localstorage.helper';
import Dropdown from 'components/dropdown/index';

const NavbarTop = () => {
  return (
    <ul className="navbar__inner__section">
      <li className="navbar__inner__section__item">
        <Link
          to="/products"
          className="navbar__inner__section__item__link"
          data-view="products"
        >
          Productos
        </Link>
      </li>
      <li className="navbar__inner__section__item">
        <Link
          to="/clients"
          className="navbar__inner__section__item__link"
          data-view="clients"
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
        <Dropdown />
      )}
    </ul>
  );
};

export default NavbarTop;
