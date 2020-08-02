

import { cls, log } from '../debug/log'
import { userFileWin } from '../shared/userFiles'

export default function () {
	const winFile = new userFileWin()
	const winFileContent = winFile.read()

	cls()
	log(winFileContent)

	if (winFileContent) {
		// Create Windows according to winFile
	}
	
	else {
		// Create new Note
	}
}
