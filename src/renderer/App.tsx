import React from 'react'

import Root from './components/root'
import { InitTheme } from './func/noteThemes'

export default function App() {
	InitTheme(e => e())

	return <Root />
}
