import * as React from 'react'

import {
	classBuilder,
} from '../../utils/class-builder.util'
import Loader from '../loader/loader.component'

import {
	btn,
} from './button.styles'

interface IButtonProps {
	text: string;
	disabled?: boolean;
	loading?: boolean;
	type?: 'submit' | 'reset' | 'button';
	onClick?: () => void
}

const Button: React.FunctionComponent<IButtonProps> = ({
	text,
	disabled,
	loading,
	type,
	onClick,
},) => {
	const isLoading = Boolean(loading,)
	const isDisabled = isLoading || disabled

	return <button onClick={onClick} type={type} className={classBuilder([btn,],)} disabled={isDisabled}>
		{
			isLoading ?
				<Loader /> :
				text
		}
	</button>
}

export default Button
