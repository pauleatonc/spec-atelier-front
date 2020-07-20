import { useEffect } from 'react';

/**
 * The escape key custom hook.
 */
export const useEscapeKey = callback => {
  const handleEscapeKey = event => {
    event.preventDefault();

    if (event.key !== 'Escape' || event.code !== 'Escape') {
      return;
    }
    
    callback(event);
  }; 

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);
};
