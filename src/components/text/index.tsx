
interface TextProps {
	/**
	 * 크기 설정
	 */
	size?: '' | 'small' | 'medium' | 'large' | 'expressive' | 'extralarge';
	/**
	 * 사용자 추가 클래스
	 */
	usrclass?: string;
	/**
	 * 버튼에 표시할 내용
	 */
	children?: string;
}

/**
 *  버튼 엘리먼트 정의
 */
export const Text = ({
	size = 'large',
	usrclass,
	children,
	...props
}: TextProps) => {
	const sizeclass = size === 'small' ?
		`h(32) p(2) font(11) 400 line-height(32) `
	: size === 'medium' ?
		`h(39) p(2) font(13) 400 line-height(40) `
	: size === 'expressive' ?
		`h(48) p(2) font(18) 400 line-height(48) `
	: size === 'extralarge' ?
		`h(66) p(2) font(22) 400 line-height(64) `
	: // Default large
		`h(48) p(2) font(16) 400 line-height(48) `;
	return (
		<span
			className={[sizeclass, usrclass].join(' ')}
			{...props}
		>
			{children}
		</span>
	);
};
