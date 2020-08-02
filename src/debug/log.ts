import { appendFileSync, writeFileSync } from 'fs'

const file = __dirname + '/log.json'

export function cls() {
	writeFileSync(file, '')
}

export function log(o: any) {
	const time = new Date().toString().split(' ')[4]
	const txt = JSON.stringify(o, null, 2)
	appendFileSync(file, `[${time}]\n\n${txt}\n`)
}
