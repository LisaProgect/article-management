import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	Portal,
} from '@blueprintjs/core'

import Router from './router/router'
import ErrorBoundary from './modules/errorBoundary/errorBoundary'

import '../src/translations/i18next'

import '../src/shared/styles/font-faces.css'
import '../src/shared/styles/main'
import '../src/shared/styles/theme'
import '@blueprintjs/core/lib/css/blueprint.css'

ReactDOM.createRoot(document.getElementById('root',)!,).render(
	<ErrorBoundary>
		<Portal>
			<Router />
		</Portal>
	</ErrorBoundary>,
)
