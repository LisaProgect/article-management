import i18n from 'i18next'
import {
	initReactI18next,
} from 'react-i18next'

import {
	en,
} from './resourses/en'
import {
	ru,
} from './resourses/ru'

// eslint-disable-next-line no-void
void i18n
	.use(initReactI18next,)
	.init({
		resources: {
			en: {
				translation: en,
			},
			ru: {
				translation: ru,
			},
		},
		fallbackLng: 'en',
		debug:       true,
	},)

export default i18n