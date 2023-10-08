import * as React from 'react'
import {
	useTranslation,
} from 'react-i18next'

import {
	classBuilder,
} from '../../../shared/utils/class-builder.util'
import {
	LANGUAGES,
} from '../../../translations/types'
import {
	setLanguage,
} from '../../../shared/utils/set-language.util'

import {
	chooseLangBtn, chooseLangBtnActive,
} from '../home.styles'

const ChooseLangActions: React.FunctionComponent = () => {
	const {
		i18n,
	} = useTranslation()

	const isEnglish = i18n.language === LANGUAGES.EN
	const isRussian = i18n.language === LANGUAGES.RU

	return <>
		<button
			className={classBuilder(
				[
					String(chooseLangBtn,),
					isEnglish && String(chooseLangBtnActive,),
				],
			)}
			onClick={setLanguage(LANGUAGES.EN,)}>
			EN
		</button>

		<button
			className={classBuilder(
				[
					String(chooseLangBtn,),
					isRussian && String(chooseLangBtnActive,),
				],
			)}
			onClick={setLanguage(LANGUAGES.RU,)}>
			RU
		</button>
	</>
}

export default ChooseLangActions
