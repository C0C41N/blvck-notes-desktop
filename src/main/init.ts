import { App } from 'electron'
import { IListWin, INoteWin } from 'src/shared/window'

import { cls } from '../log'
import { newNoteProps } from '../shared/const'
import { Stack } from '../shared/stack'
import { userFileWin, WinFile } from '../shared/userFiles'

export function init(app: App) {
	const winFile = new userFileWin()
	const winFileContent = winFile.read()
	const stack = new Stack()

	app.on('activate', onActivate)
	app.on('window-all-closed', onAllClosed)

	cls()

	if (winFileContent) {
		createWindows(winFileContent)
	} else {
		createNewNoteWindow()
	}

	/* ---------------------------------------------------------------------- */

	function createWindows(contents: WinFile) {
		const notes = contents.filter(e => e.type === 'note') as INoteWin[]
		const lists = contents.filter(e => e.type === 'list') as IListWin[]

		createListWindow(lists)
		createNoteWindows(notes)
	}

	function createNewNoteWindow() {
		stack.createNoteWindow(newNoteProps())
	}

	function createNoteWindows(notes: INoteWin[]) {
		notes.forEach(e => {
			stack.createNoteWindow(e)
		})
	}

	function createListWindow(lists: IListWin[]) {
		if (lists.length > 0) stack.createListWindow(lists[0])
	}

	function onActivate() {
		if (stack.count() > 0) return
		createNewNoteWindow()
	}

	function onAllClosed() {
		if (process.platform === 'darwin') return
		app.quit()
	}
}
