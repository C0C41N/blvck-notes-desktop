import { BrowserWindowConstructorOptions } from 'electron'

import { randomKey } from './func'
import { INoteWin } from './types'

export const newNoteProps = (): INoteWin => {
	return {
		id: randomKey(8),
		type: 'note',
		subTheme: 0,
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

export const Opt: BrowserWindowConstructorOptions = {
	frame: false,
	title: 'Blvck Notes',
	show: false,
	webPreferences: {
		nodeIntegration: true,
	},
	backgroundColor: '#00000000',
	transparent: true,
}

export const winURL = process.env.NODE_ENV === 'development' ? 'http://localhost:9080' : `file://${__dirname}/index.html`
