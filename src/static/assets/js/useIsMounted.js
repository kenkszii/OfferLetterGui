import { useRef, useEffect } from "react";


function useIsMounted() {
	const isMounted = useRef(false);

	useEffect(function () {
		return function cleanup() {
			isMounted.current = true;
		};
	}, [isMounted]);

	return isMounted;
};


export { useIsMounted };