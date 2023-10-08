import * as React from 'react'
import {
	useTranslation,
} from 'react-i18next'

import ChooseLangActions from './choose-lang-actions.component'

import {
	languageSwitchTitle, languageSwitchWrapper,
} from '../home.styles'

const LanguageSwitch: React.FunctionComponent = () => {
	const {
		t,
	} = useTranslation()

	return <div className={languageSwitchWrapper}>
		<p className={languageSwitchTitle}>{t('chooseLang',)}: </p>

		<ChooseLangActions />
	</div>
}

export default LanguageSwitch
