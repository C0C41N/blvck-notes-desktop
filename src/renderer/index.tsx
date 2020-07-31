import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import App from './App'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#fff',
		},
		secondary: {
			main: '#3e3e3e',
		},
		text: {
			hint: '#3e3e3e',
			primary: '#fff',
			secondary: '#fff',
		},
		type: 'dark',
	},
	typography: {
		fontFamily: 'Montserrat',
	},
})

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
)
