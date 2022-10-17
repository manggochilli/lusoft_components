
import { Link } from "react-router-dom";

export default function DefaultHeader() {
	return (
		<header className="hpack grid gap(10px) w(100vw) c(#ccc)">
			<Link to="/" className="inline-block h(30) c(--color-secondary) hover:c(--color-primary) hover:bold">Home</Link>
			<div className="inline-block h(30) ">|</div>
			<Link to="/test/handshake" className="inline-block h(30) c(--color-secondary) hover:c(--color-primary) hover:bold">HandShake</Link>
			<div className="inline-block h(30)">|</div>
			<Link to="/test/component" className="inline-block h(30) c(--color-secondary) hover:c(--color-primary) hover:bold">Components</Link>
			<div className="inline-block h(30)">|</div>
			<Link to="/test/swiper" className="inline-block h(30) c(--color-secondary) hover:c(--color-primary) hover:bold">Swiper</Link>
		</header>
	)
}