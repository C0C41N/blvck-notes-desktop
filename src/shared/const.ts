import { randomKey } from './func'
import { INoteWin } from './window'

export const newNoteProps = (): INoteWin => {
	return {
		id: randomKey(8),
		type: 'note',
		theme: 0,
		pos: {
			x: 50,
			y: 50,
		},
		size: {
			x: 350,
			y: 350,
		},
	}
}

export const winURL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:9080'
		: `file://${__dirname}/index.html`
