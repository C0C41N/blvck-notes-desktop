import { BrowserWindow } from 'electron'

import { log } from '../debug/log'
import { createListWindow, createNoteWindow, IListWin, INoteWin } from './window'

export type stack = (BrowserWindow | null)[]

export class Stack {
	private stack: stack = []

	public createNoteWindow(noteProps: INoteWin) {
		const createWindow = new createNoteWindow(noteProps)
		this.stack.push(createWindow.getWindow())
	}

	public createListWindow(listProps: IListWin) {
		const createWindow = new createListWindow(listProps)
		this.stack.push(createWindow.getWindow())
	}
}
