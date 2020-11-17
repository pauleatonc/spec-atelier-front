import { useState } from 'react';

/**
 * The Dropdown custom's hook.
 */
const useDropdown = ({
  closeOnClick = true,
  clickCallback = () => undefined,
  closeCallback = () => undefined,
  openCallback = () => undefined,
} = {}) => {
  const [anchor, setAnchor] = useState(undefined);
  const [width, setWidth] = useState('initial');
  const handleOpen = (event) => {
    setAnchor(event.currentTarget);
    setWidth(`${event.currentTarget.clientWidth - 18}px`);
    openCallback(event);
  };
  const handleClose = () => {
    setAnchor(undefined);
    closeCallback();
  };
  const handleClick = (...args) => () => {
    if (closeOnClick) {
      handleClose();
    }

    clickCallback(...args);
  };

  return { anchor, width, onClick: handleClick, onClose: handleClose, onOpen: handleOpen };
};

export default useDropdown;
