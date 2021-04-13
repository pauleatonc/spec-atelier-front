import { useRef, useEffect } from 'react';

export const useDidUpdateEffect = (callback, dependencies) => {
	const didMountRef = useRef(false);
	useEffect(() => {
		if (didMountRef.current) callback();
		else didMountRef.current = true;
	}, dependencies);
};
