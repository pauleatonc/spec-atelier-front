/**
 * The Modal custom's hook.
 */
const useModal = ({
  closeCallback = () => undefined,
  enteringCallback = () => undefined,
  exitedCallback = () => undefined,
  exitingCallback = () => undefined,
} = {}) => {
  const handleClose = event => closeCallback(event);
  const handleEntering = () => enteringCallback();
  const handleExited = () =>   exitedCallback();
  const handleExiting = () => exitingCallback();

  return {
    onClose: handleClose,
    onEntering: handleEntering,
    onExited: handleExited,
    onExiting: handleExiting,
  };
};

export default useModal;
