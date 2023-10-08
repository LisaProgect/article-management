import * as React from 'react'
import {
	useTranslation,
} from 'react-i18next'

import {
	useCounter,
} from '../../../store'

import {
	counterStyles,
} from '../home.styles'

const Counter: React.FunctionComponent = () => {
	const counter = useCounter()

	const {
		t,
	} = useTranslation()

	return <p className={counterStyles}>{t('counter',)}: {counter.counter}</p>
}

export default Counter
