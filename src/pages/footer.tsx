import React from "react";
import { Link } from "react-router-dom";

function PageFooter() {
	return (
		<div className="w(100%) mt(20) bg(#f5f5f5)">
			<div className="hbox">
				<div className="w(30%) font(30) 600 text-center">LUsoft</div>
				<div className="w(70%) p(10) text-left">
					<div className="font(20) 600">Component</div>
					<div className="m(10) font(14) 400">
						<Link to="/component/Button" className="block h(30) c(--color-secondary) hover:c(--color-primary) hover:bold">Button</Link>
						<Link to="/component/InputText" className="block h(30) c(--color-secondary) hover:c(--color-primary) hover:bold">Input - Text</Link>
					</div>
				</div>
			</div>
			<div className="font(10) 300 c(#555) text-center">
				LUSOFT
			</div>
		</div>
	)
}

export default PageFooter;