import { ipcMain, screen } from 'electron'

import { log } from '../log'
import { randomKey } from './func'
import { createListWindow, createNoteWindow, IListWin, INoteWin } from './window'

export class Stack {
	private stack: stack = {}

	public count = () => Object.keys(this.stack).length

	public constructor() {
		ipcMain.on('close', (_, id) => {
			this.stack[id].window.close()
		})

		ipcMain.on('windowMoving', (_, mouseX, mouseY, id) => {
			const { x, y } = screen.getCursorScreenPoint()
			this.stack[id].window.setPosition(x - mouseX, y - mouseY)
		})
	}

	public createNoteWindow(winProps: INoteWin) {
		const id = randomKey(8)
		const window = new createNoteWindow(id, winProps, this.closed.bind(this))
		this.push(id, window)
	}

	public createListWindow(winProps: IListWin) {
		const id = randomKey(8)
		const window = new createListWindow(id, winProps, this.closed.bind(this))
		this.push(id, window)
	}

	private push(id: string, window: createListWindow | createNoteWindow) {
		Object.assign(this.stack, { [id]: window })
	}

	private closed(id: string) {
		delete this.stack[id]
	}
}

//

export interface stack {
	[index: string]: createNoteWindow | createListWindow
}
