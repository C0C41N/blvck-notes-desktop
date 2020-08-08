import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'
import { log } from 'src/log'

import { TitlebarDragMove } from '@/func/move'
import { themes } from '@/func/themes'
import { IState } from '@/redux'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
			height: 32,
		},
	})
)

export default function Titlebar() {
	const classes = useStyles()

	const theme = useSelector((state: IState) => state.theme)
	const subTheme = useSelector((state: IState) => state.subTheme)
	const id = useSelector((state: IState) => state.id)

	const { titleBarCls } = themes[theme][subTheme]
	const { onMouseDown } = new TitlebarDragMove(id)

	return (
		<div className={clsx(classes.root, titleBarCls)} onMouseDown={onMouseDown}>
			<div></div>
		</div>
	)
}
