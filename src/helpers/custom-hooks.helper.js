import { useRef, useEffect, useState } from 'react';

export const useDidUpdateEffect = (callback, dependencies) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) callback();
    else didMountRef.current = true;
  }, dependencies);
};

export const useFocus = (ref, defaultState = false) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const onFocus = () => setState(true);
    const onBlur = () => setState(false);
    ref.current.addEventListener('focus', onFocus);
    ref.current.addEventListener('blur', onBlur);

    return () => {
      ref.current.removeEventListener('focus', onFocus);
      ref.current.removeEventListener('blur', onBlur);
    };
  }, []);

  return state;
};
