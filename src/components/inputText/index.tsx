import React, { useState } from 'react';
import { Button } from '../button';

interface InputTextProps {
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
	_onChange?: any;
	_ref?: any;
}

export const InputText = ({
	name,
	maxlength,
	kind,
	usrclass,
	placeholder,
	required,
	vals,
	_onChange,
	_ref,
	...props
}: InputTextProps) => {
	const kindclass = kind === 'underline' ?
		`bt(0) br(0) bb(1) bl(0) bc(--tertiary-border-color) bg(#fff) placeholder:c(--placeholder-font-color) focus:outline(none)`
	: kind === 'underline_alert' ?
		`bt(0) br(0) bb(1) bl(0) bc(--alert-border-color) bg(#fff) placeholder:c(--placeholder-font-color) focus:outline(none)`
	: kind === 'ghost' ?
		`b(0) bg(#fff) c(--placeholder-font-color) focus:outline(none)`
	: // default kind box
		`b(1) bc(--terriary-border-color) bg(#fff) placeholder:c(--placeholder-font-color) focus:outline(none)`
	const [ iconClose , setIconClose ] = useState( vals ? 'show' : 'none' );
	const [ valsText , setValsText ] = useState( vals ? vals : '' );
	function reSetVal( event: React.ChangeEvent<HTMLInputElement> ) {
		setValsText( event.target.value );
		let check_len = event.target.value.length;
		if( check_len > 0 ) {
			setIconClose('show');
		} else {
			setIconClose('none');
		}
	}
	return (
		<div className="relative hbox">
			<input
				type="text"
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
					} else {
						setIconClose('none');
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
				ref={_ref}
			/>
			<Button kind="ghost" addicon="svg|close_circle||#C8C8C8" size="small" usrclass={`absolute right(0) bg(transparent) ${iconClose} focus:outline(none)`} tabIndex={-1} onClick={() => { setValsText(''); setIconClose('none'); }} />
		</div>
	);
};