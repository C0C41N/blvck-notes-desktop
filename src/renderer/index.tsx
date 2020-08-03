import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import App from './App'
import store from './redux'

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
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
)
