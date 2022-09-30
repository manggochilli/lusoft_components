import React from 'react';

interface ButtonProps {
	/**
	 * 셋업된 분류
	 */
	kind?: '' | 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'danger--tertiary' | 'danger--ghost';
	/**
	 * 크기 설정
	 */
	size?: '' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
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
	children: string;
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
	size = 'lg',
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
		`bg(#fff) c(#0f62fe) b(1) bc(#0f62fe) ` +
		`pointer transition(.2s) ` +
		`hover:bg(#0f62fe) hover:c(#fff) hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--bg-disabled) disabled:c(--c-disabled) disabled:b(0) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `
	: kind === 'ghost' ?
		`bg(#fff) c(#608df9) b(0) ` +
		`pointer transition(.2s) ` +
		`hover:bg(#eee) hover:c(#55f) hover:brightness(0.95) hover:elevation(4) ` +
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
		`hover:brightness(0.95) hover:elevation(4) ` +
		`active:b(0) active:brightness(0.8) active:elevation(1) ` +
		`disabled:bg(--bg-disabled) disabled:c(--c-disabled) disabled:hover:brightness(1) disabled:hover:elevation(0) disabled:active:brightness(1) disabled:active:elevation(0) `;
	const sizeclass = size === 'xs' ?
		`p(2) r(3) font(10) regular `
	: size === 'sm' ?
		`p(5) r(5) font(12) regular `
	: size === 'lg' ?
		`p(7) r(7) font(15) regular `
	: size === 'xl' ?
		`p(10/15) r(10) font(17) bold `
	: size === '2xl' ?
		`p(15/25) r(15) font(25) bold `
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
