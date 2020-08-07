import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'

import { themes } from '@/func/themes'
import { IState } from '@/redux'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import Titlebar from './Titlebar'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			height: '100vh',
			width: '100vw',
			boxSizing: 'border-box',
		},
	})
)

export default function Note() {
	const classes = useStyles()

	const theme = useSelector((state: IState) => state.theme)
	const subTheme = useSelector((state: IState) => state.subTheme)

	const { bodyCls } = themes[theme][subTheme]

	return (
		<div className={clsx(classes.root, bodyCls)}>
			<Titlebar />
		</div>
	)
}