import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/theme.css";

// Pages
import PageHeader from './pages/header';
import PageFooter from './pages/footer';
import PageIndex from './pages/index';

import PageButtons from './pages/component_Button';
import PageInputText from './pages/component_InputText';

import PageTestHandshake from './pages/test_handshake';
import PageTestComponent from './pages/test_component';

function App() {
	return (
		<div className="relative w(100vw) sm h(100vh)">
			<BrowserRouter>
				<PageHeader />
				<Routes>
					<Route index element={<PageTestComponent />} />
					<Route path="/test/handshake" element={<PageTestHandshake />} />
					<Route path="/test/component" element={<PageTestComponent />} />
					<Route path="/component/Button" element={<PageButtons />} />
					<Route path="/component/InputText" element={<PageInputText />} />
				</Routes>
				<PageFooter />
			</BrowserRouter>
		</div>
	)
}

export default App
