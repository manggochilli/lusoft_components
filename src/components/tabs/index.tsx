import React from "react";

interface TabsProps {
}

export const Tabs = ({
}: TabsProps) => {
	const menus: string[] = ['tab #1','tab #2','tab #3'];
	const tabsList: JSX.Element[] = menus.map( (menu) => <li>{menu}</li> );
	return (
		<ul>
			{tabsList}
		</ul>
	);
};