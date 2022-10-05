import React from "react";
import { useState } from 'react'
import { Button } from '../components/button';

// 클릭이벤트
function clickme() {
	alert('Click!');
}

function PageButtons() {
	const [count, setCount] = useState(0);

	return (
		<div className="relative">
			<div className="w(90vw)">
				<div className="block m(20/0) p(0) font(25) bold text-center">React/Components - Button</div>
				<hr />
				<div className="block m(20/0/10) p(0/0) font-size(21)">
					<span className="bold">Sample Default Setting - use kind set</span>
				</div>
				<div>
					<Button kind={'primary'} size={'expressive'} usrclass="m(10)">Button Test - primary</Button>
					<Button kind={'secondary'} size={'expressive'} usrclass="m(10)">Button Test - secondary</Button>
					<Button kind={'tertiary'} size={'expressive'} usrclass="m(10)">Button Test - tertiary</Button>
					<Button kind={'ghost'} size={'expressive'} usrclass="m(10)">Button Test - ghost</Button>
					<div>
						<Button kind={'danger'} size={'expressive'} usrclass="m(10)">Button Test - danger</Button>
						<Button kind={'danger--tertiary'} size={'expressive'} usrclass="m(10)">Button Test - danger--tertiary</Button>
						<Button kind={'danger--ghost'} size={'expressive'} usrclass="m(10)">Button Test - danger--ghost</Button>
					</div>
				</div>
				<hr />
				<div className="block m(20/0/10) p(0/0) font-size(21)">
					<span className="bold">Sample Default Setting - use size set</span>
				</div>
				<div>
					<Button kind={'primary'} size={'small'} usrclass="m(10)">Button Test - xs</Button>
					<Button kind={'primary'} size={'medium'} usrclass="m(10)">Button Test - sm</Button>
					<Button kind={'primary'} size={'large'} usrclass="m(10)">Button Test - lg</Button>
					<Button kind={'primary'} size={'expressive'} usrclass="m(10)">Button Test - xl</Button>
					<Button kind={'primary'} size={'extralarge'} usrclass="m(10)">Button Test - 2xl</Button>
				</div>
				<hr />
				<div className="block m(20/0/10) p(0/0) font-size(21)">
					<span className="bold">Click Event Test</span>
				</div>
				<div>
					<Button kind={'secondary'} size={'large'} onClick={clickme}>Click me!!!</Button>
				</div>
			</div>
		</div>
	)
}

export default PageButtons;
