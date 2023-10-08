import * as React from 'react'
import {
	useTranslation,
} from 'react-i18next'

import Button from '../../shared/components/button/button.component'
import Dialog from '../../shared/components/dialog/dialog.component'
import Header from './components/header.component'
import Counter from './components/counter.component'
import EditCounter from './components/edit-counter-dialog.component'
import LanguageSwitch from './components/language-switch.component'
import ThemeSwitcher from '../../shared/components/theme-switcher/theme-switcher.component'

import {
	toggleState,
} from '../../shared/utils/react-state-toggle.util'

import {
	contentWrapper, inner, title, wrapper,
} from './home.styles'

const Home: React.FunctionComponent = () => {
	const [isDialogOpen, setIsDialogOpen,] = React.useState(false,)
	const {
		t,
	} = useTranslation()

	return (
		<div className={wrapper}>
			<div className={inner}>
				<ThemeSwitcher />

				<Header />

				<div className={contentWrapper}>
					<h1 className={title}>{t('viteReactEmotion',)}</h1>

					<p>{t('test',)}</p>

					<LanguageSwitch />

					<Counter />

					<Button onClick={toggleState(setIsDialogOpen,)} text={t('edit',)} />
					<p>test</p>
				</div>
				<Dialog
					open={isDialogOpen}
					onClose={toggleState(setIsDialogOpen,)}
					content={<EditCounter />}
				/>
			</div>
		</div>
	)
}

export default Home
