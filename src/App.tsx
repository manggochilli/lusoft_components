import { useState } from 'react'
import { LUbutton } from './components/button';
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="relative pack">
			<div className="w(90vw)">
				<div className="block m(20/0) p(0) font(25) bold text-center">React/Components - Button</div>
				<hr />
				<div className="block m(20/0/10) p(0/0) font-size(21)">
					<span className="bold">Sample Default Setting - use kind set</span>
				</div>
				<div>
					<LUbutton kind={'primary'} size={'xl'} usrclass="m(10)">Button Test - primary</LUbutton>
					<LUbutton kind={'secondary'} size={'xl'} usrclass="m(10)">Button Test - secondary</LUbutton>
					<LUbutton kind={'tertiary'} size={'xl'} usrclass="m(10)">Button Test - tertiary</LUbutton>
					<LUbutton kind={'ghost'} size={'xl'} usrclass="m(10)">Button Test - ghost</LUbutton>
					<LUbutton kind={'danger'} size={'xl'} usrclass="m(10)">Button Test - danger</LUbutton>
					<LUbutton kind={'danger--tertiary'} size={'xl'} usrclass="m(10)">Button Test - danger--tertiary</LUbutton>
					<LUbutton kind={'danger--ghost'} size={'xl'} usrclass="m(10)">Button Test - danger--ghost</LUbutton>
				</div>
				<hr />
				<div className="block m(20/0/10) p(0/0) font-size(21)">
					<span className="bold">Sample Default Setting - use size set</span>
				</div>
				<div>
					<LUbutton kind={'primary'} size={'xs'} usrclass="m(10)">Button Test - xs</LUbutton>
					<LUbutton kind={'primary'} size={'sm'} usrclass="m(10)">Button Test - sm</LUbutton>
					<LUbutton kind={'primary'} size={'lg'} usrclass="m(10)">Button Test - lg</LUbutton>
					<LUbutton kind={'primary'} size={'xl'} usrclass="m(10)">Button Test - xl</LUbutton>
					<LUbutton kind={'primary'} size={'2xl'} usrclass="m(10)">Button Test - 2xl</LUbutton>
				</div>
			</div>
		</div>
	)
}

export default App
