import * as React from 'react'
import {
	RouterProvider,
} from 'react-router-dom'

import {
	router,
} from './routes'


const Router: React.FunctionComponent = () => {

	return (
		<RouterProvider router={router}/>
	)
}

export default Router
