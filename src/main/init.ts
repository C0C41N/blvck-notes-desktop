import { readWin } from './ts/readUserRes'

export default function () {
	const ReadWin = new readWin()
	const winFile = ReadWin.read()

	if (winFile) {
		// Create Windows according to winFile
	} else {
		// Create new Note
	}
}
