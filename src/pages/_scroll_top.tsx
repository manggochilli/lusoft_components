import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0,0);
		document.getElementById('root')!.scrollTo(0,0);
		console.log('Up!!')
	}, [pathname]);

	return null;
}