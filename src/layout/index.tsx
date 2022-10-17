import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router'
type MyComponentProps = {
	children: React.ReactChild;
}

export default function DefaultLayout( {children}:MyComponentProps ) {
	return (
		<div className="absolute top(0) left(0) w(375px~100vw~100vw) overflow-x(hidden)">
			<Header />
			<main>
				{ children || <Outlet /> }
			</main>
			<Footer />
		</div>
	)
}