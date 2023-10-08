/* eslint-disable no-unused-expressions */
import {
	injectGlobal,
} from '@emotion/css'
import {
	colors,
} from './colors'

injectGlobal`
	&[data-theme="dark"] {
		--accent-color: ${colors.charlestonGreen};
		--reverted-accent-color: ${colors.cultured};
		--primary: ${colors.platinum};
	}

	&[data-theme="light"] {
		--accent-color: ${colors.cultured};
		--reverted-accent-color: ${colors.charlestonGreen};
		--primary: ${colors.spanishGray};
	}
`