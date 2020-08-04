import clsx from 'clsx'
import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { useSelector } from 'react-redux'

import { createStyles, makeStyles } from '@material-ui/core/styles'

import { log } from '../log'
import { noteTheme } from './func/noteThemes'
import { IState } from './redux'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			height: '100vh',
			width: '100vw',
		},
	})
)

const App: FC = () => {
	const classes = useStyles()

	const id = useSelector((state: IState) => state.id)
	const type = useSelector((state: IState) => state.type)
	const theme = useSelector((state: IState) => state.theme)

	const clsBody = noteTheme[theme].body()

	return <div className={clsx(classes.root, }></div>
}

export default hot(App)
