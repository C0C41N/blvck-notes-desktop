import { remote } from 'electron'

import { log } from '../../log'

export class TitlebarDragMove {
	private animationId: number = 0
	private mouseX: number = 0
	private mouseY: number = 0
	private state: boolean = false
	private window: Electron.BrowserWindow

	public constructor(private id: string) {
		this.onMouseDown = this.onMouseDown.bind(this)
		this.onMouseUp = this.onMouseUp.bind(this)
		this.moveWindow = this.moveWindow.bind(this)

		this.window = remote.getCurrentWindow()
	}

	public onMouseDown(e: React.MouseEvent) {
		log(['Down', { state: this.state }])
		if (this.state) {
			this.onMouseUp()
			return
		}

		this.mouseX = e.clientX
		this.mouseY = e.clientY
		this.state = true

		document.addEventListener('mouseup', this.onMouseUp)
		requestAnimationFrame(this.moveWindow)
	}

	private onMouseUp() {
		log(['UP', { state: this.state }])
		this.state = false
		document.removeEventListener('mouseup', this.onMouseUp)
		cancelAnimationFrame(this.animationId)
	}

	private moveWindow() {
		const { x, y } = remote.screen.getCursorScreenPoint()
		this.window.setPosition(x - this.mouseX, y - this.mouseY)
		this.animationId = requestAnimationFrame(this.moveWindow)
	}
}
