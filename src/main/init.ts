import { App } from 'electron'

import { cls, log } from '../debug/log'
import { newNoteProps } from '../shared/const'
import { Stack } from '../shared/stack'
import { userFileWin } from '../shared/userFiles'

export function init (app: App) {
	const winFile = new userFileWin()
	const winFileContent = winFile.read()
	const stack = new Stack()

	app.on('activate', onActivate)
	app.on('window-all-closed', onAllClosed)

	cls()
	
	if (winFileContent) {
		log({ winFileContent })
	}
	else {
		createNoteWindow()
	}

	function createNoteWindow() {
		stack.createNoteWindow(newNoteProps())
	}

	function onActivate() {
		if (stack.count() > 0) return
		createNoteWindow()
	}

	function onAllClosed() {
		if (process.platform === 'darwin') return
		app.quit()
	}
}
