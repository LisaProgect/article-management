import * as React from 'react'
import {
	useTranslation,
} from 'react-i18next'

import viteLogo from '../../../assets/icons/vite.svg'
import reactLogo from '../../../assets/icons/react.svg'
import emotionLogo from '../../../assets/images/emotion-logo.webp'

import {
	logo, logoWrapper,
} from '../home.styles'

const Header: React.FunctionComponent = () => {
	const {
		t,
	} = useTranslation()

	return <div className={logoWrapper}>
		<img src={viteLogo} className={logo} alt={t('viteLogo',)} />

		<img src={reactLogo} className={logo} alt={t('reactLogo',)} />

		<img src={emotionLogo} className={logo} alt={t('emotionLogo',)} />
	</div>
}

export default Header
