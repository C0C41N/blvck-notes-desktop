import { BrowserWindow as Window, BrowserWindowConstructorOptions as options } from 'electron'

import { log } from '../log'
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

	protected pos: IXY
	protected size: IXY

	protected window: Window

	protected constructor(
		protected id: string,
		protected winProps: INoteWin | IListWin,
		protected closed: Closed
	) {
		this.pos = this.winProps.pos
		this.size = this.winProps.size

		this.window = new Window(this.options)
		this.window.removeMenu()
		this.window.loadURL(winURL)

		this.window.on('closed', this.onClosed.bind(this))
		this.window.on('ready-to-show', this.onReady.bind(this))
	}

	protected onReady() {
		this.window.setSize(this.size.x, this.size.y)
		this.window.setPosition(this.pos.x, this.pos.y)
		this.window.show()
	}

	private onClosed() {
		this.closed(this.id)
	}

	public close() {
		this.window.close()
	}
}

export class createNoteWindow extends createWindow {
	constructor(
		protected id: string,
		protected winProps: INoteWin,
		protected closed: Closed
	) {
		super(id, winProps, closed)
	}

	protected onReady() {
		super.onReady()
		this.window.webContents.send('init', this.id, 'note', this.window)
	}
}

export class createListWindow extends createWindow {
	constructor(
		protected id: string,
		protected winProps: IListWin,
		protected closed: Closed
	) {
		super(id, winProps, closed)
	}

	protected onReady() {
		super.onReady()
		this.window.webContents.send('init', this.id, 'list', this.window)
	}
}

//

export type Closed = (id: string) => void

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
