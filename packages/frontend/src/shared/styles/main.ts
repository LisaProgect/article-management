/* eslint-disable no-unused-expressions */
import {
	injectGlobal,
} from '@emotion/css'
import {
	fredokaRegular,
} from './fonts'

injectGlobal`
	html, body {
		height: 100%;
	}

	body {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	:root {
		width: 100%;
		isolation: isolate;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
	}

	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
	}

	p, h1, h2, h3, h4, h5, h6 {
		${fredokaRegular}
		overflow-wrap: break-word;
		margin-bottom: 0;
		color: var(--reverted-accent-color);
	}

	input, button, textarea, select {
		${fredokaRegular}
	}

	button {
		cursor: pointer;
	}

	.hidden-el {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		clip: rect(0 0 0 0);
		overflow: hidden;
	}

	.bp4-overlay {
		z-index: 11111111111 !important;
	}
`
