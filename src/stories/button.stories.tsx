import '../css/theme.css'
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/button';

export default {
	title: 'LUsoft Components/Components/button', // 여기에 적어준 경로대로 스토리북 네비게이션에 표시됩니다.
	component: Button,
	argTypes: {
		kind: { control: 'select' },
		size: { control: 'select' },
		usrclass: { control: '' },
		children: { control: '' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	kind: '',
	size: 'large',
	usrclass: '',
	children: 'BUTTON',
};

Default.story = {
	name: 'Default'
}

// Primary
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  kind: 'primary',
  size: 'large',
  usrclass: '',
  children: 'Primary',
};

PrimaryButton.story = {
  name:'',
}

// Secondary
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  kind: 'secondary',
  size: 'large',
  usrclass: '',
  children: 'Secondary',
};

SecondaryButton.story = {
  name:'',
}

// Tertiary
export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
  kind: 'tertiary',
  size: 'large',
  usrclass: '',
  children: 'Tertiary',
};

TertiaryButton.story = {
  name:'',
}

// Ghost
export const GhostButton = Template.bind({});
GhostButton.args = {
  kind: 'ghost',
  size: 'large',
  usrclass: '',
  children: 'Ghost',
};

GhostButton.story = {
  name:'',
}

// Danger
export const DangerButton = Template.bind({});
DangerButton.args = {
  kind: 'danger',
  size: 'large',
  usrclass: '',
  children: 'Danger',
};

DangerButton.story = {
  name:'',
}