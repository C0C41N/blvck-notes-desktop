import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'

import { IState } from '@/redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { themes } from '../func/noteThemes'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			height: '100vh',
			width: '100vw',
			backgroundColor: '#00000040',
		},
	})
)

export default function Root() {
	const classes = useStyles()

	const id = useSelector((state: IState) => state.id)
	const type = useSelector((state: IState) => state.type)
	const theme = useSelector((state: IState) => state.theme)

	const { body: bodyCls } = themes[theme]

	return <div className={clsx(classes.root, bodyCls)}></div>
}
