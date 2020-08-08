import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'
import { cls, log } from 'src/log'

import { TitlebarDragMove } from '@/func/move'
import { themes } from '@/func/themes'
import { IState } from '@/redux'
import { ReactComponent as BtnAdd } from '@/svgs/Btn_Add.svg'
import { ReactComponent as BtnClose } from '@/svgs/Btn_Close.svg'
import { ReactComponent as BtnDots } from '@/svgs/Btn_Dots.svg'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import BtnSvg from './BtnSvg'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
			height: 32,
			display: 'flex',
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

	const color = '#c8c7c7'

	cls()

	return (
		<div className={clsx(classes.root, titleBarCls)} onMouseDown={onMouseDown}>
			<BtnSvg component={BtnAdd} color={color} />
			<BtnSvg component={BtnDots} color={color} />
			<BtnSvg component={BtnClose} />
		</div>
	)
}
