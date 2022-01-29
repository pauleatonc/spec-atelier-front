import React from 'react'
import { Link } from 'react-router-dom'
import { LinkLogin, LinkRegister, LinksContainer } from './NavbarLogin.styles'

export const NavBarLoginRegister = ({ transparentize }) =>
  <LinksContainer>
    <Link to="/registration" data-view="registration" style={{ textDecoration: 'none' }} >
      <LinkRegister>Regístrate</LinkRegister>
    </Link>
    <Link to="/login" data-view="login" style={{ textDecoration: 'none' }} >
      <LinkLogin transparentize={transparentize}>
        <i className="fas fa-user-circle" />
        &nbsp;&nbsp;Iniciar sesión
      </LinkLogin>
    </Link>
  </LinksContainer>

