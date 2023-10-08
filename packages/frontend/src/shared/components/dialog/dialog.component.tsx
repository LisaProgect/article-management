import * as React from 'react'
import {
	Dialog as BlueprintDialog,
} from '@blueprintjs/core'

import {
	dialog,
} from './dialog.styles'

interface IDialogProps {
	open: boolean;
	onClose: () => void;
	header?: React.ReactNode;
	content: React.ReactNode;
}

const Dialog: React.FunctionComponent<IDialogProps> = ({
	open, onClose, header, content,
},) => {
	return (
		<BlueprintDialog
			isOpen={open}
			onClose={onClose}
			className={dialog}
		>
			{header}
			{content}
		</BlueprintDialog>
	)
}
export default Dialog
