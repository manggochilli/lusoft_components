import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText } from '../components/inputText';

export default {
	title: 'LUsoft Components/Components/InputText',
	component: InputText,
	argTypes: {
		name: { control: '' },
		maxlength: { control: 'number' },
		kind: { control: 'select' },
		usrclass: { control: '' },
		placeholder: { control: '' },
		required: { control: 'boolean' },
		vals: { control: '' }
	},
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
	kind: 'box',
	usrclass: 'w(100%) h(40) ',
	placeholder: '내용을 입력하세요',
};

Default.story = {
	name: 'Default'
}

// box
export const Box = Template.bind({});
Box.args = {
	kind: 'box',
	usrclass: 'w(100%) h(40) ',
	placeholder: '내용을 입력하세요',
};

Box.story = {
  name:'',
}

// underline
export const Underline = Template.bind({});
Underline.args = {
	kind: 'underline',
	usrclass: 'w(100%) h(40) ',
	placeholder: '내용을 입력하세요',
};

Underline.story = {
  name:'',
}

// ghost
export const Ghost = Template.bind({});
Ghost.args = {
	kind: 'ghost',
	usrclass: 'w(100%) h(40) ',
	placeholder: '내용을 입력하세요',
};

Ghost.story = {
  name:'',
}