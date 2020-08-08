import { Theme, winType } from 'src/shared/types'

import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit'

import { reducers } from './reducer'

const middlewares = [...getDefaultMiddleware()]

const initState = {
	id: '',
	type: 'note' as winType,
	theme: 'light' as Theme,
	subTheme: 0,
}

const slice = createSlice({
	name: 'main',
	initialState: initState,
	reducers,
})

export const { reducer, actions } = slice

const store = configureStore({
	reducer,
	middleware: middlewares,
})

export const { setId, setType, setTheme, setSubTheme } = actions

export default store

export type IState = typeof initState
