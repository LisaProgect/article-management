import * as React from 'react'
import {
	Navigate,
	Route,
} from 'react-router-dom'

import Home from '../modules/home/home.component'
import {
	RouterKeys,
} from './keys'

export const publicRoutes = (
	<>
		<Route path={RouterKeys.HOME} element={<Home />}/>
		<Route path={RouterKeys.ALL_MATCH} element={<Navigate to={RouterKeys.HOME} />} />
	</>
)

export const privateRoutes = (
	<>
		<Route path={RouterKeys.HOME} element={<Home />} />
		<Route path={RouterKeys.ALL_MATCH} element={<Navigate to={RouterKeys.HOME} />} />
	</>
)