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
	_onChange?: any
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
						_onChange(event.target.value);
					}
				} }
				onPaste={ ( event: React.ClipboardEvent<HTMLInputElement> ) => {
					if( _onChange ) {
						_onChange(event.clipboardData.getData('text'));
					}
				} }
			/>
			<Button kind="ghost" addicon="svg|close_circle||#C8C8C8" size="small" usrclass={`absolute right(0) bg(transparent) ${iconClose}`} onClick={() => { setValsText(''); _onChange(''); setIconClose('none'); }} />
		</div>
	);
};