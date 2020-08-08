import { randomKey } from './func'
import { IListWin, INoteWin } from './types'
import { createListWindow, createNoteWindow } from './window'

export class Stack {
	private stack: stack = {}

	public count = () => Object.keys(this.stack).length

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
