import { app } from 'electron'

import init from './init'

const onAllClosed = () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
}

const onActivate = () => {
	// If stack = null then Create new Note
}

app.on('ready', init)
app.on('window-all-closed', onAllClosed)
app.on('activate', onActivate)

if (process.env.NODE_ENV !== 'development') {
	global.__static = require('path')
		.join(__dirname, '/static')
		.replace(/\\/g, '\\\\')
}
