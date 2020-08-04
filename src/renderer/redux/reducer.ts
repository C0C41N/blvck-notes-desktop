import { PayloadAction } from '@reduxjs/toolkit'

import { IState } from './'
import { winType } from './types'

export const reducers = {
	setId: (state: IState, action: PayloadAction<string>) => {
		state.id = action.payload
	},

	setType: (state: IState, action: PayloadAction<winType>) => {
		state.type = action.payload
	},

	setTheme: (state: IState, action: PayloadAction<number>) => {
		state.theme = action.payload
	},
}
