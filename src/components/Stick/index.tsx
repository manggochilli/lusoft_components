interface StickProps {
	/**
	 * 크기 설정
	 */
	size?: '' | 'small' | 'medium' | 'large' | 'expressive' | 'extralarge';
}

export const Stick = ({
	size = 'large',
	...props
}: StickProps) => {
	const sizeclass = size === 'small' ?
		`w(1) h(16) m(0/5) bg(--default-border-color) `
	: size === 'medium' ?
		`w(1) h(19) m(0/5) bg(--default-border-color) `
	: size === 'expressive' ?
		`w(1) h(24) m(0/5) bg(--default-border-color) `
	: size === 'extralarge' ?
		`w(1) h(33) m(0/5) bg(--default-border-color) `
	: // Default large
		`w(1) h(24) m(0/5) bg(--default-border-color) `;
	return (
		<div
			className={[sizeclass].join(' ')}
		/>
	);
};