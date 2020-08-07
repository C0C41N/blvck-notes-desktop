import { ipcRenderer } from 'electron'

export class TitlebarDragMove {
	private animationId: number = 0
	private mouseX: number = 0
	private mouseY: number = 0
	private state: boolean = false

	public constructor(private id: string) {
		this.onMouseDown = this.onMouseDown.bind(this)
		this.onMouseUp = this.onMouseUp.bind(this)
		this.moveWindow = this.moveWindow.bind(this)
	}

	public onMouseDown(e: React.MouseEvent) {
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
		this.state = false
		document.removeEventListener('mouseup', this.onMouseUp)
		cancelAnimationFrame(this.animationId)
	}

	private moveWindow() {
		ipcRenderer.send('windowMoving', this.mouseX, this.mouseY, this.id)
		this.animationId = requestAnimationFrame(this.moveWindow)
	}
}
