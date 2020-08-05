import React from 'react'

import Root from './components/Root'
import { funcInit } from './func'
import { InitTheme } from './func/themes'

export default function App() {
	funcInit()
	InitTheme(e => e())

	return <Root />
}
