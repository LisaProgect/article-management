import * as React from 'react'

import Button from '../../../shared/components/button/button.component'

import {
	useCounter,
} from '../../../store'
import {
	COUNTER_DECREMENT_VALUE, COUNTER_INCREMENT_VALUE,
} from '../home.contants'

import {
	editCounterBtnsWrapper,
} from '../home.styles'

const CounterActions: React.FunctionComponent = () => {
	const counter = useCounter()

	return <div className={editCounterBtnsWrapper}>
		<Button text='-1' onClick={counter.updateCounter(COUNTER_DECREMENT_VALUE,)} />
		<Button text='+1' onClick={counter.updateCounter(COUNTER_INCREMENT_VALUE,)} />
	</div>
}

export default CounterActions
