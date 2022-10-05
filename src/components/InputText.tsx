import React from 'react';

interface InputTextProps {
	/**
	 * 타입
	 */
	type?: 'text' | 'password';
	/**
	 * 구분
	 */
	kind?: 'box' | 'underline' | 'ghost';
	/**
	 * 사용자 추가 클래스
	 */
	usrclass?: string;
	/**
	 * placeholder
	 */
	 placeholder?: string;
	/**
	 * 값
	 */
	vals?: string;
	/**
	 * onchange event
	 */
	onChange?: () => void;
}

export const InputText = ({
	type,
	kind,
	usrclass,
	placeholder,
	vals,
	...props
}: InputTextProps) => {
	const kindclass = kind === 'box' ?
		`b(1) `
	: kind === 'underline' ?
		`b(0) bb(1) `
	: kind === 'ghost' ?
		`b(0) `
	:
		``;
	return (
		<input
			type={type}
			className={[kindclass, usrclass].join(' ')}
			placeholder={placeholder}
			{...props}
			value={vals}
		/>
	);
};