import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/theme.css";

import DefaultLayout from "./layout";

// scrolltop
import ScrollToTop from './pages/_scroll_top';

// Pages
import NotFound from './pages/_404';
import Index from './pages/index';

// Test Pages
import PageTestHandShake from './pages/test_handshake';
import PageTestComponent from './pages/test_component';
import PageTestSwiperJS from './pages/test_swiper';

// Pages
import MemberLogin from './pages/members/login';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route index element={<DefaultLayout><Index /></DefaultLayout>} />
				<Route path="/test/handshake" element={<DefaultLayout><PageTestHandShake /></DefaultLayout>} />
				<Route path="/test/component" element={<DefaultLayout><PageTestComponent /></DefaultLayout>} />
				<Route path="/test/swiper" element={<DefaultLayout><PageTestSwiperJS /></DefaultLayout>} />

				<Route path="/member/login" element={<DefaultLayout><MemberLogin /></DefaultLayout>} />

				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
