import {
	BrowserWindow as Window, BrowserWindowConstructorOptions as options, screen
} from 'electron'

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

	protected window: Window

	protected constructor(
		protected id: string,
		protected winProps: INoteWin | IListWin,
		protected closed: Closed
	) {
		this.pos = this.convertPos()

		this.window = new Window(this.options)
		this.window.removeMenu()
		this.window.loadURL(winURL)

		this.window.on('closed', this.onClosed.bind(this))
		this.window.on('ready-to-show', this.onReady.bind(this))
	}

	protected onReady() {
		this.window.setSize(this.winProps.size.x, this.winProps.size.y)
		this.window.setPosition(this.pos.x, this.pos.y)
		this.window.show()
	}

	private onClosed() {
		this.closed(this.id)
	}

	private convertPos(): IXY {
		const { height, width } = screen.getPrimaryDisplay().size
		const { x: px, y: py } = this.winProps.pos
		const { x: sx, y: sy } = this.winProps.size

		const x = cal(px, width, sx)
		const y = cal(py, height, sy)

		return { x, y }

		function cal(p: number, r: number, s: number) {
			const i = Math.floor((p / 100) * r - s / 2)
			return i > 0 ? i : 0
		}
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
		this.window.webContents.send('init', this.id, 'note', this.winProps.theme)
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
		this.window.webContents.send('init', this.id, 'list')
	}
}

//

export type Closed = (id: string) => void

//

export interface INoteWin {
	type: 'note'
	id: string
	theme: number
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
