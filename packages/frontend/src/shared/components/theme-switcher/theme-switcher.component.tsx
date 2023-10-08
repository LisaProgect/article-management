import * as React from 'react'

import {
	useTheme,
} from '../../../store/theme'

import {
	container,
} from './theme-switcher.styles'

import ThemeRadioGroup from './components/theme-radio-group.component'

const ThemeSwitcher: React.FunctionComponent = () => {
	const {
		theme, setTheme,
	} = useTheme()

	return (
		<div className={container}>
			<ThemeRadioGroup currTheme={theme} handleClick={setTheme} />
		</div>
	)
}

export default ThemeSwitcher