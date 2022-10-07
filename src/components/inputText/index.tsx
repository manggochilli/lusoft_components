import React from 'react';
import { Icon } from '../icon';

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
		<div className="relative hbox">
			<input
				type={type}
				className={[kindclass, usrclass].join(' ')}
				placeholder={placeholder}
				{...props}
				defaultValue={vals && vals}
			/>
			<div className='absolute right(0)'>
				<Icon iconName="eye_fill" size={14} color="#C8C8C8" />
				<Icon iconName="eyeoff_fill" size={14} color="#C8C8C8" />
				<Icon iconName="close_circle" size={14} color="#C8C8C8" />
			</div>
		</div>
	);
};