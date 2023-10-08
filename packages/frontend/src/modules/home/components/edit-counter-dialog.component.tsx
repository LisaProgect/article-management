import * as React from 'react'

import Counter from './counter.component'
import CounterActions from './counter-actions.component'

import {
	editCounterWrapper,
} from '../home.styles'

const EditCounter: React.FunctionComponent = () => {
	return <div className={editCounterWrapper}>
		<Counter />

		<CounterActions />
	</div>
}

export default EditCounter
