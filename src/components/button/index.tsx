import React from 'react';
import { Icon } from '../icon';

interface ButtonProps {
	type?: any,
	/**
	 * 셋업된 분류
	 */
	kind?: '' | 'primary' | 'secondary' | 'tertiary' | 'tertiary-fixed' | 'ghost' | 'danger' | 'danger--tertiary' | 'danger--ghost';
	/**
	 * 크기 설정
	 */
	size?: '' | 'small' | 'medium' | 'large' | 'expressive' | 'extralarge';
	/**
	 * 아이콘
	 */
	addicon?: any;
	/**
	 * 사용자 추가 클래스
	 */
	usrclass?: string;
	/**
	 * disabled
	 */
	disabled?: boolean;
	/**
	 * 버튼에 표시할 내용
	 */
	children?: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
	tabIndex?: number;
}

/**
 *  버튼 엘리먼트 정의
 */
export const Button = ({
	type,
	kind,
	size = 'large',
	addicon = 'none',
	usrclass,
	children,
	tabIndex,
	...props
}: ButtonProps) => {
	const btn_type = type ? type : 'button';
	const kindclass = kind === 'primary' ?
		`bg(--primary-bg-color) c(--primary-fill-font-color) b(0) ` +
		`pointer transition(.2s) ` +
		`hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--disabled-bg-color) disabled:c(--disabled-font-color) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'secondary' ?
		`bg(--secondary-bg-color) c(--secondary-fill-font-color) b(0) ` +
		`pointer transition(.2s) ` +
		`hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--disabled-bg-color) disabled:c(--disabled-font-color) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'tertiary' ?
		`bg(--white-color) c(--tertiary-font-color) b(1) bc(--tertiary-border-color) ` +
		`pointer transition(.2s) ` +
		`hover:bg(--tertiary-fill-bg-color) hover:c(--tertiary-fill-font-color) hover:b(0) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--disabled-bg-color) disabled:c(--disabled-font-color) disabled:b(0) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'tertiary-fixed' ?
		`bg(--white-color) c(--tertiary-font-color) b(1) bc(--tertiary-border-color) ` +
		`pointer transition(.2s) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--disabled-bg-color) disabled:c(--disabled-font-color) disabled:b(0) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'ghost' ?
		`bg(--white-color) c(--ghost-font-color) b(0) ` +
		`pointer transition(.2s) ` +
		`hover:bg(--ghost-fill-bg-color) hover:c(--ghost-fill-font-color) hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--disabled-bg-color) disabled:c(--disabled-font-color) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'danger' ?
		`bg(--danger-bg-color) c(--danger-fill-font-color) b(0) ` +
		`pointer transition(.2s) ` +
		`hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--disabled-bg-color) disabled:c(--disabled-font-color) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'danger--tertiary' ?
		`bg(--white-color) c(--danger-font-color) b(1) bc(--danger-border-color) ` +
		`pointer transition(.2s) ` +
		`hover:bg(--danger-bg-color) hover:c(--danger-fill-font-color) hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--disabled-bg-color) disabled:c(--disabled-font-color) disabled:b(0) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'danger--ghost' ?
		`bg(--white-color) c(--danger-font-color) b(0) ` +
		`pointer transition(.2s) ` +
		`hover:bg(--danger-fill-bg-color) hover:c(--danger-fill-font-color) hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--disabled-bg-color) disabled:c(--disabled-font-color) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	:
		`bg(transparent) c(--default-font-color) b(1) bc(--default-border-color) ` +
		`pointer transition(.2s) ` +
		`hover:b(0) ` +
		`hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--disabled-bg-color) disabled:c(--disabled-font-color) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `;
	const sizeclass = size === 'small' ?
		`h(32) p(2) r(8) font(14) 400 line-height(18) `
	: size === 'medium' ?
		`h(40) p(2) r(8) font(14) 400 line-height(18) `
	: size === 'large' ?
		`h(48) p(2) r(8) font(14) 400 line-height(18) `
	: size === 'expressive' ?
		`h(48) p(2) r(8) font(16) 400 line-height(18) `
	: size === 'extralarge' ?
		`h(64) p(2) r(8) font(14) 400 line-height(18) `
	:
		`p(2) r(2) font(14) 400 `;
	const imgsize = size === 'small' ?
		`w(24) h(24) `
	: size === 'medium' ?
		`w(26) h(26) `
	: size === 'large' ?
		`w(28) h(28) `
	: size === 'expressive' ?
		`w(26) h(26) `
	: size === 'extralarge' ?
		`w(30) h(30) `
	:
		`w(30) h(30) `
	const iconsize = size === 'small' ?
		24
	: size === 'medium' ?
		26
	: size === 'large' ?
		28
	: size === 'expressive' ?
		26
	: size === 'extralarge' ?
		30
	:
		30
	let iconPosition = addicon.split('|');
	let iconAddclass = '';
	let btnaAdclass = '';
	switch( iconPosition[2] ) {
		case 'left':
			iconAddclass = "absolute left(5)";
			btnaAdclass = `hpack w(100%) pl(0) text-center`;
			break;
		case 'text_left':
			iconAddclass = "";
			btnaAdclass = `hpack gap(5) w(100%) pl(0) text-center`;
			break;
		case 'center':
			iconAddclass = "";
			btnaAdclass = `hpack gap(5) w(100%) pl(0) text-center`;
			children = '';
			break;
		case 'right':
			iconAddclass = "absolute right(5)";
			btnaAdclass = `hpack w(100%) pl(0) text-center`;
			break;
	}
	const iconItem = iconPosition[0] === 'image' ?
		<img src={iconPosition[1]} className={[imgsize, iconAddclass].join(' ')} />
	: iconPosition[0] === 'svg' ?
		<Icon iconName={iconPosition[1]} size={iconsize} color={iconPosition[3]} usrclass={iconPosition[4]} />
	: '';
	return (
		<button
			type={btn_type}
			className={[kindclass, btnaAdclass, sizeclass, usrclass].join(' ')}
			tabIndex={tabIndex}
			{...props}
		>
			{iconItem}
			{children}
		</button>
	);
};
