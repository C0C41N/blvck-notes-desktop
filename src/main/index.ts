import { app } from 'electron'

import { init } from './init'

app.on('ready', () => {
	init(app)
})

if (process.env.NODE_ENV !== 'development') {
	global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
