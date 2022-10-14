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
	kind?: 'box' | 'underline' | 'ghost' | string;
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
	_onChange?: any
}

export const InputPass = ({
	name,
	maxlength,
	kind,
	usrclass,
	placeholder,
	required,
	vals,
	_onChange,
	...props
}: InputPassProps) => {
	const kindclass = kind === 'underline' ?
		`bt(0) br(0) bb(1) bl(0) bc(--tertiary-border-color) bg(#fff) placeholder:c(--placeholder-font-color) focus:outline(none)`
	: kind === 'underline_alert' ?
		`bt(0) br(0) bb(1) bl(0) bc(--alert-border-color) bg(#fff) placeholder:c(--placeholder-font-color) focus:outline(none)`
	: kind === 'ghost' ?
		`b(0) bg(#fff) c(--placeholder-font-color) focus:outline(none)`
	: // default kind box
		`b(1) bc(--terriary-border-color) bg(#fff) placeholder:c(--placeholder-font-color) focus:outline(none)`
	const [ type , setType ] = useState( 'password' );
	const [ iconEyes , setIconEyes ] = useState( 'none' );
	const [ iconEye , setIconEye ] = useState( 'show' );
	const [ iconEyeOff , setIconEyeOff ] = useState( 'none' );
	const [ iconClose , setIconClose ] = useState( vals ? 'show' : 'none' );
	const [ valsText , setValsText ] = useState( vals ? vals : '' );
	const closeArea = () => {
		setValsText('');
		setIconClose('none');
		setIconEyes('none');
		setType('password');
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
				onChange={ ( event: React.ChangeEvent<HTMLInputElement> ) => {
					setValsText( event.target.value );
					let check_len = event.target.value.length;
					if( check_len > 0 ) {
						setIconClose('show');
						setIconEyes('show');
					} else {
						setIconClose('none');
						setIconEyes('none');
					}
					if( _onChange ) {
						_onChange( event );
					}
				} }
				onKeyUp={ ( event: React.KeyboardEvent<HTMLInputElement> ) => {
					if( _onChange ) {
						_onChange( event );
					}
				} }
				onPaste={ ( event: React.ClipboardEvent<HTMLInputElement> ) => {
					if( _onChange ) {
						_onChange( event );
					}
				} }
			/>
			<span className={`hbox ${iconEyes}`}>
				<Button kind="ghost" addicon="svg|eye_fill||#C8C8C8" size="small" usrclass={`absolute right(35) bg(transparent) ${iconEye}`} onClick={() => { setIconEye('none'); setIconEyeOff('show'); setType('text'); }} />
				<Button kind="ghost" addicon="svg|eyeoff_fill||#C8C8C8" size="small" usrclass={`absolute right(35) bg(transparent) ${iconEyeOff}`} onClick={() => { setIconEye('show'); setIconEyeOff('none'); setType('password'); }} />
			</span>
			<Button kind="ghost" addicon="svg|close_circle||#C8C8C8" size="small" usrclass={`absolute right(0) bg(transparent) ${iconClose}`} onClick={closeArea} />
		</span>
	);
};