import React from "react";
import { Button } from "../button";

type serviceName = 'naver' | 'kakao' | 'google' | 'apple';

type serviceStandard = {
	fill_bg_color: string;
	fill_txt_color: string;
	empty_bg_color: string;
	empty_txt_color: string;
	fill_border: string;
	empty_border: string;
	color_icon: string;
	grey_icon: string;
}

const ServiceSet: Record<serviceName, serviceStandard> = {
	naver: {
		fill_bg_color: 'bg(--sns-naver-color)',
		fill_txt_color: 'c(--sns-naver-subcolor)',
		fill_border: 'bc(--sns-naver-color) hover:bc(--sns-naver-color)',
		empty_bg_color: 'bg(#fff)',
		empty_txt_color: 'c(#000)',
		empty_border: 'b(1) bc(#000) hover:b(1) hover:bc(#000) ',
		color_icon: '',
		grey_icon: '',
	},
	kakao: {
		fill_bg_color: 'bg(--sns-kakao-color)',
		fill_txt_color: 'c(--sns-kakao-subcolor)',
		fill_border: 'bc(--sns-kakao-color) hover:bc(--sns-kakao-color)',
		empty_bg_color: 'bg(#fff)',
		empty_txt_color: 'c(#000)',
		empty_border: 'b(1) bc(#000) hover:b(1) hover:bc(#000) ',
		color_icon: '',
		grey_icon: '',
	},
	google: {
		fill_bg_color: 'bg(--sns-google-color)',
		fill_txt_color: 'c(--sns-google-subcolor)',
		fill_border: 'bc(--sns-google-color) hover:bc(--sns-google-color)',
		empty_bg_color: 'bg(#fff)',
		empty_txt_color: 'c(#000)',
		empty_border: 'b(1) bc(#000) hover:b(1) hover:bc(#000) ',
		color_icon: '',
		grey_icon: '',
	},
	apple: {
		fill_bg_color: 'bg(--sns-apple-color)',
		fill_txt_color: 'c(--sns-apple-subcolor)',
		fill_border: 'bc(--sns-apple-color) hover:bc(--sns-apple-color)',
		empty_bg_color: 'bg(#fff)',
		empty_txt_color: 'c(#000)',
		empty_border: 'b(1) bc(#000) hover:b(1) hover:bc(#000) ',
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
	useFill?: 'fill' | 'empty';
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
		`${ServiceSet[service].fill_bg_color} hover:${ServiceSet[service].fill_bg_color} ` +
		`${ServiceSet[service].fill_txt_color} hover:${ServiceSet[service].fill_txt_color} ` +
		`${ServiceSet[service].fill_border} `
	:
		`${ServiceSet[service].empty_bg_color} hover:${ServiceSet[service].empty_bg_color} ` +
		`${ServiceSet[service].empty_txt_color} hover:${ServiceSet[service].empty_txt_color} ` +
		`${ServiceSet[service].empty_border} `;
	return (
		<Button size={size} usrclass={[service_color, usrclass].join(' ')}>{usrText}</Button>
	);
};