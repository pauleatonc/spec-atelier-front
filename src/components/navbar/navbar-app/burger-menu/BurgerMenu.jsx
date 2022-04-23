import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { BurgerMenuButton, BurgerMenuContainer } from './BurgerMenu.styles';
import { NavBarBurgerMenu } from './NavBarBurgerMenu';

export const BurgerMenu = ({ items }) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <ClickAwayListener onClickAway={showOptions ? toggleOptions : () => {}}>
      <BurgerMenuContainer show={showOptions}>
        <NavBarBurgerMenu open={showOptions} items={items} />
        <BurgerMenuButton
          className="fas fa-bars"
          type="button"
          onClick={toggleOptions}
          onKeyPress={toggleOptions}
          open={showOptions}
        />
      </BurgerMenuContainer>
    </ClickAwayListener>
  );
};
