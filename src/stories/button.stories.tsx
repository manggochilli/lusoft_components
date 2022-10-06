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

export const DangerButton = () => {
	return (
		<div className='subbox gap(0/30)'>
			<div className='text-center'>
				<Button kind="danger" size='large'>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="danger--tertiary" size='large'>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="danger--ghost" size='large'>BUTTON</Button>
			</div>
		</div>
	)
}

export const sizes = () => {
	return (
		<div className='hbox(bottom) gap(0/30)'>
			<div className='text-center'>
				<Button kind="primary" size='small'>SMALL</Button>
			</div>
			<div className='text-center'>
				<Button kind="primary" size='medium'>MEDIUM</Button>
			</div>
			<div className='text-center'>
				<Button kind="primary" size='large'>LARGE</Button>
			</div>
			<div className='text-center'>
				<Button kind="primary" size='expressive'>EXPRESSIVE</Button>
			</div>
			<div className='text-center'>
				<Button kind="primary" size='extralarge'>EXTRALARGE</Button>
			</div>
		</div>
	)
}

export const Disabled = () => {
	return (
		<div className='subbox gap(0/30)'>
			<div className='text-center'>
				<Button kind="primary" size='large' disabled>Primary</Button>
			</div>
			<div className='text-center'>
				<Button kind="secondary" size='large' disabled>Secondary</Button>
			</div>
			<div className='text-center'>
				<Button kind="tertiary" size='large' disabled>Tertiary</Button>
			</div>
			<div className='text-center'>
				<Button kind="ghost" size='large' disabled>Ghost</Button>
			</div>
			<div className='text-center'>
				<Button kind="danger" size='large' disabled>Danger</Button>
			</div>
			<div className='text-center'>
				<Button kind="danger--tertiary" size='large' disabled>Danger--tertiary</Button>
			</div>
			<div className='text-center'>
				<Button kind="danger--ghost" size='large' disabled>Danger--ghost</Button>
			</div>
		</div>
	)
}

function clickme() {
	alert('Click! Happy!!!!');
}

export const Click = () => {
	return (
		<div className='subbox gap(0/30)'>
			<Button kind="secondary" size="large" onClick={clickme}>Click me!</Button>
		</div>
	)
}