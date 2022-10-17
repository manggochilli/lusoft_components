import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/theme.css";

// Pages
import NotFound from './pages/_404';
import Header from './pages/header';
import Index from './pages/index';
import PageTestHandShake from './pages/test_handshake';
import PageTestComponent from './pages/test_component';

function App() {
	return (
		<div className="relative w(100vw) sm h(100vh) overflow-x(hidden)">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route index element={<Index />} />
					<Route path="/test/handshake" element={<PageTestComponent />} />
					<Route path="/test/component" element={<PageTestComponent />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
