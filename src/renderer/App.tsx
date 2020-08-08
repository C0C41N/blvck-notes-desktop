import React from 'react'
import { hot } from 'react-hot-loader/root'

import Root from './components/Root'
import { funcInit } from './func'
import { InitTheme } from './func/themes'

export default hot(() => {
	funcInit()
	InitTheme(e => e())

	return <Root />
})
