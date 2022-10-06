import React from "react";
import { Button } from "../button";

type serviceName = 'naver' | 'kakao' | 'google' | 'apple';

type serviceStandard = {
	fill_bg_color: string;
	fill_txt_color: string;
	empty_bg_color: string;
	empty_txt_color: string;
	color_icon: string;
	grey_icon: string;
}

const ServiceSet: Record<serviceName, serviceStandard> = {
	naver: {
		fill_bg_color: '#2cb400',
		fill_txt_color: '#e00000',
		empty_bg_color: '#fff',
		empty_txt_color: '#fff',
		color_icon: '',
		grey_icon: '',
	},
	kakao: {
		fill_bg_color: '#FEE500',
		fill_txt_color: '#03166C',
		empty_bg_color: '#fff',
		empty_txt_color: '#000',
		color_icon: '',
		grey_icon: '',
	},
	google: {
		fill_bg_color: '#fff',
		fill_txt_color: '#000',
		empty_bg_color: '#fff',
		empty_txt_color: '#000',
		color_icon: '',
		grey_icon: '',
	},
	apple: {
		fill_bg_color: '#000',
		fill_txt_color: '#000',
		empty_bg_color: '#fff',
		empty_txt_color: '#000',
		color_icon: '',
		grey_icon: '',
	}
}

export { ServiceSet };

interface SNSbuttonProps {
	/**
	 * 서비스명
	 */
	service: serviceName;
	/**
	 * 배경선택
	 */
	useFill: 'fill' | 'empty';
	/**
	 * 크기
	 */
	size: 'small' | 'medium' | 'large' | 'expressive' | 'extralarge';
	/**
	 * 아이콘사용여부
	 */
	useIcon: boolean;
	/**
	 * 아이콘위치
	 */
	iconPosition: 'none' | 'left' | 'text_left' | 'center' | 'text_right' | 'right';
	/**
	 * 함게 표기할 문구
	 */
	usrText?: string;
	/**
	 * 사용자클래스
	 */
	usrclass?: string;
	/**
	 * 클릭처리
	 */
	onClick?: () => void;
}

export const SNSbutton = ({
	service,
	useFill,
	size,
	useIcon,
	iconPosition,
	usrText,
	usrclass,
	onClick,
	...props
}: SNSbuttonProps) => {
	const service_color = useFill === 'fill' ?
		`bg(${ServiceSet[service].fill_bg_color}) hover:bg(${ServiceSet[service].fill_bg_color}) ` +
		`c(${ServiceSet[service].fill_txt_color}) hover:c(${ServiceSet[service].fill_txt_color}) `
	:
		`bg(` + ServiceSet[service].empty_bg_color + `) c(` + ServiceSet[service].empty_txt_color + `) hover:bg(` + ServiceSet[service].fill_bg_color + `) hover:c(` + ServiceSet[service].fill_txt_color + `) `;
	return (
		<Button size={size} usrclass={[service_color, usrclass].join(' ')}>{[service_color].join(' ')}</Button>
	);
};