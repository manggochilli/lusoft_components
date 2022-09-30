import "./css/theme.css"
import { useState } from 'react'
import { Button } from './components/button';
import './App.css'

// 클릭이벤트
function clickme() {
	alert('Click!');
}

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="relative pack">
			<div className="w(90vw)">
				<div className="block m(20/0) p(0) font(25) bold text-center">React/Components - Button</div>
				<hr />
				<div className="block m(20/0/10) p(0/0) font-size(21)">
					<span className="bold">Sample Default Setting - use kind set</span>
				</div>
				<div>
					<Button kind={'primary'} size={'xl'} usrclass="m(10)">Button Test - primary</Button>
					<Button kind={'secondary'} size={'xl'} usrclass="m(10)">Button Test - secondary</Button>
					<Button kind={'tertiary'} size={'xl'} usrclass="m(10)">Button Test - tertiary</Button>
					<Button kind={'ghost'} size={'xl'} usrclass="m(10)">Button Test - ghost</Button>
					<div>
						<Button kind={'danger'} size={'xl'} usrclass="m(10)">Button Test - danger</Button>
						<Button kind={'danger--tertiary'} size={'xl'} usrclass="m(10)">Button Test - danger--tertiary</Button>
						<Button kind={'danger--ghost'} size={'xl'} usrclass="m(10)">Button Test - danger--ghost</Button>
					</div>
				</div>
				<hr />
				<div className="block m(20/0/10) p(0/0) font-size(21)">
					<span className="bold">Sample Default Setting - use size set</span>
				</div>
				<div>
					<Button kind={'primary'} size={'xs'} usrclass="m(10)">Button Test - xs</Button>
					<Button kind={'primary'} size={'sm'} usrclass="m(10)">Button Test - sm</Button>
					<Button kind={'primary'} size={'lg'} usrclass="m(10)">Button Test - lg</Button>
					<Button kind={'primary'} size={'xl'} usrclass="m(10)">Button Test - xl</Button>
					<Button kind={'primary'} size={'2xl'} usrclass="m(10)">Button Test - 2xl</Button>
				</div>
				<hr />
				<div className="block m(20/0/10) p(0/0) font-size(21)">
					<span className="bold">Click Event Test</span>
				</div>
				<div>
					<Button kind={'secondary'} size={'lg'} onClick={clickme}>Click me!!!</Button>
				</div>
			</div>
		</div>
	)
}

export default App
