import { appendFileSync, writeFileSync } from 'fs'

const file = __dirname + '/log.json'

export function log(txt: string) {
	if (txt === '.') {
		writeFileSync(file, '')
		return
	}

	const time = new Date().toString().split(' ')[4]
	appendFileSync(file, '\n' + time + ' : ' + txt)
}
