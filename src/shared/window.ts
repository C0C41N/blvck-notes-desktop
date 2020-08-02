import { BrowserWindow as Window, BrowserWindowConstructorOptions as options } from 'electron'

import { log } from '../debug/log'
import { winURL } from './const'

class createWindow {
	private options: options = {
		frame: false,
		title: 'Blvck Notes',
		show: false,
		webPreferences: {
			nodeIntegration: true,
		},
	}

	protected pos: IXY = { x: 0, y: 0 }
	protected size: IXY = { x: 0, y: 0 }

	protected window: Window | null = new Window(this.options)

	public getWindow = () => this.window

	protected constructor(protected winProps: INoteWin | IListWin) {
		this.pos = winProps.pos
		this.size = winProps.size

		if (this.window) {
			this.window.removeMenu()

			this.window.on('ready-to-show', this.onReady.bind(this))
			this.window.on('closed', this.onClosed.bind(this))

			this.window.loadURL(winURL)
		}
	}

	private onReady() {
		if (this.window) {
			this.window.setSize(this.size.x, this.size.y)
			this.window.setPosition(this.pos.x, this.pos.y)

			this.window.show()
		}
	}

	private onClosed() {
		this.window = null
	}
}

export class createNoteWindow extends createWindow {
	constructor(noteProps: INoteWin) {
		super(noteProps)
	}
}

export class createListWindow extends createWindow {
	constructor(listProps: IListWin) {
		super(listProps)
	}
}

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
