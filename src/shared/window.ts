import { BrowserWindow as Window, BrowserWindowConstructorOptions as options } from 'electron'

import { log } from '../log'
import { winURL } from './const'
import { randomKey } from './func'

class createWindow {
	private options: options = {
		frame: false,
		title: 'Blvck Notes',
		show: false,
		webPreferences: {
			nodeIntegration: true,
		},
	}

	protected id: string
	protected pos: IXY
	protected size: IXY

	protected window: Window | null

	protected constructor(
		protected winProps: INoteWin | IListWin,
		protected push: Push,
		protected close: Close
	) {
		this.id = randomKey(8)
		this.pos = this.winProps.pos
		this.size = this.winProps.size

		this.window = new Window(this.options)
		this.window.removeMenu()
		this.window.loadURL(winURL)

		this.window.on('closed', this.onClosed.bind(this))
		this.window.on('ready-to-show', this.onReady.bind(this))
	}

	protected onReady() {
		if (!this.window) return
		this.window.setSize(this.size.x, this.size.y)
		this.window.setPosition(this.pos.x, this.pos.y)
		this.window.show()
	}

	private onClosed() {
		this.close(this.id)
	}
}

export class createNoteWindow extends createWindow {
	constructor(
		protected winProps: INoteWin,
		protected push: Push,
		protected close: Close
	) {
		super(winProps, push, close)
	}

	protected onReady() {
		super.onReady()
		if (!this.window) return
		this.push(this.id, this.window, 'note')
	}
}

export class createListWindow extends createWindow {
	constructor(
		protected winProps: IListWin,
		protected push: Push,
		protected close: Close
	) {
		super(winProps, push, close)
	}

	protected onReady() {
		super.onReady()
		if (!this.window) return
		this.push(this.id, this.window, 'list')
	}
}

//

export type Push = (id: string, window: Window, type: 'note' | 'list') => void
export type Close = (id: string) => void

//

export interface INoteWin {
	type: 'note'
	id: string
	size: IXY
	pos: IXY
}

export interface IListWin {
	type: 'list'
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
