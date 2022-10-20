import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SNSbutton } from '../components/snsbutton';

export default {
	title: 'LUsoft Components/Components/SNSbutton',
	component: SNSbutton,
	argTypes: {
		service: { control: 'select' },
		useFill: { control: 'radio' },
		size: { control: 'select' },
		iconPosition: { control: 'select' },
		usrText: { control: '' },
		usrclass: { control: '' },
	},
} as ComponentMeta<typeof SNSbutton>;

const Template: ComponentStory<typeof SNSbutton> = (args) => <SNSbutton {...args} />;

export const Default = Template.bind({});
Default.args = {
	service: 'naver',
	useFill: 'empty',
	size: 'medium',
	iconPosition: 'text_left',
	usrText: '네이버ID로 로그인',
	usrclass: 'w(300) b(1) bc(#ccc)',
};

Default.story = {
	name: 'Default'
}