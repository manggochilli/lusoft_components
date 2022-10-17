import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/theme.css";

import DefaultLayout from "./layout";

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
				<Route element={<DefaultLayout />} >
					<Route index element={<Index />} />
				</Route>
				<Route path="/test/handshake" element={<DefaultLayout><PageTestHandShake /></DefaultLayout>} />
				<Route path="/test/component" element={<DefaultLayout><PageTestComponent /></DefaultLayout>} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
