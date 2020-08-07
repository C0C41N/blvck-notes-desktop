import { ipcRenderer } from 'electron'

export class move {
	private animationId: any
	private mouseX: any
	private mouseY: any

	private onMouseDown(e: any) {
		this.mouseX = e.clientX
		this.mouseY = e.clientY

		document.addEventListener('mouseup', this.onMouseUp)
		requestAnimationFrame(this.moveWindow)
		console.log(`[${Date.now()}] Down`)
	}

	private onMouseUp(e: any) {
		document.removeEventListener('mouseup', this.onMouseUp)
		cancelAnimationFrame(this.animationId)
		console.log(`[${Date.now()}] Up`)
	}

	private moveWindow() {
		ipcRenderer.send('windowMoving', this.mouseX, this.mouseY, id)
		this.animationId = requestAnimationFrame(this.moveWindow)
	}
}
