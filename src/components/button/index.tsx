import React from 'react';

interface ButtonProps {
	/**
	 * 셋업된 분류
	 */
	kind?: '' | 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'danger--tertiary' | 'danger--ghost';
	/**
	 * 크기 설정
	 */
	size?: '' | 'small' | 'medium' | 'large' | 'expressive' | 'extralarge';
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
}

/**
 *  버튼 엘리먼트 정의
 */
export const Button = ({
	kind,
	size = 'large',
	usrclass,
	children,
	...props
}: ButtonProps) => {
	const kindclass = kind === 'primary' ?
		`bg(--color-primary) c(#fff) b(0) ` +
		`pointer transition(.2s) ` +
		`hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--bg-disabled) disabled:c(--c-disabled) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'secondary' ?
		`bg(--color-secondary) c(#fff) b(0) ` +
		`pointer transition(.2s) ` +
		`hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--bg-disabled) disabled:c(--c-disabled) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'tertiary' ?
		`bg(#fff) c(--color-secondary) b(1) bc(--color-secondary) ` +
		`pointer transition(.2s) ` +
		`hover:bg(--color-secondary) hover:c(#fff) hover:b(0) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--bg-disabled) disabled:c(--c-disabled) disabled:b(0) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'ghost' ?
		`bg(#fff) c(--color-secondary) b(0) ` +
		`pointer transition(.2s) ` +
		//`hover:bg(#dfdfdf) hover:c(--color-primary) hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--bg-disabled) disabled:c(--c-disabled) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'danger' ?
		`bg(--color-danger) c(#fff) b(0) ` +
		`pointer transition(.2s) ` +
		`hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--bg-disabled) disabled:c(--c-disabled) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'danger--tertiary' ?
		`bg(#fff) c(--color-danger) b(1) bc(--color-danger) ` +
		`pointer transition(.2s) ` +
		`hover:bg(--color-danger) hover:c(#fff) hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--bg-disabled) disabled:c(--c-disabled) disabled:b(0) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'danger--ghost' ?
		`bg(#fff) c(--color-danger) b(0) ` +
		`pointer transition(.2s) ` +
		`hover:bg(--color-danger) hover:c(#fff) hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--bg-disabled) disabled:c(--c-disabled) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	:
		`bg(#fff) c(#000) b(1) bc(white) ` +
		`pointer transition(.2s) ` +
		`hover:b(1) hover:bc(white) ` +
		`hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--bg-disabled) disabled:c(--c-disabled) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `;
	const sizeclass = size === 'small' ?
		`h(34) p(2) r(8) font(14) 400 `
	: size === 'medium' ?
		`h(40) p(2) r(8) font(14) 400 `
	: size === 'large' ?
		`h(50) p(2) r(8) font(14) 400 `
	: size === 'expressive' ?
		`h(46) p(2) r(8) font(14) 400 `
	: size === 'extralarge' ?
		`h(66) p(2) r(8) font(14) 400 `
	:
		`p(7) r(7) font(15) regular `;
	return (
		<button
			type="button"
			className={[kindclass, sizeclass, usrclass].join(' ')}
			{...props}
		>
		{children}
		</button>
	);
};
