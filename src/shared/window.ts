import { BrowserWindow as Window, screen } from 'electron'

import { Opt, winURL } from './const'
import { Closed, IListWin, InitIPCArgs, INoteWin, IXY, winType } from './types'

class createWindow {
	public type: winType
	public window: Window

	private pos: IXY
	private options = Opt

	protected constructor(protected id: string, protected winProps: INoteWin | IListWin, protected closed: Closed) {
		this.type = this.winProps.type
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
}

export class createNoteWindow extends createWindow {
	public constructor(protected id: string, protected winProps: INoteWin, protected closed: Closed) {
		super(id, winProps, closed)
	}

	protected onReady() {
		super.onReady()
		this.window.webContents.send('init', {
			id: this.id,
			type: this.type,
			subTheme: this.winProps.subTheme,
		} as InitIPCArgs)
	}
}

export class createListWindow extends createWindow {
	public constructor(protected id: string, protected winProps: IListWin, protected closed: Closed) {
		super(id, winProps, closed)
	}

	protected onReady() {
		super.onReady()
		this.window.webContents.send('init', {
			id: this.id,
			type: this.type,
		} as InitIPCArgs)
	}
}
