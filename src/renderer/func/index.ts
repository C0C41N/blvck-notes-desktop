import { ipcRenderer } from 'electron'

import { log } from '../../log'
import store, { setId, setTheme, setType } from '../redux'
import { winType } from '../redux/types'

const dispatch = store.dispatch

export function funcInit() {
	ipcListenInit()
}

export function closeWindow(id: string) {
	ipcRenderer.send('close', id)
}

export function ipcListenInit() {
	ipcRenderer.on('init', (_, id: string, type: winType, theme?: number) => {
		dispatch(setId(id))
		dispatch(setType(type))

		if (type === 'note' && theme) {
			dispatch(setTheme(theme))
		}
	})
}
