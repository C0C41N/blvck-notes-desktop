import clsx from 'clsx'
import { ipcRenderer } from 'electron'
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
	const id = useSelector((state: IState) => state.id)

	const { titleBar: titlebarCls } = themes[subTheme]

	let animationId: any
	let mouseX: any
	let mouseY: any

	function onMouseDown(e: any) {
		mouseX = e.clientX
		mouseY = e.clientY

		document.addEventListener('mouseup', onMouseUp)
		requestAnimationFrame(moveWindow)
		console.log(`[${Date.now()}] Down`)
	}

	function onMouseUp(e: any) {
		document.removeEventListener('mouseup', onMouseUp)
		cancelAnimationFrame(animationId)
		console.log(`[${Date.now()}] Up`)
	}

	function moveWindow() {
		ipcRenderer.send('windowMoving', mouseX, mouseY, id)
		animationId = requestAnimationFrame(moveWindow)
	}

	return (
		<div className={clsx(classes.root, titlebarCls)} onMouseDown={onMouseDown}>
			<div></div>
		</div>
	)
}
