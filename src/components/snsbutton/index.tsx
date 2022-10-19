import React from "react";
import { Button } from "../button";

type serviceName = 'naver' | 'kakao' | 'google' | 'apple';

type serviceStandard = {
	fill_class: string;
	empty_class: string;
	color_icon: string;
	grey_icon: string;
}

const ServiceSet: Record<serviceName, serviceStandard> = {
	naver: {
		fill_class: 'bg(--sns-naver-fill-bg-color) c(--sns-naver-fill-font-color) b(.5) bc(--sns-naver-fill-bg-color) hover:b(.5) hover:bc(--sns-naver-fill-bg-color) ',
		empty_class: 'bg(--sns-naver-bg-color) c(--sns-naver-font-color) b(.5) bc(--default-border-color) hover:b(.5) hover:bc(--default-border-color) ',
		color_icon: '/image/icons/naver.png',
		grey_icon: '',
	},
	kakao: {
		fill_class: 'bg(--sns-kakao-fill-bg-color) c(--sns-kakao-fill-font-color) b(.5) bc(--sns-kakao-fill-bg-color) hover:b(.5) hover:bc(--sns-kakao-fill-bg-color) ',
		empty_class: 'bg(--sns-kakao-bg-color) c(--sns-kakao-font-color) b(.5) bc(--default-border-color) hover:b(.5) hover:bc(--default-border-color) ',
		color_icon: '/image/icons/kakao.png',
		grey_icon: '',
	},
	google: {
		fill_class: 'bg(--sns-google-fill-bg-color) c(--sns-google-fill-font-color) b(.5) bc(--sns-google-fill-bg-color) hover:b(.5) hover:bc(--sns-google-fill-bg-color)',
		empty_class: 'bg(--sns-google-bg-color) c(--sns-google-font-color) b(.5) bc(--default-border-color) hover:b(.5) hover:bc(--default-border-color) ',
		color_icon: '/image/icons/google.png',
		grey_icon: '',
	},
	apple: {
		fill_class: 'bg(--sns-apple-fill-bg-color) c(--sns-apple-fill-font-color) b(.5) bc(--sns-apple-fill-bg-color) hover:b(.5) hover:bc(--sns-apple-fill-bg-color)',
		empty_class: 'bg(--sns-apple-bg-color) c(--sns-apple-font-color) b(.5) bc(--default-border-color) hover:b(.5) hover:bc(--default-border-color) ',
		color_icon: '/image/icons/apple.png',
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
	 * 아이콘위치
	 */
	iconPosition?: 'none' | 'left' | 'text_left' | 'center' | 'right';
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
	iconPosition,
	usrText,
	usrclass,
	onClick,
	...props
}: SNSbuttonProps) => {
	const service_color = useFill === 'fill' ?
		ServiceSet[service].fill_class
	:
		ServiceSet[service].empty_class
	const addicon = iconPosition != 'none' ? 'image|'+ServiceSet[service].color_icon+'|'+iconPosition : 'none';
	return (
		<Button kind="tertiary-fixed" size={size} usrclass={[service_color, usrclass].join(' ')} addicon={addicon}>{usrText}</Button>
	);
};