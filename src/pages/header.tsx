import React from "react";
import { Link } from "react-router-dom";

function PageHeader() {
	return (
		<div className="w(100vw) c(#ccc)">
			<Link to="/" className="inline-block h(30) m(10) c(--color-secondary) hover:c(--color-primary) hover:bold">Home</Link>
			<div className="inline-block h(30) m(10) ">|</div>
			<Link to="/test/handshake" className="inline-block h(30) m(10) c(--color-secondary) hover:c(--color-primary) hover:bold">제작테스트 1. HandShake test</Link>
			<div className="inline-block h(30) m(10)">|</div>
			<Link to="/test/component" className="inline-block h(30) m(10) c(--color-secondary) hover:c(--color-primary) hover:bold">제작테스트 2. Components test</Link>
		</div>
	)
}

export default PageHeader;