import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'

import { IState } from '@/redux'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import { themes } from '../func/themes'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
			height: 32,
			'-webkit-app-region': 'drag',
		},
	})
)

export default function Titlebar() {
	const classes = useStyles()

	const theme = useSelector((state: IState) => state.theme)

	const { titleBar: titlebarCls } = themes[theme]

	return <div className={clsx(classes.root, titlebarCls)}></div>
}
