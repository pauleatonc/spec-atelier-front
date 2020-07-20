import { useEffect } from 'react';

/**
 * The escape key custom hook.
 */
export const useEscapeKey = (active = false, callback) => {
  const handleEscapeKey = event => {
    if (event.key !== 'Escape' || event.code !== 'Escape') {
      return;
    }
    
    callback(event);
  }; 

  useEffect(() => {
    if (active) {
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);
};
