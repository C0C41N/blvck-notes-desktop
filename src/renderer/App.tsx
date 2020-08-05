import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'

import { createStyles, makeStyles } from '@material-ui/core/styles'

import { log } from '../log'
import { funcInit } from './func'
import { InitTheme, themes } from './func/noteThemes'
import { IState } from './redux'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			height: '100vh',
			width: '100vw',
			backgroundColor: '#00000040',
		},
	})
)

export default function App() {
	const classes = useStyles()

	const id = useSelector((state: IState) => state.id)
	const type = useSelector((state: IState) => state.type)
	const theme = useSelector((state: IState) => state.theme)

	Initialize()

	const { body: clsBody } = themes[theme]

	return <div className={clsx(classes.root, clsBody)}></div>

	function Initialize() {
		// funcInit()
		InitTheme(e => e())
	}
}
