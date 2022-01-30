import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';
import {
  LinkLogin,
  LinkRegister,
  LinksContainer,
  MenuLoginRegisterDropdownContainer,
  MenuLoginRegisterDropdownContent,
  PictureLoginRegisterContainer
} from './NavBarMenuLoginRegisterDropdown.styles';

export const NavBarMenuLoginRegisterDropdown = () => {

  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <ClickAwayListener onClickAway={showOptions ? toggleOptions : () => { }}>
      <MenuLoginRegisterDropdownContainer>
        <MenuLoginRegisterDropdownContent open={showOptions}>
          <LinksContainer>
            <Link to='/registration' data-view='registration' style={{ textDecoration: 'none' }} >
              <LinkRegister>Regístrate</LinkRegister>
            </Link>
            <Link to='/login' data-view='login' style={{ textDecoration: 'none' }} >
              <LinkLogin>
                Iniciar sesión
              </LinkLogin>
            </Link>
          </LinksContainer>
        </MenuLoginRegisterDropdownContent>
        <PictureLoginRegisterContainer
          className='fas fa-user-circle'
          type='button'
          onClick={toggleOptions}
          onKeyPress={toggleOptions}
          open={showOptions}
        />
      </MenuLoginRegisterDropdownContainer>
    </ClickAwayListener>
  )
}
