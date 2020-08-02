import { userFileWin } from '../shared/userFiles'

export default function () {
	const winFile = new userFileWin()
	const winFileContent = winFile.read()

	if (winFileContent) {
		// Create Windows according to winFile
	}
	
	else {
		// Create new Note
	}
}
