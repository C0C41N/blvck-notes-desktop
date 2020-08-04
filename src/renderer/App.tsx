import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { useSelector } from 'react-redux'

import { Button } from '@material-ui/core'

import { log } from '../log'
import { closeWindow } from './func'
import { IState } from './redux'

const App: FC = () => {
	const id = useSelector((state: IState) => state.id)
	const type = useSelector((state: IState) => state.type)

	return <div></div>
}

export default hot(App)
