import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../components/icon';

export default {
	title: 'LUsoft Components/Components/Icon',
	component: Icon,
	argTypes: {
		iconName: { control: 'select' },
		size: { control: '' },
		color: { control: '' },
		usrclass: { control: '' },
	},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
	iconName: 'menu',
	size: 30,
	color: '#444',
	usrclass: 'b(1) bc(#ccc)',
};

Default.story = {
	name: 'Default'
}