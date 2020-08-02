import { BrowserWindow, BrowserWindowConstructorOptions as options } from 'electron'

import { winURL } from '../misc'
import { readWin } from './readUserRes'

export interface INoteWin {
	type: 'note'
	id: string
	size: IXY
	pos: IXY
}

export interface INote {
	id: string
	data: string
}

export interface IXY {
	x: number
	y: number
}

export let Note: BrowserWindow | null

export function createNote() {
	const options: options = {
		frame: false,
		title: 'Blvck Notes',
		show: false,
		webPreferences: {
			nodeIntegration: true,
		},
	}

	Note = new BrowserWindow(options)

	Note.removeMenu()
	Note.loadURL(winURL)

	Note.on('ready-to-show', onReady)
	Note.on('closed', onClose)
}

function onReady() {
	if (!Note) return

	Note.setSize(200, 200)
	Note.show()
}

function onClose() {
	Note = null
}
