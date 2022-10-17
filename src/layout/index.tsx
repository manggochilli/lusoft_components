import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router'
import { LayoutDefaultProps } from '@types'

export default function Defaultlaout( {children}:LayoutDefaultProps ) {
	return (
		<div className="relative w(375px~100vw~100vw) overflow-x(hidden)">
			<Header />
			<main>
				{ children || <Outlet /> }
			</main>
			<Footer />
		</div>
	)
}