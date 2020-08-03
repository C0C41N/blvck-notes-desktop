import { BrowserWindow as Window } from 'electron'

import { log } from '../log'
import { createListWindow, createNoteWindow, IListWin, INoteWin } from './window'

export class Stack {
	private stack: stack = {}

	public count = () => Object.keys(this.stack).length

	public createNoteWindow(winProps: INoteWin) {
		new createNoteWindow(winProps, this.push.bind(this), this.close.bind(this))
	}

	public createListWindow(winProps: IListWin) {
		new createListWindow(winProps, this.push.bind(this), this.close.bind(this))
	}

	private push(id: string, window: Window, type: 'note' | 'list') {
		Object.assign(this.stack, { [id]: { id, type, window } })

		log(['Push', { stack: this.stack }])
	}

	private close(id: string) {
		delete this.stack[id]

		log(['Close', { stack: this.stack }])
	}
}

//

export interface stack {
	[index: string]: {
		id: string
		type: 'note' | 'list'
		window: Window
	}
}
