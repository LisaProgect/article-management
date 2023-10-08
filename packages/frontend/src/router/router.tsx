import * as React from 'react'
import {
	BrowserRouter, Routes,
} from 'react-router-dom'

import {
	useAuth,
} from '../shared/hooks/use-auth.hook'
import {
	useTheme,
} from '../store/theme'

import Loader from '../shared/components/loader/loader.component'

import {
	privateRoutes, publicRoutes,
} from './routes'

import {
	LOCAL_STORAGE_KEYS,
} from '../shared/types/local-storage.types'
import {
	THEMES,
} from '../shared/types/themes.types'

const Router: React.FunctionComponent = () => {
	const {
		isAuth,
	} = useAuth()

	const {
		setTheme,
	} = useTheme()

	React.useEffect(() => {
		const theme = (localStorage.getItem(LOCAL_STORAGE_KEYS.THEME,) as THEMES | undefined) ?? THEMES.AUTO

		setTheme(theme,)()
	}, [],)

	return (
		<BrowserRouter>
			<React.Suspense fallback={<Loader />}>
				<Routes>
					{
						isAuth ?
							privateRoutes :
							publicRoutes
					}
				</Routes>
			</React.Suspense>
		</BrowserRouter>
	)
}

export default Router
