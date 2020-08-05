require('electron-debug')({ showDevTools: true })

require('electron').app.on('ready', () => {
	require('devtron').install()
})

require('./index')
