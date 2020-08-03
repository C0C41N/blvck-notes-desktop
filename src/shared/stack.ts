import { ipcMain } from 'electron'

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
	}

	public createNoteWindow(winProps: INoteWin) {
		const id = randomKey(8)
		const window = new createNoteWindow(id, winProps, this.closed.bind(this))
		this.push(id, window, 'note')
	}

	public createListWindow(winProps: IListWin) {
		const id = randomKey(8)
		const window = new createListWindow(id, winProps, this.closed.bind(this))
		this.push(id, window, 'list')
	}

	private push(
		id: string,
		window: createListWindow | createNoteWindow,
		type: 'note' | 'list'
	) {
		Object.assign(this.stack, { [id]: { type, window } })
		// log(['Push', { stack: this.count() }])
	}

	private closed(id: string) {
		delete this.stack[id]
		// log(['Close', { stack: this.count() }])
	}
}

//

export interface stack {
	[index: string]: {
		id: string
		type: 'note' | 'list'
		window: createNoteWindow | createListWindow
	}
}
