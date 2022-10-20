interface CheckboxProps {
	/**
	 * 셋업된 분류
	 */
	kind?: 'normal' | 'primary_fill' | 'primary_ghost';
	/**
	 * 크기 설정
	 */
	size?: '' | 'small' | 'medium' | 'large' | 'expressive' | 'extralarge';
	/**
	 * 이름
	 */
	_name?: string;
}
export const Checkbox = ({
	kind,
	size,
	_name,
	...props
}: CheckboxProps) => {
	const baseClass = `pointer before:block+b(1)+bc(--default-border-color)+content('') &:checked:before:b(1)+content('✓') &:checked:before:text-center`;
	const kindClass = kind === 'primary_fill' ?
		`&:checked:before:bc(--primary-border-color)+bg(--primary-bg-color) &:checked:before:c(--primary-fill-font-color)`
	: kind === 'primary_ghost' ?
		`&:checked:before:bc(--primary-border-color)+bg(--white-color) &:checked:before:c(--primary-font-color)`
	: // default normal
		`&:checked:before:bc(--default-border-color)+bg(--white-color) &:checked:before:c(--default-font-color)`;
	const sizeclass = size === 'small' ?
		`before:w(14)+h(14) &:checked:before:w(14)+h(14)+font(12) &:checked:before:line-height(12)`
	: size === 'large' ?
		`before:w(22)+h(22) &:checked:before:w(22)+h(22)+font(20) &:checked:before:line-height(20)`
	: size === 'expressive' ?
		`before:w(24)+h(24) &:checked:before:w(24)+h(24)+font(24) &:checked:before:line-height(24)`
	: size === 'extralarge' ?
		`before:w(31)+h(31) &:checked:before:w(31)+h(31)+font(29) &:checked:before:line-height(29)`
	:	// default medium
		`before:w(18)+h(18) &:checked:before:w(18)+h(18)+font(16) &:checked:before:line-height(16)`;
	return (
		<input type="checkbox" id={_name} name={_name} className={[baseClass,kindClass,sizeclass].join(' ')} />
	);
}