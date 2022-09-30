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
	size: 'lg',
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
  size: 'lg',
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
  size: 'lg',
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
  size: 'lg',
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
  size: 'lg',
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
				<Button kind="danger" size='lg'>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="danger--tertiary" size='lg'>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="danger--ghost" size='lg'>BUTTON</Button>
			</div>
		</div>
	)
}

export const sizes = () => {
	return (
		<div className='subbox gap(0/30)'>
			<div className='text-center'>
				<Button kind="primary" size='xs'>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="primary" size='sm'>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="primary" size='lg'>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="primary" size='xl'>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="primary" size='2xl'>BUTTON</Button>
			</div>
		</div>
	)
}

export const Disabled = () => {
	return (
		<div className='subbox gap(0/30)'>
			<div className='text-center'>
				<Button kind="primary" size='lg' disabled>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="secondary" size='lg' disabled>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="tertiary" size='lg' disabled>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="ghost" size='lg' disabled>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="danger" size='lg' disabled>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="danger--tertiary" size='lg' disabled>BUTTON</Button>
			</div>
			<div className='text-center'>
				<Button kind="danger--ghost" size='lg' disabled>BUTTON</Button>
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
			<Button kind="secondary" size="lg" onClick={clickme}>Click me!</Button>
		</div>
	)
}