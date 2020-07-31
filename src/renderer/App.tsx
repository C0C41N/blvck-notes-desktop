import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'

const App: FC = () => {
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
		</div>
	)
}

export default hot(App)
