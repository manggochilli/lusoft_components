import React from "react";

export type iconName = 'menu' | 'close' | 'search' | 'close_circle' | 'eye_fill' | 'eyeoff_fill';

type iconType = {
	path: string;
	viewBox: string;
}

const IconSet: Record<iconName, iconType> = {
	menu: {
		path: `M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z`,
		viewBox: `0 0 448 512`,
	},
	close: {
		path: `M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z`,
		viewBox: `0 0 320 512`,
	},
	search: {
		path: `M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z`,
		viewBox: `0 0 512 512`,
	},
	close_circle: {
		path: `M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 10.586L9.172 7.757L7.757 9.172L10.586 12L7.757 14.828L9.172 16.243L12 13.414L14.828 16.243L16.243 14.828L13.414 12L16.243 9.172L14.828 7.757L12 10.586Z`,
		viewBox: `0 0 24 24`,
	},
	eye_fill: {
		path: `M1.18091 12C2.12091 6.88 6.60791 3 11.9999 3C17.3919 3 21.8779 6.88 22.8189 12C21.8789 17.12 17.3919 21 11.9999 21C6.60791 21 2.12191 17.12 1.18091 12ZM11.9999 17C13.326 17 14.5978 16.4732 15.5354 15.5355C16.4731 14.5979 16.9999 13.3261 16.9999 12C16.9999 10.6739 16.4731 9.40215 15.5354 8.46447C14.5978 7.52678 13.326 7 11.9999 7C10.6738 7 9.40206 7.52678 8.46437 8.46447C7.52669 9.40215 6.99991 10.6739 6.99991 12C6.99991 13.3261 7.52669 14.5979 8.46437 15.5355C9.40206 16.4732 10.6738 17 11.9999 17ZM11.9999 15C11.2043 15 10.4412 14.6839 9.87859 14.1213C9.31598 13.5587 8.99991 12.7956 8.99991 12C8.99991 11.2044 9.31598 10.4413 9.87859 9.87868C10.4412 9.31607 11.2043 9 11.9999 9C12.7956 9 13.5586 9.31607 14.1212 9.87868C14.6838 10.4413 14.9999 11.2044 14.9999 12C14.9999 12.7956 14.6838 13.5587 14.1212 14.1213C13.5586 14.6839 12.7956 15 11.9999 15Z`,
		viewBox: `0 0 24 24`,
	},
	eyeoff_fill: {
		path: `M4.51991 5.93358L1.39291 2.80758L2.80791 1.39258L22.6069 21.1926L21.1919 22.6066L17.8819 19.2966C16.1231 20.4121 14.0826 21.0029 11.9999 20.9996C6.60791 20.9996 2.12191 17.1196 1.18091 11.9996C1.61094 9.6703 2.78254 7.54247 4.52091 5.93358H4.51991ZM14.7569 16.1716L13.2929 14.7076C12.733 14.9755 12.1037 15.0631 11.4918 14.9584C10.88 14.8536 10.3157 14.5616 9.87678 14.1227C9.43785 13.6838 9.14588 13.1195 9.04112 12.5076C8.93637 11.8958 9.02399 11.2665 9.29191 10.7066L7.82791 9.24258C7.19162 10.2041 6.90718 11.3559 7.02274 12.5031C7.1383 13.6502 7.64676 14.7222 8.46203 15.5375C9.27729 16.3527 10.3493 16.8612 11.4964 16.9767C12.6436 17.0923 13.7954 16.8079 14.7569 16.1716ZM7.97391 3.75958C9.22091 3.26958 10.5799 2.99958 11.9999 2.99958C17.3919 2.99958 21.8779 6.87958 22.8189 11.9996C22.5125 13.6653 21.8238 15.2372 20.8069 16.5916L16.9469 12.7316C17.0616 11.9592 16.9937 11.1707 16.7488 10.4292C16.5039 9.68778 16.0888 9.01399 15.5366 8.46185C14.9845 7.9097 14.3107 7.49455 13.5693 7.24965C12.8278 7.00475 12.0393 6.93692 11.2669 7.05158L7.97391 3.76058V3.75958Z`,
		viewBox: `0 0 24 24`,
	}
}

export { IconSet };

interface IconProps {
	iconName: iconName;
	size?: number;
	color?: string;
	usrclass?: string;
}

export const Icon = ({
	iconName,
	size,
	color,
	usrclass,
	...props
}: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size + `px`}
			viewBox={IconSet[iconName].viewBox}
			fill={color}
			xmlSpace="preserve"
			className={usrclass}
		>
			<path d={IconSet[iconName].path} />
		</svg>
	)
};