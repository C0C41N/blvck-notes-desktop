import { randomKey } from './func'

export const newNoteProps = () => {
	return {
		id: randomKey(8),
		pos: {
			x: 0,
			y: 0,
		},
		size: {
			x: 200,
			y: 200,
		},
		type: 'note',
	}
}

export const winURL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:9080'
		: `file://${__dirname}/index.html`
