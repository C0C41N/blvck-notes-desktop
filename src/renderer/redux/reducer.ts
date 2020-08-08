import { Theme, winType } from 'src/shared/types'

import { PayloadAction } from '@reduxjs/toolkit'

import { IState } from './'

export const reducers = {
	setId: (state: IState, action: PayloadAction<string>) => {
		state.id = action.payload
	},

	setType: (state: IState, action: PayloadAction<winType>) => {
		state.type = action.payload
	},

	setTheme: (state: IState, action: PayloadAction<Theme>) => {
		state.theme = action.payload
	},

	setSubTheme: (state: IState, action: PayloadAction<number>) => {
		state.subTheme = action.payload
	},
}
