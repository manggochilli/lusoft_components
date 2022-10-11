import React, { useState } from 'react';
import { Button } from '../button';

interface InputPassProps {
	/**
	 * name
	 */
	name?: string;
	/**
	 * maxlength
	 */
	maxlength?: number,
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
	  * required
	  */
	  required?: boolean,
	/**
	 * 값
	 */
	vals?: string;
	/**
	 * onchange event
	 */
	onChange?: () => void;
}

export const InputPass = ({
	name,
	maxlength,
	kind,
	usrclass,
	placeholder,
	required,
	vals,
	...props
}: InputPassProps) => {
	const kindclass = kind === 'box' ?
		`b(1) `
	: kind === 'underline' ?
		`b(0) bb(1) `
	: kind === 'ghost' ?
		`b(0) `
	:
		``;
	const [ type , setType ] = useState( 'password' );
	const [ iconEyes , setIconEyes ] = useState( 'none' );
	const [ iconEye , setIconEye ] = useState( 'show' );
	const [ iconEyeOff , setIconEyeOff ] = useState( 'none' );
	const [ iconClose , setIconClose ] = useState( vals ? 'show' : 'none' );
	const [ valsText , setValsText ] = useState( vals ? vals : '' );
	const reSetVal = ( event: React.ChangeEvent<HTMLInputElement> ) => {
		setValsText( event.target.value );
		let check_len = event.target.value.length;
		if( check_len > 0 ) {
			setIconClose('show');
			setIconEyes('show');
		} else {
			setIconClose('none');
			setIconEyes('none');
		}
	}
	return (
		<span className="relative hbox">
			<input
				type={type}
				name={name}
				maxLength={maxlength}
				className={[kindclass, usrclass].join(' ')}
				required={required}
				placeholder={placeholder}
				value={valsText}
				readOnly={false}
				{...props}
				onChange={reSetVal}
			/>
			<span className={`hbox ${iconEyes}`}>
				<Button kind="ghost" addicon="svg|eye_fill||#C8C8C8" size="small" usrclass={`absolute right(35) bg(transparent) ${iconEye}`} onClick={() => { setIconEye('none'); setIconEyeOff('show'); setType('text'); }} />
				<Button kind="ghost" addicon="svg|eyeoff_fill||#C8C8C8" size="small" usrclass={`absolute right(35) bg(transparent) ${iconEyeOff}`} onClick={() => { setIconEye('show'); setIconEyeOff('none'); setType('password'); }} />
			</span>
			<Button kind="ghost" addicon="svg|close_circle||#C8C8C8" size="small" usrclass={`absolute right(0) bg(transparent) ${iconClose}`} onClick={() => { setValsText(''); setIconClose('none'); setIconEyes('none'); }} />
		</span>
	);
};