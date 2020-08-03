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

	return (
		<div className='App'>
			<div className='titlebar'></div>
			<p>
				Weather App <br /> Music App
				<br /> Notes <br />
				<br /> --- <br />
				<br /> Try : <br />
				<br /> Next <br /> VX
			</p>
			<Button
				onClick={() => {
					closeWindow(id)
				}}
			>
				Close
			</Button>
		</div>
	)
}

export default hot(App)
