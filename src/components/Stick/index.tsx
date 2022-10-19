import React from 'react';

interface StickProps {
	/**
	 * 높이
	 */
	height?: number,
	/**
	 * 두께
	 */
	weight?: number,
	/**
	 * 색상
	 */
	color?: string,
	/**
	 * 사용자 추가 클래스
	 */
	usrclass?: string;
}

/**
 *  버튼 엘리먼트 정의
 */
export const Stick = ({
	height,
	weight,
	color,
	usrclass,
	...props
}: StickProps) => {
	const height_class = height && `h(${height}px)`;
	const weight_class = weight && `w(${weight}px)`;
	const color_class = color && `bg(${color})`;
	return (
		<div
			className={[height_class, weight_class, color_class, usrclass].join(' ')}
			{...props}
		/>
	);
};
