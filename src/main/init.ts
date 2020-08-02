import { cls, log } from '../debug/log'
import { Stack } from '../shared/stack'
import { userFileWin } from '../shared/userFiles'

export default function () {
	const winFile = new userFileWin()
	const winFileContent = winFile.read()

	const stack = new Stack()

	cls()
	
	if (winFileContent) {
		// Create Windows according to winFile
	}
	
	else {
		stack.createNoteWindow({
			id: '',
			pos: {
				x: 100,
				y: 100
			},
			size: {
				x: 500,
				y: 500
			},
			type: 'note'
		})
	}
}
