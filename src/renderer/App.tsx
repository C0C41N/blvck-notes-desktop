import { hot } from 'react-hot-loader/root'
import React from 'react'

import Root from './components/Root'
import { funcInit } from './func'
import { InitTheme } from './func/themes'

function App() {
	funcInit()
	InitTheme(e => e())

	return <Root />
}

export default hot(App)
