import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/theme.css";

// scrolltop
import ScrollToTop from './pages/_scroll_top';

// Pages
import NotFound from './pages/_404';
import Header from './pages/header';
import Index from './pages/index';
import PageTestHandShake from './pages/test_handshake';
import PageTestComponent from './pages/test_component';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route index element={<Index />} />
				<Route path="/test/handshake" element={<PageTestHandShake />} />
				<Route path="/test/component" element={<PageTestComponent />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Header />
		</BrowserRouter>
	)
}

export default App
