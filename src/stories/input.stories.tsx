import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText } from '../components/InputText';

export default {
	title: 'LUsoft Components/Components/input',
	component: InputText,
	argTypes: {
		type: { control: 'select' },
		kind: { control: 'select' },
		usrclass: { control: '' },
		placeholder: { control: '' },
	},
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'text',
	kind: 'box',
	usrclass: '',
	placeholder: '내용을 입력하세요',
};

Default.story = {
	name: 'Default'
}

// box
export const Box = Template.bind({});
Box.args = {
	type: 'text',
	kind: 'box',
	usrclass: '',
	placeholder: '내용을 입력하세요',
};

Box.story = {
  name:'',
}

// underline
export const Underline = Template.bind({});
Underline.args = {
	type: 'text',
	kind: 'underline',
	usrclass: '',
	placeholder: '내용을 입력하세요',
};

Underline.story = {
  name:'',
}

// ghost
export const Ghost = Template.bind({});
Ghost.args = {
	type: 'text',
	kind: 'ghost',
	usrclass: '',
	placeholder: '내용을 입력하세요',
};

Ghost.story = {
  name:'',
}