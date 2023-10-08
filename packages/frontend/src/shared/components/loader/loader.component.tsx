import * as React from 'react'

import {
	classBuilder,
} from '../../utils/class-builder.util'

import {
	ldsEllipsis,
} from './loader.styles'

interface ILoaderProps {
	wrapperClass?: string
}

const Loader: React.FunctionComponent<ILoaderProps> = ({
	wrapperClass,
},) => {
	return (
		<div className={classBuilder([ldsEllipsis, Boolean(wrapperClass,) && wrapperClass,],)}>
			<div />
			<div />
			<div />
			<div />
		</div>
	)
}

export default Loader