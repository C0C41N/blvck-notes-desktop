require('electron-debug')({ showDevTools: false })

require('electron').app.on('ready', () => {
	require('devtron').install()
})

require('./index')
