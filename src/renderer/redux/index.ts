import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit'

import { reducers } from './reducer'

const middlewares = [...getDefaultMiddleware()]

const initState = {}

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

export const {} = actions

export default store

export type IState = typeof initState
