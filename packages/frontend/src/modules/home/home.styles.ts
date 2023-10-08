import {
	css,
} from '@emotion/css'

import {
	fredokaRegular,
} from '../../shared/styles/fonts'
import {
	spaces,
} from '../../shared/styles/spaces'

export const editCounterWrapper = css`
	display: grid;
	justify-content: center;
	background-color: var(--accent-color);
`

export const editCounterBtnsWrapper = css`
	display: flex;
	gap: ${spaces.small};
`

export const counterStyles = css`
	font-size: 24px;
	text-align: center;
	text-transform: capitalize;
`

export const logo = css`
	width: 200px;
	height: 200px;
	object-fit: contain;
`

export const logoWrapper = css`
	margin: 0 auto;
	display: flex;
	gap: ${spaces.small};
`

export const languageSwitchWrapper = css`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${spaces.tiny};
`

export const languageSwitchTitle = css`
	margin: 0;
`

export const chooseLangBtn = css`
	all: unset;
	${fredokaRegular}
	cursor: pointer;
	color: var(--reverted-accent-color);
`

export const chooseLangBtnActive = css`
	text-decoration: underline;
	color: var(--reverted-accent-color);
`

export const wrapper = css`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--accent-color);
`

export const inner = css`
	display: grid;
	justify-content: center;
	text-align: center;
	gap: ${spaces.small};
`

export const contentWrapper = css`
	display: grid;
	justify-content: center;
	gap: ${spaces.small};
`

export const title = css`
	font-size: 42px;
`