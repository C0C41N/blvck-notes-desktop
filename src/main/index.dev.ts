require('electron-debug')({ showDevTools: false })

require('electron').app.on('ready', () => {
	require('devtron').install()

	let installExtension = require('electron-devtools-installer')

	installExtension
		.default([installExtension.REACT_DEVELOPER_TOOLS])
		.then(() => {})
		.catch((err: Error) => {
			console.log('Unable to install devtools: \n', err)
		})
})

require('./index')
