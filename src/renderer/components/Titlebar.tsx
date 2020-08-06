import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'

import { createStyles, makeStyles } from '@material-ui/core/styles'

import { log } from '../../log'
import { themes } from '../func/themes'
import { IState } from '../redux'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
			height: 32,
			// '-webkit-app-region': 'drag',
		},
	})
)

export default function Titlebar() {
	const classes = useStyles()

	const subTheme = useSelector((state: IState) => state.subTheme)

	const { titleBar: titlebarCls } = themes[subTheme]
	alert('ok')

	return (
		<div
			className={clsx(classes.root, titlebarCls)}
			onContextMenu={e => {
				console.log('context')
			}}
			onClick={() => {
				alert('click')
			}}
		></div>
	)
}
