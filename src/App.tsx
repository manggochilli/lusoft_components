import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/theme.css";

// Pages
import PageTestComponent from './pages/test_component';

function App() {
	return (
		<div className="relative w(100vw) sm h(100vh) overflow-x(hidden)">
			<BrowserRouter>
				<Routes>
					<Route index element={<PageTestComponent />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
