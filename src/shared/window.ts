import { BrowserWindow as Window, nativeTheme, screen } from 'electron'

import { log } from '../log'
import { Opt, winURL } from './const'
import { Closed, IListWin, INoteWin, IXY, Theme } from './types'

class createWindow {
	public window: Window

	private pos: IXY
	private options = Opt

	protected theme: Theme

	protected constructor(protected id: string, protected winProps: INoteWin | IListWin, protected closed: Closed) {
		this.pos = this.convertPos()
		this.theme = this.getTheme()

		this.window = new Window(this.options)
		this.window.removeMenu()
		this.window.loadURL(winURL)

		this.window.on('closed', this.onClosed.bind(this))
		this.window.on('ready-to-show', this.onReady.bind(this))

		this.IPC()
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

	private getTheme() {
		return nativeTheme.shouldUseDarkColors ? 'dark' : 'light'
	}

	private IPC() {
		nativeTheme.on('updated', () => {
			this.theme = this.getTheme()
			this.window.webContents.send('onThemeChange', this.theme)
		})
	}
}

export class createNoteWindow extends createWindow {
	public type = 'note'

	public constructor(protected id: string, protected winProps: INoteWin, protected closed: Closed) {
		super(id, winProps, closed)
	}

	protected onReady() {
		super.onReady()
		this.window.webContents.send('init', this.id, 'note', this.theme, this.winProps.subTheme)
	}
}

export class createListWindow extends createWindow {
	public type = 'list'

	public constructor(protected id: string, protected winProps: IListWin, protected closed: Closed) {
		super(id, winProps, closed)
	}

	protected onReady() {
		super.onReady()
		this.window.webContents.send('init', this.id, 'list', this.theme)
	}
}
